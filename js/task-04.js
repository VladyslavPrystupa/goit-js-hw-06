const value = document.querySelector('#value')

const btnDecr = document.querySelector('button[data-action="decrement"]')
const btnIncr =  document.querySelector('button[data-action="increment"]')

let counterValue = 0

btnDecr.addEventListener('click', minus);
btnIncr.addEventListener('click', plus);

function minus() {
    counterValue -= 1
    // console.log(counterValue)
    value.innerHTML = counterValue
}

function plus() {
    counterValue += 1
    // console.log(counterValue)
    value.innerHTML = counterValue

}




// console.dir(counterValue)



