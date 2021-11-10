const checkBtn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

var ramData = {
    name: "ram",
    power: "2500",
    yuga: "Treata"
}
var krishnaData = {
    name: "krishna ",
    power: "2325",
    yuga: "Dwapar"
}

function checkPower(ramData,krishnaData){
    var ramPower = ramData.power + ramData.name.length*35;
    var krishnaPower = krishnaData.power + krishnaData.name.length*35;

    if(ramPower > krishnaPower){
        outputDiv.innerText = ramData.name;
    }else{
        outputDiv.innerText = krishnaData.name; 
    }
}

// FOR POWER ONLY 

// function checkPower(obj1, obj2) {
//     if (obj1.power > obj2.power) {
//         outputDiv.innerText = ramData.name;
//     } else {
//         outputDiv.innerText = krishnaData.name;
//     }
// }

//for Only NAmE POWER

// function checkCharacter(obj1, obj2) {
//     if (obj1.name.length * 35 > obj2.name.length * 35) {
//         outputDiv.innerText = ramData.name;
//     } else {
//         outputDiv.innerText = krishnaData.name;
//     }
// }

checkBtn.addEventListener("click", function (){
    checkPower(ramData,krishnaData)
})