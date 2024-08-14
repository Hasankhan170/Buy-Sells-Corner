import { auth, db } from "./config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// Get references to DOM elements

const showIndexData = document.querySelector('#show-index-data');

const productGet = localStorage.getItem('selectedProduct');

if (productGet) {
    const get = JSON.parse(productGet);

    // Make sure to include the necessary classes and styles
    showIndexData.innerHTML = `
        <div class="img-box-singlePage">
            <img class="img-singlePage" src="${get.PoductImage}" alt="Product image">
        </div>
        <div class="test-box-singlePage">
            <div class="inner-main">
                <div class="innner-div-1">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">RS ${get.price}</h2>
                </div>
                <div class="innner-div-2">
                    <p class="text-1xl text-gray-900 dark:text-white">
                        <i class="fa-regular fa-circle-down"></i>
                        <i class="fa-regular fa-heart"></i>
                    </p>
                </div>
            </div>
            <p class="product-description-title">Product Description</p>
            <p class="product-description">${get.description}</p>
            <div class="blue-box-main">
                <div class="blue-box-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTjeJUaD3MswsasRaok9NP4VI9a6sWzTksQ&s" alt="" class="blue-box-img">
                </div>
                <div class="blue-box-2">
                    <h1 class="blue-box-text">hello</h1>
                    <h1 class="blue-box-text">hello hasan here</h1>
                    <button id="call-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg">
                        <i class="fa-solid fa-phone" style="padding-right: 15px;"></i> Call Now
                    </button>
                    <button id="chat-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg">
                        <i class="fa-regular fa-comment" style="padding-right: 10px;"></i> Chat
                    </button>
                </div>
            </div>
            <button id="add-to-cart-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg">
                Add to Cart
            </button>
        </div>
    `;
}


// Fetch data from Firestore and display it in the browser

// const getProducts = async () => {
//   try {
    
//     const q = collection(db, "postAd");
//     const querySnapshot = await getDocs(q);
//     let arr = []
    
//     querySnapshot.forEach((doc) => {
//       arr.push(doc.data())
//     });
    
//     // Display data in the browser
//     showIndexData.innerHTML = arr.map(product => `
// <div class="img-box-singlePage">
//         <img class="img-singlePage" src="${product.PoductImage}" alt="product image">
//     </div>
//     <div class="test-box-singlePage">
//   <div class="inner-main">
//     <div class="innner-div-1">
//         <h2 class="text-2xl font-bold text-gray-900 dark:text-white">RS 80,000</h2>
//        </div>
//        <div class="innner-div-2">
//         <p class="text-1xl text-gray-900 dark:text-white"><i class="fa-regular fa-circle-down"></i> <i class="fa-regular fa-heart"></i></p>
//        </div>
//   </div>
//         <p class="">Product Description</p>
//         <p class="">Iphone XS MAX 64GB PTA APPROVED</p>
//         <div class="blue-box-main">
//           <div class="blue-box-1">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTjeJUaD3MswsasRaok9NP4VI9a6sWzTksQ&s" alt="" class="blue-box-img">
//           </div>
//           <div class="blue-box-2">
//             <h1 class="blue-box-text">hello</h1>
//             <h1 class="blue-box-text">hello hasan here</h1>
//             <button id="call-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg"><i class="fa-solid fa-phone" style="padding-right: 15px;"></i>Call Now</button>
//             <button id="chat-btn" class="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg"><i class="fa-regular fa-comment" style="padding-right: 10px;"></i> Chat</button>
//           </div>
//         </div>
//         <button id="add-to-card-btn" class="bg-gray-300 hover:bg-gray-400  text-gray-900 font-medium py-2 px-4 rounded-lg">Add to Cart</button>
//     </div>
//   </div>
//     `).join('');
//   } catch (error) {
//     console.error("Error getting documents: ", error);
//   }
// }

// getProducts()