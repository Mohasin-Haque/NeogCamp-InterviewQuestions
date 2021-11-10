const powerBtn = document.querySelector("#btn-power");
const outputDiv = document.querySelector("#output");

var ramData = {
    name :"ram" ,
    power: "2500" ,
    yuga : "Treta" ,
}
var krishnaData = {
    name :"Krishna" ,
    power: "2125" ,
    yuga : "Dwapar" ,
}


function checkPower (ramData,krishnaData) {
    if(ramData.power > krishnaData.power) {
    outputDiv.innerText = ramData.name;
  } else {
    outputDiv.innerText = krishnaData.name;
  }
}

powerBtn.addEventListener("click", function () {
  checkPower(ramData,krishnaData)
});
