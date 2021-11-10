const checkBtn = document.querySelector("#btn-check")
const outputDiv = document.querySelector("#output")

function fetchAPI(){
    fetch("https://mystery-api.kushanksriraj.repl.co/get")
    .then((res) => {
        if(res.status == 401){
            outputDiv.innerText = "You are not looged in"
        }else{
            outputDiv.innerText = "page not found"
        }
    })
}

checkBtn.addEventListener("click", fetchAPI)