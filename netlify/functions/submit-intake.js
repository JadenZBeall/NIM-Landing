import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.UPLOAD_REGION,
});

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const {
      name,
      email,
      manuscriptText,
      fileName,
      fileContentBase64,
      fileType,
    } = body;

    const id = uuidv4();

    const uploadParams = {
      Bucket: process.env.UPLOAD_BUCKET,
      Key: `${id}/${fileName || "manuscript.txt"}`,
      Body: fileContentBase64
        ? Buffer.from(fileContentBase64, "base64")
        : manuscriptText,
      ContentType: fileType || "text/plain",
    };

    await s3.upload(uploadParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        id,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message,
      }),
    };
  }
};
