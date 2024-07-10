document.title = 'Ubah Title'
const btn1 = document.getElementById("btn1")
const btn2 = document.querySelector(".btn2")

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

console.log(btn2)

function gantiWarna(params) {
  btn1.style.background = "aqua"
}
