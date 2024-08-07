import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Select DOM elements
const profileImg = document.querySelector('#profile-img');
const imgAvatar = document.querySelector('#img-section');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const logoutBtn = document.querySelector('#logout-Btn');

// Function to handle user profile display
export const displayUserProfile = async (user) => {
  const uid = user.uid;
  console.log(uid);

  const q = query(collection(db, "users"), where("email", "==", user.email));
  const querySnapshot = await getDocs(q);
  let userData = null;

  querySnapshot.forEach((doc) => {
    userData = doc.data();
    console.log(userData);
    if (userData.profilePicture) {
      profileImg.src = userData.profilePicture;
      userName.innerHTML = userData.firstName;
      userEmail.innerHTML = userData.email;
    } else {
      profileImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOUw1odhxliZ2amTsikd3QEFMtox7V947jg&s';
    }
  });

  // imgAvatar.innerHTML = ''; // Clear login button if user is logged in
};

const handleAuthChange = async (user) => {
  if (user) {
    // User is signed in
    await displayUserProfile(user);
  } else {
    // No user is signed in
    imgAvatar.innerHTML = `<button><a href="./login.html">Login</a></button>`;
  }
};

onAuthStateChanged(auth, handleAuthChange);

// Handle logout
 export const handleLogout = ()=>{
  logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
      window.location = 'login.html';
    }).catch((error) => {
      console.log(error);
    });
  });
}


























// import {  onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { auth ,db } from "./config.js";
// import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// const profileImg = document.querySelector('#profile-img')
// const imgAvatar = document.querySelector('#img-section')
// const userName = document.querySelector('#user-name')
// const userEmail = document.querySelector('#user-email')


// onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(uid);

//       const q = query(collection(db, "users"), where("email", "==", user.email));

//       const querySnapshot = await getDocs(q);
//       let userData = null
//       querySnapshot.forEach((doc) => {
//         userData = doc.data()
//         console.log(userData);
//         if(userData.profilePicture){
//           profileImg.src = userData.profilePicture
//           userName.innerHTML = userData.firstName
//           userEmail.innerHTML = userData.email
          
//         }else{
//           profileImg.src = ''
//         }
//         ;
//       });
//     } else {
//       imgAvatar.innerHTML = `<button><a href = "./login.html">Login</a></button>`
//       window.location = './login.html'
//     }
//   });
  

//   // signout 

//   const logoutBtn = document.querySelector('#logout-Btn')
  
//   logoutBtn.addEventListener('click', ()=>{
//     signOut(auth).then(() => {
//       window.location = 'login.html'
//     }).catch((error) => {
//       console.log(error);
      
//     });
//   })