const inputText = document.querySelector("#inputText");
const h1Btn = document.querySelector("#h1");
const h2Btn = document.querySelector("#h2");
const h3Btn = document.querySelector("#h3");
const outputDiv = document.querySelector("#output");

function h1Heading() {
  outputDiv.innerHTML = `<h1> ${inputText.value}</h1>`;
}

function h2Heading() {
  outputDiv.innerHTML = `<h2> ${inputText.value}</h2>`;
}

function h3Heading() {
  outputDiv.innerHTML = `<h3> ${inputText.value}</h3>`;
}
h1Btn.addEventListener("click", h1Heading);
h2Btn.addEventListener("click", h2Heading);
h3Btn.addEventListener("click", h3Heading);
