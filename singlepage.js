
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
            <h1 style = "font-size:25px"">Rs ${item.price}</h1>
          </div>
          <div>
            <p><i class="fa-solid fa-download"></i> <i class="fa-regular fa-heart"></i></p>
          </div>
        </div>

        <p style="margin-top: 20px;">Title : ${item.title}</p>
        <p style="margin-top: 5px;">Descp : ${item.description}</p>

        <div class="blue-box-main">
          <div class="blue-box-1">
            <img class="blue-box-img" src="" alt="">
          </div>
          <div class="blue-box-text">
            <p>Name : ${item.name}</p>
            <p><i class="fa-solid fa-phone"></i> ${item.number}</p>
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





// singlepage.js
// Retrieve the profile picture URL from local storage
const profilePictureUrl = localStorage.getItem('profilePictureUrl');

// Check if the profile picture URL exists and set it to the profile image element
const profileImg = document.querySelector('#profile-img');

if (profilePictureUrl) {
  // Set the src attribute directly if profileImg is an img element
  profileImg.src = profilePictureUrl;
  console.log(profilePictureUrl);
} else {
  // Optionally, set a default image if no profile picture URL is available
  profileImg.src = '';
}


// Other code to handle user data and page functionality
