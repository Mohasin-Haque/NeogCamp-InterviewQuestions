const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

var ramData = {
    name: "Ram",
    age: "25",
    yuga: "Treta",
}

var krishnaData = {
    name: "Krishna",
    age: "31",
    yuga: "Dwapar",
}

function checkAge(ramData, krishnaData){
    if(ramData.age < krishnaData.age){
        outputDiv.innerText = krishnaData.name
    }else{
        outputDiv.innerText = ramData.name
    }
}

btn.addEventListener("click", function () {
    checkAge(ramData,krishnaData)
 } )