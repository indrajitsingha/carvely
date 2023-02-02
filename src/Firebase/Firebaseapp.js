// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeLPq31SOApRuRkYBVKOd6X9USJ7wYLxo",
  authDomain: "blogapp-fb64e.firebaseapp.com",
  projectId: "blogapp-fb64e",
  storageBucket: "blogapp-fb64e.appspot.com",
  messagingSenderId: "218160660205",
  appId: "1:218160660205:web:ae2dd97d2fee22d71a56e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);