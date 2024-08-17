import { auth, db } from "./config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {  handleLogout } from  "./app.js"


// Get references to DOM elements

const showIndexData = document.querySelector('#show-index-data');

const getProducts = localStorage.getItem('information')
console.log(getProducts);


function renderGetData(){
    showIndexData.innerHTML = '' 
    const products = JSON.parse(getProducts)
    products.forEach((item)=>{
        showIndexData.innerHTML += `
        
        `
    })
}
renderGetData()




const logoutBtn = document.querySelector('#logout-Btn');

logoutBtn.addEventListener('click', ()=>{
    handleLogout();
})



