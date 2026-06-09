const AWS = require("aws-sdk");
const formidable = require("formidable");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const BUCKET = process.env.S3_BUCKET_NAME;

exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();

    form.parse(event, async (err, fields, files) => {
      if (err) {
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ success: false, error: err.message })
        });
      }

      const file = files.file;

      // --- VALIDATION ---
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain"
      ];

      if (!allowedTypes.includes(file.mimetype)) {
        return resolve({
          statusCode: 400,
          body: JSON.stringify({ success: false, error: "Invalid file type" })
        });
      }

      // --- MANUSCRIPT ID ---
      const id = "MS-" + Date.now();

      const fileStream = fs.createReadStream(file.filepath);

      const uploadParams = {
        Bucket: BUCKET,
        Key: `submissions/${id}-${file.originalFilename}`,
        Body: fileStream,
        ContentType: file.mimetype,
        ServerSideEncryption: "AES256",
        Metadata: {
          title: fields.title || "",
          manuscriptId: id
        }
      };

      try {
        await s3.upload(uploadParams).promise();

        return resolve({
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            id
          })
        });
      } catch (uploadErr) {
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ success: false, error: uploadErr.message })
        });
      }
    });
  });
};
