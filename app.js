import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Select DOM elements
const profileImg = document.querySelector('#profile-img');
const imgAvatar = document.querySelector('#img-section');
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const logoutBtn = document.querySelector('#logout-Btn');
// const formSearch = document.querySelector('.searchForm');
// const SearchBar = document.querySelector('.searchBar');



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

    localStorage.setItem('userProfile', JSON.stringify(userData));
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


try {
  const q = collection(db, "postAd");
  const querySnapshot = await getDocs(q);
  arr = []
  querySnapshot.forEach((doc) => {
    arr.push(doc.data())
})
console.log(arr);
renderData(arr)
} catch (e) {
  console.log('Error getting documents:', e);

}

} 




let data = []

function renderData(arr) {
  if (!productContainer) return;
  productContainer.innerHTML = '' 
  arr.forEach((item , index)=>{
    productContainer.innerHTML += `
<div id = "cards-manage" class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px]">
<a href="#">
    <img id ="card-adjust" class="rounded-t-lg  w-full object-cover" src="${item.PoductImage}" alt="Product Image" />
  </a>
  <div class="flex flex-col p-5 h-full flex-grow">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
    </a>
    <p id ="para-dec" class="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
    <div class="flex justify-between items-center mt-auto">
      <p class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">RS ${item.price}</p>
      <a href="./singlepage.html" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id = "read-more-data">
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

  const readMoreData = document.querySelectorAll('#read-more-data')

  readMoreData.forEach((btn,index) => {
    btn.addEventListener('click', () => {
      data = []
      data.push(arr[index])

      
      localStorage.setItem('information', JSON.stringify(data))
    })

  })

}

getProducts()


// serach bar 





const searchInput = document.querySelector("#search");


searchInput.addEventListener("input", (e) => {
  const searchBar = e.target.value.toLowerCase();
  const filteredAds = arr.filter((ad) =>
    ad.title.toLowerCase().includes(searchBar)
  );
  renderData(filteredAds);
});







































































// import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { auth, db } from "./config.js";
// import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// // Select DOM elements
// const profileImg = document.querySelector('#profile-img');
// const imgAvatar = document.querySelector('#img-section');
// const userName = document.querySelector('#user-name');
// const userEmail = document.querySelector('#user-email');
// const logoutBtn = document.querySelector('#logout-Btn');



// let data =[]
// // Function to handle user profile display
// export const displayUserProfile = async (user) => {
//   const uid = user.uid;
//   console.log(uid);

//   const q = query(collection(db, "users"), where("email", "==", user.email));
//   const querySnapshot = await getDocs(q);
//   let userData = null;

//   querySnapshot.forEach((doc) => {
//     userData = doc.data();
//     console.log(userData);
//     if (userData.profilePicture) {
//       profileImg.src = userData.profilePicture;
//       userName.innerHTML = userData.firstName;
//       userEmail.innerHTML = userData.email;
//     } else {
//       profileImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOUw1odhxliZ2amTsikd3QEFMtox7V947jg&s';
//     }
//   });

//   // imgAvatar.innerHTML = ''; // Clear login button if user is logged in
// };

// const handleAuthChange = async (user) => {
//   if (user) {
//     // User is signed in
//     await displayUserProfile(user);
//   } else {
//     // No user is signed in
//     imgAvatar.innerHTML = `<button style ="color :white;font-size: 18px;
//     font-weight: bold;"><a href="./login.html">Login</a></button>`;
//   }
// };

// onAuthStateChanged(auth, handleAuthChange);


// // Handle logout
//  export const handleLogout = ()=>{
//   logoutBtn.addEventListener('click', () => {
//     signOut(auth).then(() => {
//       window.location = 'login.html';
//     }).catch((error) => {
//       console.log(error);
//     });
//   });
// }

// handleLogout()






// // get product data 



// const productContainer = document.querySelector('#cards-index')

// const getProducts = async () => {
// try {
//   const q = collection(db, "postAd");
//   const querySnapshot = await getDocs(q);
//   let arr = []
  
//   querySnapshot.forEach((doc) => {
//     arr.push(doc.data())
//     console.log(arr);
// })
// renderData(arr)
// } catch (error) {
//   console.log(error);
  
// }

// } 

// getProducts()



// function renderData(arr) {
//   productContainer.innerHTML = '' 

//   arr.forEach((item,index)=>{

//     const productId = `${index}`

//     localStorage.setItem(productId ,JSON.stringify(item))


//     productContainer.innerHTML += `
// {/* <div id = "cards-manage" class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px]">
// <a href="#">
//     <img id ="card-adjust" class="rounded-t-lg  w-full object-cover" src="${item.PoductImage}" alt="Product Image" />
//   </a>
//   <div class="flex flex-col p-5 h-full flex-grow">
//     <a href="#">
//       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
//     </a>
//     <p id ="para-dec" class="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
//     <div class="flex justify-between items-center mt-auto">
//       <p class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">RS ${item.price}</p>
//       <a href=".l" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id = "more-info">
//         Read more
//         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//         </svg>
//       </a>
//     </div>
//   </div>
// </div> */}


//     `

//   })

//   const moreInfo = document.querySelectorAll('#more-info')

//   moreInfo.forEach((btn,index)=>{
//     btn.addEventListener('click', ()=>{
//       data = []
//       data.push(arr[index])

//       localStorage.setItem('information',JSON.stringify(moreInfo))

//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           window.location = 'singlepage.html';
//         } else {
//           alert('please login first')
//         }
//       });
      

//     })
//   })


  
// }























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