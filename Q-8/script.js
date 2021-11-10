const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")



function showError(){
    fetch("https://unitube-server.herokuapp.com/playlists")
    .then(response => {
        if(response.status === 401){
        outputDiv.innerText = response.statusText
        }
    })
}

btn.addEventListener("click", showError)