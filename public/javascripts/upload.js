
document.getElementById("uploadFile").addEventListener("click", () => {
  var inputFile = document.getElementById("csvFile");
  var file = inputFile.files[0];

  var blob = file.slice(0, file.size);
  var newFile = new File([blob],  Date.now() + "File.csv");
  var formData = new FormData();
  formData.append("csvFile", newFile);

  fetch ('/upload', {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((x) => console.log(x));
});
