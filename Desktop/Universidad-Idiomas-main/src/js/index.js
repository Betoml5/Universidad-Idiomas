import {registerUser} from './userService'; 

const btnRegister = document.querySelector('#btn-register');

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");



btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Click')
})
