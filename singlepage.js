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
        <div class="main-boxSingle mt-10">
      <div class=".img-box-singlePage"> 
        <img class="img-singlePage" src="${item.PoductImage}" alt="">
      </div>

      <div class="test-box-singlePage">

        <div class="inner-main">
          <div>
            <h1>Rs ${item.price}</h1>
          </div>
          <div>
            <p><i class="fa-solid fa-download"></i> <i class="fa-regular fa-heart"></i></p>
          </div>
        </div>

        <p style="margin-top: 20px;">${item.title}</p>
        <p style="margin-top: 5px;">${item.description}</p>

        <div class="blue-box-main">
          <div class="blue-box-1">
            <img class="blue-box-img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1gMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMREAAAAAAACgAqCCgAgAKJFAABRAFQAAFABBBUUAAAABQEAQUAAABFAQKAoAAAAAAACpFBEUUQAFAQBKQFRUBRAFAFAAEUBFQEUQBRFAAAAAAARUBUVAAAAAAAFQBQBQAEFQQAAVFABAXFRQQAUAEEVAFQAAAAFABAAVRFAEUAAAAQAAAAAFAAAAQVBAAAAAAAAAAFAFAAABAAAWAqAKgAigAAAIAIAAAAAAAAAAoAoAIAAAAAKACKAAAAIqCAAAAAAAAAAKIoAAAFAAAVAUAAAAAEEAAAAAAAAAAAAgQFAFAIACggCoAIAAAAIAoAIAAAAAoAAAAAAAoCgAP/Z" alt="">
          </div>
          <div class="blue-box-text">
            <p>${item.name}</p>
            <p>${item.number}</p>
            <button id="call-btn">Add to Cart</button>
            <button id="chat-btn">Buy Now</button>

          </div>

        </div>
        <button id="add-to-card-btn">Add to cart</button>
        
      </div>
        `
    })
}
renderGetData()




const logoutBtn = document.querySelector('#logout-Btn');

logoutBtn.addEventListener('click', ()=>{
    handleLogout();
})



