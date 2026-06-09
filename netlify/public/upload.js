async function uploadFile() {
  const fileInput = document.getElementById("file");
  const title = document.getElementById("title").value;
  const status = document.getElementById("status");

  if (!fileInput.files.length) {
    status.innerText = "Please select a file.";
    return;
  }

  const file = fileInput.files[0];

  const allowed = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain"
  ];

  if (!allowed.includes(file.type)) {
    status.innerText = "Invalid file type.";
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", title);

  status.innerText = "Uploading...";

  const res = await fetch("/.netlify/functions/upload-manuscript", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  if (data.success) {
    status.innerText = "Submission received. Manuscript ID: " + data.id;
  } else {
    status.innerText = "Upload failed.";
  }
}
