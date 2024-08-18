import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";



const loginForm = document.querySelector('#loginForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const loginBtn = document.querySelector('.btn')




loginForm.addEventListener('submit' ,(e)=>{
  
  e.preventDefault();
  // agr user bina email or password daly button pr click kary jab ye condtion chaly gi

  if(email.value === '' || password.value ===''){
    alert('Please fill all fields!')
    return; 
  }

  loginBtn.innerHTML = "Loading...";

  // user login hoga uska kam ha ye 
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setTimeout(() => {
      alert('login successfully!')
      window.location = "./index.html"
    }, 1000);
    loginBtn.innerHTML = "Login";
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);

    alert('Login failed: ' + errorMessage);

    // Reset form to allow user to try again

    
  });
    // validate form inputs
    email.value = ""
    password.value = ""
    
})


