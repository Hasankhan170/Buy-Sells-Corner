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
    imgAvatar.innerHTML = `<button style ="color :white;font-size: 18px;
    font-weight: bold;"><a href="./login.html">Login</a></button>`;
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

handleLogout()






// get product data 



const productContainer = document.querySelector('#cards-index')

let arr = []


const getProducts = async () => {
  let user = null
  const q = collection(db, "postAd");
  const querySnapshot = await getDocs(q);
  renderData()
  querySnapshot.forEach((doc) => {
    user = doc.data();
    arr.push(user)
  console.log(arr);

  

  });
} 

getProducts()
function renderData() {

  arr.forEach((item)=>{
    productContainer.innerHTML += `
     <div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px]">
      <a href="#">
          <img width="100%" class="rounded-t-lg h-40 object-cover" src="" alt="" />
      </a>
      <div class="flex flex-col p-5 h-full flex-grow">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
          </a>
          <p class="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <div class="flex justify-end mt-auto">
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>
  </div>
    `

  })


  
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