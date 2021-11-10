const inputText = document.querySelector("#input")
const redBtn = document.querySelector("#red")
const greenBtn = document.querySelector("#green")
const blueBtn = document.querySelector("#blue")
 
function redColor(){
    inputText.style.color = "red"
}

function greenColor(){
    inputText.style.color = "green"
}

function blueColor(){
    inputText.style.color = "blue"
}

redBtn.addEventListener("click", redColor)
greenBtn.addEventListener("click", greenColor)
blueBtn.addEventListener("click", blueColor)