const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

const url = "https://unitube-server.herokuapp.com/playlists";

function fetchApi(){
    fetch(url)
    .then((response) => {
        if(response.status === 401){
            outputDiv.innerText = "You are not logged in";
        }else if(response.status===404){
            outputDiv.innnerText = "page not found";
        }else {
            return response.json();
        }
    })
}

btn.addEventListener("click", fetchApi)

// const url = "https://mystery-api.kushanksriraj.repl.co/get"
// const outputDiv = document.querySelector("#output")
// const btn = document.querySelector("#btn")
// console.log("phle")
// function fetchApi(){
//     console.log("sjdfnssssssssss")

// fetch(url).then((response) => {
//     console.log("jsdnfkjqsbf")
//     if(response.json ===401){
//         outputDiv.innerText = "youre not in dude"
//     }else if(response.status === 404){
//         outputDiv.innerText = "page not found"
//     }else if(response.status === 400){
//         outputDiv.innerText = "mocking man"
//     }else{
//         return response.json();
//     }
// })

// }
// console.log("last")

// btn.addEventListener("click", fetchApi)