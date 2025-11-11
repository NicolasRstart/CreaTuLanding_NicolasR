import React from "react";
import ReactDOM from "react-dom/client";
import App from "./thirstyr/src/App.js";
import "./index.css";
import { CartProvider } from "./assets/CartContext";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5mOqWD9-4b25CTnyK8azlOwSPCbVZIVo",
  authDomain: "landing-nico-r.firebaseapp.com",
  projectId: "landing-nico-r",
  storageBucket: "landing-nico-r.firebasestorage.app",
  messagingSenderId: "1069587971759",
  appId: "1:1069587971759:web:d9cec99aacf07918851e5a",
  measurementId: "G-J33YM4PM6F"
};

initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
