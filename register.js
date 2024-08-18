import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, storage, ref, db } from "./config.js";
import { uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { collection, addDoc, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Get references to DOM elements
const registerForm = document.querySelector('#registerForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const chooseFile = document.querySelector('#choose-file');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = chooseFile.files[0];

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        // Prepare user data
        let profilePictureUrl = null;
        
        if (file) {
            // Create a reference to the storage bucket
            const fileRef = ref(storage, `profilePictures/${user.uid}/${email.value}`); // Use user UID to avoid name collisions

            // Upload file
            const snapshot = await uploadBytes(fileRef, file);
            console.log('Uploaded a blob or file!', snapshot);

            // Get download URL
            profilePictureUrl = await getDownloadURL(fileRef);
            
            console.log('File available at:', profilePictureUrl);

            localStorage.setItem('profilePictureUrl', profilePictureUrl);
        }

        const userData = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
        }

                // Add profile picture URL if it exists
                if (profilePictureUrl) {
                    userData.profilePicture = profilePictureUrl;
                }

        // Add user data to Firestore
        await addDoc(collection(db, "users"), userData);


        console.log("User data added with profile picture URL:", profilePictureUrl);

        



        // Clear input fields
        email.value = "";
        password.value = "";
        firstName.value = "";
        lastName.value = "";
        chooseFile.value = "";

        // Notify user and redirect
        setTimeout(() => {
            alert('Registered successfully!');
            window.location = "./login.html";
        }, 1000);

    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
});
