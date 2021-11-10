const text = document.querySelector("#text")
const btn = document.querySelector("#btn")

function hideText(){
    text.style.display = "none"
}

btn.addEventListener("click", hideText)