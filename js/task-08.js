const form = document.querySelector('.js-form')
const data = {
    email: '',
    password: ''
}
// console.dir(form)

form.addEventListener("submit", validation);

function validation(evt) {
    evt.preventDefault();

    const {
    elements: { email, password }
  } = evt.currentTarget;
    
   if (!email.value || !password.value ) {
    return alert("Всі поля повинні бути заповнені!");
   } else {
    data.email = email.value;
    data.password = password.value
   }
    
    document.querySelector('.js-form').reset();
    return console.log(data)
    
}