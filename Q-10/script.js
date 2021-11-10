const inputText = document.querySelector("#input")
const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

btn.disabled = true;

function checkPassword(){
    if(inputText.value.length < 10){
        btn.disabled = true;
        outputDiv.innerText = "Error";
    }else{
        btn.disabled = false;
        outputDiv.innerText = "Success";
    }
}

function btnEnabler(){
    if(inputText.value.length < 10){
        btn.disabled = true;
    }else{
        btn.disabled = false;
    }
}

inputText.addEventListener("input", btnEnabler)
btn.addEventListener("click", checkPassword)