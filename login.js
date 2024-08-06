import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";


const loginForm = document.querySelector('#loginForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

loginForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
})