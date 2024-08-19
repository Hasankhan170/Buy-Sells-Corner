import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { db , storage , ref } from "./config.js"
import { uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";


const postForm = document.querySelector("#post-form")
const fileInp = document.querySelector(".fileInp")
const productTitle = document.querySelector(".product-title")
const productDescription = document.querySelector(".product-description")
const rsPrice = document.querySelector(".rs-price")
const postName = document.querySelector(".post-name")
const postNumber = document.querySelector(".post-number")
const postNowBtn = document.querySelector(".Post-now-btn")
const profileImg = document.querySelector("#profile-img")
const userName = document.querySelector("#user-name")
const userEmail = document.querySelector("#user-email")


// data get on register.js with the help of localStorage
const getProfile = localStorage.getItem('userProfile')

if(getProfile){

    const userProfile = JSON.parse(getProfile)
    console.log(userProfile);
    profileImg.src = JSON.parse(getProfile).profilePicture
    userName.innerHTML = JSON.parse(getProfile).firstName
    userEmail.innerHTML = JSON.parse(getProfile).email


}



// file input change event
postForm.addEventListener('submit', async (e)=>{
  e.preventDefault();

    if(fileInp.files.length === 0 || productTitle.value === '' || productDescription.value === '' || rsPrice.value === '' || fileInp.value === '' || postName.value === '' || postNumber.value === '' ){
        alert('please fill this form')
        return;  // form not found so function exit karega
    }



    const prouctImgFile = fileInp.files[0]

    postNowBtn.innerHTML = 'Loading...'
 
    try {
       const productImgUrl = await uploadImg(prouctImgFile)
      //  console.log('product image url:', productImgUrl)

        const docRef = await addDoc(collection(db, "postAd"), {
            title: productTitle.value,
            description: productDescription.value,
            price: rsPrice.value,
            name: postName.value,
            number: postNumber.value,
            PoductImage: productImgUrl 
        });

       alert('Product posted successfully!')
       postNowBtn.innerHTML = 'Post Now'
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    //    window.location = "./index.html"

    // validate form inputs
    productTitle.value = ""
    productDescription.value = ""
    rsPrice.value = ""
    fileInp.value = ""
    postName.value = ""
    postNumber.value = ""
      

})


async function uploadImg(file) {
 
    const spaceRef = ref(storage, `productImg/${postNumber.value}/${postName.value}`);

   const snapshot = await uploadBytes(spaceRef, file);

  const productImgUrl = await getDownloadURL(spaceRef);
   console.log('File available at:', productImgUrl);

  return productImgUrl;
}









// logout button export karvaya ha index.html sy 

// const logoutBtn = document.querySelector('#logout-Btn');

// logoutBtn.addEventListener('click', ()=>{
//     handleLogout();
// })




// document.addEventListener('DOMContentLoaded', () => {
//   const user = JSON.parse(localStorage.getItem('userProfile'));

//   if (user) {
//     // Assuming 'user' here is an object with the required properties
//     displayUserProfile(user);
//   } else {
//     console.error('No user profile found in localStorage.');
//   }
// });