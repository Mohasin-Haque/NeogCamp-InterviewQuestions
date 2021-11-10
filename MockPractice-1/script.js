const inputText = document.querySelector("#text-input")
const logBtn = document.querySelector("#btn-log")
const warnBtn = document.querySelector("#btn-warn")
const errorBtn = document.querySelector("#btn-error")

function blackColor(){
    inputText.style.color = "black";
}
function yellowColor(){
    inputText.style.color = "yellow";
}
function redColor(){
    inputText.style.color = "red";
}




logBtn.addEventListener("click", blackColor)
warnBtn.addEventListener("click", yellowColor)
errorBtn.addEventListener("click", redColor)