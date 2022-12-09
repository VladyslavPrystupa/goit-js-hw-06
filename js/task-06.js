const input = document.querySelector('#validation-input')

input.addEventListener('blur', valid)


// console.log(input.dataset.length)

function valid(evt) { 
    if (evt.currentTarget.value.length == input.dataset.length) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
     else {
        input.classList.remove("valid");   
        input.classList.add("invalid");
    } 
}

