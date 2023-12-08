import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyA2EkwN7TGeYo7nny374AMdQaMNRKaEkng",
  authDomain: "e-commerce-react-e16d9.firebaseapp.com",
  projectId: "e-commerce-react-e16d9",
  storageBucket: "e-commerce-react-e16d9.appspot.com",
  messagingSenderId: "489144070428",
  appId: "1:489144070428:web:df23bfb203052a76b7cad9",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(

    <App />

);
