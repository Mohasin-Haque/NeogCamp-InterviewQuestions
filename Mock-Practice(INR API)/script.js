const btnOne = document.querySelector("#btn-one")
const btnTwo = document.querySelector("#btn-two")
const outputDiv = document.querySelector("#output")

const responseURL = "https://mystery-api.kushanksriraj.repl.co/get";
const errorURL = "https://employeedetails.free.beeceptor.com/my/api/path";
btnOne.addEventListener("click", ()=>{
  fetch(responseURL).then(response => {
    if(response.status === 401){
      outputDiv.innerText = "Wait a minute...!! WHO ARE YOU??? "
    }else if(response.status === 404){
      outputDiv.innerText = "I cant Found you..."
    }else{
      outputDiv.innerText ="You ARE VERY CLEVER"
    }
  })
})

btnTwo.addEventListener("click", ()=>{
  fetch(errorURL).then(res => res.json())
  // .then(data => outputDiv.innerText = data)
  .catch(err => outputDiv.innerHTML = `Error with message: ${err}`)
})