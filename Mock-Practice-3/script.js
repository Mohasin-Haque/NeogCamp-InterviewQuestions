const btn = document.querySelector("#btn")
const outputDiv = document.querySelector("#output")

const url = "https://jsonplaceholder.typicode.com/todos"

btn.addEventListener("click", () => {
    fetch(url).then(res => res.json()).then(data => {
      for(let i = 0; i< data.length; i++){
        outputDiv.innerHTML += `<p>${data[i].title}</p>`
      }
    })
  })