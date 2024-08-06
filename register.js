import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";


const registerForm = document.querySelector('#registerForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')


registerForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value,firstName.value,lastName.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      
      setTimeout(()=>{
        alert('register successfully!')
        window.location = "./login.html"
      },1000)

      email.value = ""
      password.value = ""
      firstName.value = ""
      lastName.value = ""

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
})