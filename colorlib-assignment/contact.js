
// form validation
const send = document.querySelector('form button');
const error = document.querySelector('.error')
const form = document.querySelector("form")


send.addEventListener('click', (e)=> {
    e.preventDefault();

    const message = form.elements['message'].value;
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const text = form.elements['text'].value;

    try{
        if(message == "") throw "please fill the meassage field"
        if (name == "") throw "please fill the name field"
        if(email == "") throw "please fill the email field"
        if (text == "") throw "please fill the subject field"
    } catch(err) {
        error.textContent = err
    }
})

const inputs = document.querySelectorAll("form input, textarea")

inputs.forEach((input) => {
    input.addEventListener("input", ()=> {
        error.textContent = ""
    })
})