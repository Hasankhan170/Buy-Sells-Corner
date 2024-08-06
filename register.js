import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, storage, ref } from "./config.js"; // Ensure correct import statement
import { uploadBytes , getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// Get references to DOM elements

const registerForm = document.querySelector('#registerForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const chooseFile = document.querySelector('#choose-file');

// Handle form submission

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the file from the input

    const file = chooseFile.files[0];

    // Create user with email and password

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log(file);

            // Handle file upload if a file was chosen
            if (file) {
                // Create a reference to the storage bucket
                const fileRef = ref(storage, file.name); // File path in storage
                
                uploadBytes(fileRef, file)
                    .then((snapshot) => {
                        console.log('Uploaded a blob or file!' , snapshot);
                        // Get the download URL

                        getDownloadURL(fileRef)
                           .then((downloadURL) => {
                                console.log('File available at:', downloadURL);
                            })
                           .catch((error) => {
                                console.log('Error getting URL:', error);
                            });
                    });
            } 
        })
        .then(() => {
            // This will run after user registration and file upload (if any) are complete
            setTimeout(() => {
                alert('Registered successfully!');
                window.location = "./login.html";
            }, 1000);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert('Error: ' + errorMessage);
        })
        
            // Clear input fields after successful registration and file upload
            email.value = "";
            password.value = "";
            firstName.value = "";
            lastName.value = "";
            chooseFile.value = "";
       
});





