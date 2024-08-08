import {  handleLogout } from  "./app.js"





const postForm = document.querySelector("#post-form")
const fileInp = document.querySelector(".fileInp")
const productTitle = document.querySelector(".product-title")
const productDescription = document.querySelector(".product-description")
const rsPrice = document.querySelector(".rs-price")
const postName = document.querySelector(".post-name")
const postNumber = document.querySelector(".post-number")


postForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(fileInp.value);
    console.log(productTitle.value);
    console.log(productDescription.value);
    console.log(rsPrice.value);
    console.log(postName.value);
    console.log(postNumber.value);

})











// logout button export karvaya ha index.html sy 

const logoutBtn = document.querySelector('#logout-Btn');

logoutBtn.addEventListener('click', ()=>{
    handleLogout();
})


