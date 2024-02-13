var reader = new FileReader();
var picker = document.getElementById("csvFile");
var tablew = document.getElementById("tableOut");
var proceed = document.getElementById("proceed");
var textArea = document.getElementById("chatOutput");

// (B) READ CSV ON FILE PICK
picker.onchange = () => {
  reader.readAsText(picker.files[0]);

};
// (C) READ CSV & GENERATE TABLE
reader.onloadend = () => {
    tablew.innerHTML = "";
    const csvData = reader.result;
    console.log(csvData);
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');

    const headerRow = tablew.insertRow();
    headers.forEach(header => {
      const cell = headerRow.insertCell();
      cell.textContent = header;
    });

    for (let i = 1; i < 5; i++) {
      const values = lines[i].split(',');
      const dataRow = tablew.insertRow();
      for (let j = 0; j < values.length; j++) {
        const cell = dataRow.insertCell();
        cell.textContent = values[j];
      }
    }
};

proceed.addEventListener("click", () => {
  var inputFile = document.getElementById("csvFile");
  fetch('/continue', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: reader.result
    })
  })
    .then((res) => res.text())
    .then((x) => console.log(x))
});

document.getElementById("runChat").addEventListener("click", () => {
  fetch('/runChat', {
    method: "POST",
  })
    .then((res) => {
      console.log(res);
      textArea.value = res.text()
    })
    .then((x) => console.log(x))
});