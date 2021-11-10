const inputText = document.querySelector("#input");
const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.querySelector("#decrease") 

let changeSize = 10;

function increaseSize(){
    changeSize = changeSize + 2;
    inputText.style.fontSize = `${changeSize}px`;
}

function decreaseSize(){
    changeSize = changeSize - 2;
    inputText.style.fontSize = `${changeSize}px`;
}

increaseBtn.addEventListener("click", increaseSize)
decreaseBtn.addEventListener("click", decreaseSize)