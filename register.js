import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth ,storage ,ref } from "./config.js"; // Correct import statement
import { uploadBytes , getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";



const registerForm = document.querySelector('#registerForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const chooseFile = document.querySelector('#choose-file')


registerForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    // get the file from the input 
    const file = chooseFile.files[0]
    
    // Create user with email and password
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log(file);
      

      // Handle file upload if a file was chosen

      if(file){
        // create a reference to the storage bucket
        const storageRef = ref(storage, file.name) // File path in storage
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
        
          // Update user profile with name and image url

      getDownloadURL(storageRef)
      .then((url) => {
        console.log(url);
      })
      .catch((error)=>{
        console.log(error);
        alert('Error getting download URL');
      })



      
      

      then(()=>{
        setTimeout(()=>{
            alert('register successfully!')
            window.location = "./login.html"
          },1000)
      })
    }


    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });


    // clear inputs fields
    email.value = ""
    password.value = ""
    firstName.value = ""
    lastName.value = ""
    chooseFile.value = ""
})





