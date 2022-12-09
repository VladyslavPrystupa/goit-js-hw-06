const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


console.log(input.value)

input.addEventListener('input', size)

function size(evt) {
    text.style.fontSize = evt.currentTarget.value + 'px'
}

