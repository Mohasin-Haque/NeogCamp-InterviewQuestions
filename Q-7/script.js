const inputText = document.querySelector("#inputText")
const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

function fetchUrl(){
    fetch(url + inputText.value).then(response => outputDiv.innerText = response.json()).then(json => outputDiv.innerText = json.contents.text)
}
btn.addEventListener("click", fetchUrl)