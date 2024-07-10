document.title = 'Ubah Title'
const body = document.body
body.append("Hello World!")

const h1 = document.createElement("h1")
h1.textContent = "Belajar DOM Javascript"
body.append(h1)

const myName = document.createElement("p")
myName.innerHTML = "Zunedi Sinambela"
body.append(myName)

const age = document.createElement("b")
age.innerText = "26"
body.append(age)
