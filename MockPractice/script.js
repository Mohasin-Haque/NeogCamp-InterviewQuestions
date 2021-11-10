const checkBtn = document.querySelector("#btn-check")
const outputDiv = document.querySelector("#output")

function fetchAPI(){
    fetch("https://mystery-api.kushanksriraj.repl.co/get")
    .then((res) => {
        if(res.status === 401){
            outputDiv.innerText = "You are not looged in"
        }else if(res.status === 404){
            outputDiv.innerText = "page not found"
        }else if(res.status === 200){
            outputDiv.innerText = "you are on the right page"
        }else{
            return res.json();
        }
    })
}

checkBtn.addEventListener("click", fetchAPI)