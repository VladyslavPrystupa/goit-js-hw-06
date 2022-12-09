function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color')
const span = document.querySelector('.color')
const body = document.body

// console.log(body)
// console.log(changeBtn)

changeBtn.addEventListener("click", color)

function color(evt) {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}




