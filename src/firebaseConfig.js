import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEK2EixPmRLI1vlkciW6R_60E9eE3sHq8",
  authDomain: "add-to-cart-fee81.firebaseapp.com",
  databaseURL: "https://add-to-cart-fee81-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "add-to-cart-fee81",
  storageBucket: "add-to-cart-fee81.appspot.com",
  messagingSenderId: "366812574812",
  appId: "1:366812574812:web:95849bd8b05eb564a76299"
};


export const app = initializeApp(firebaseConfig);