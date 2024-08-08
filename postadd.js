import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {  handleLogout } from  "./app.js"
import { db } from "./config.js"





const postForm = document.querySelector("#post-form")
const fileInp = document.querySelector(".fileInp")
const productTitle = document.querySelector(".product-title")
const productDescription = document.querySelector(".product-description")
const rsPrice = document.querySelector(".rs-price")
const postName = document.querySelector(".post-name")
const postNumber = document.querySelector(".post-number")

// arr ma store krvane ky liye 
let arr = []

// file input change event
postForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log(fileInp.value);
    console.log(productTitle.value);
    console.log(productDescription.value);
    console.log(rsPrice.value);
    console.log(postName.value);
    console.log(postNumber.value);

    try {
        const docRef = await addDoc(collection(db, "users"), {
            title: productTitle.value,
            description: productDescription.value,
            price: rsPrice.value,
            name: postName.value,
            number: postNumber.value,
            image: fileInp.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }



    //    arr.push(docRef.id)
       console.log(arr);
       window.location = "./index.html"
       alert('Product posted successfully!')
       handleLogout(); // logout karega ky liye handleLogout() function sy call karega
      




})











// logout button export karvaya ha index.html sy 

const logoutBtn = document.querySelector('#logout-Btn');

logoutBtn.addEventListener('click', ()=>{
    handleLogout();
})


