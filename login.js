import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";



const loginForm = document.querySelector('#loginForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



loginForm.addEventListener('submit' ,(e)=>{
  e.preventDefault();
  


  
  if(email.value === '' || password.value ===''){
    alert('Please fill all fields!')
    return; 
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setTimeout(() => {
      alert('login successfully!')
      window.location = "./index.html"
    }, 1000);
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    // validate form inputs
    email.value = ""
    password.value = ""
})


