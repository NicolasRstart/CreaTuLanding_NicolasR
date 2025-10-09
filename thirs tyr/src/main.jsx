import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./assets/CartContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5mOqWD9-4b25CTnyK8azlOwSPCbVZIVo",
  authDomain: "landing-nico-r.firebaseapp.com",
  projectId: "landing-nico-r",
  storageBucket: "landing-nico-r.firebasestorage.app",
  messagingSenderId: "1069587971759",
  appId: "1:1069587971759:web:d9cec99aacf07918851e5a",
  measurementId: "G-J33YM4PM6F"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
