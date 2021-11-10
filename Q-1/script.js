const inputOne = document.querySelector("#inputOne");
const inputTwo = document.querySelector("#inputTwo");
const outputDiv = document.querySelector("#output");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

function addition(){
    outputDiv.innerText = Number(inputOne.value) + Number(inputTwo.value);
}

function subtraction(){
    outputDiv.innerText = Number(inputOne.value) -  Number(inputTwo.value);
}

function multiplication(){
    outputDiv.innerText = Number(inputOne.value) * Number(inputTwo.value);
}

function division(){
    outputDiv.innerText = Number(inputOne.value) / Number(inputTwo.value);
}


add.addEventListener("click", addition)
sub.addEventListener("click", subtraction)
mul.addEventListener("click", multiplication)
div.addEventListener("click", division)