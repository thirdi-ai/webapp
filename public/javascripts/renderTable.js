var reader = new FileReader();
var picker = document.getElementById("csvFile");
var tablew = document.getElementById("tableOut");
var proceed = document.getElementById("proceed");
var htmlString = `<h2>Analysis and Recommendations</h2>

<ul class="adset-analysis">
  <li>
    <h3>Adset 2</h3>
    <p><strong>Positive Trend:</strong> CR of 3.95% and increasing LTV. Recommendation: **Continue to scale up budget.**</p>
  </li>
  <li>
    <h3>Adset 4</h3>
    <p><strong>Strong Performance:</strong> 10% lower CAC &amp; 15% better than Adset 1. Recommendation: **Redirect ₹50,000 from Adset 1 to Adset 4.**</p>
  </li>
  <li>
    <h3>ADSET 9</h3>
    <p><strong>Weekend Boost:</strong> 20% higher CR observed on weekends. Recommendation: **Shift Ad spends to weekends only.**</p>
  </li>
  <li>
    <h3>Adset 3</h3>
    <p><strong>Declining Performance:</strong> Declining CR WoW since the start of the month. Recommendation: **Revise creatives with clear call-to-action.**</p>
  </li>
</ul>

<h3>Additional Recommendations</h3>
<ol>
<li> TESTING LI </li
  <li><strong>Timing:</strong> Allocate more budget towards afternoon and early evening (25% increase in engagement).</li>
  <li><strong>Data Collection:</strong> Prioritize complete tracking mechanisms for comprehensive performance data.</li>
</ol>`

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

document.getElementById("runChatGPT").addEventListener("click", () => {
  document.getElementById("chatGPTResult").innerHTML = `<div class="loader"></div>`
  fetch('/runChatGPT', {
    method: "POST",
  })
    .then((res) => {})
    .then((x) => {
      console.log(x);
      document.getElementById("chatGPTResult").innerHTML = htmlString;
      ;
  } )
});


document.getElementById("runGemini").addEventListener("click", () => {
  fetch('/runChat', {
    method: "POST",
  })
    .then((res) => {
      console.log(res);
      console.log(res.text());
      textArea.value = res.text()
    })
    .then((x) => console.log(x))
});