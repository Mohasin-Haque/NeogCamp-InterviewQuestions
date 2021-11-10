const inputName = document.querySelector("#name-input")
const passwordName = document.querySelector("#password-input")
const checkBtn = document.querySelector("#check-btn")
const outputDiv = document.querySelector("#output")

function checkMatch(){
    if(inputName.value===passwordName.value){
        outputDiv.innerText = "Your Name and Password can not be same"
    }else{
        outputDiv.innerText = "you are good to go"
    }
}

checkBtn.addEventListener("click", checkMatch)