
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


 const firebaseConfig = {
   apiKey: "AIzaSyBQBDqS40SfCO6ozKzEzBuxnlXR1QuthHM",
   authDomain: "buy-sells-corner-31175.firebaseapp.com",
   projectId: "buy-sells-corner-31175",
   storageBucket: "buy-sells-corner-31175.appspot.com",
   messagingSenderId: "598214787948",
   appId: "1:598214787948:web:95610d7813ec57c5b0e949",
   measurementId: "G-LQD82MQM5Z"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);