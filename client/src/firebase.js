// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fullstack-mern-blogapp.firebaseapp.com",
  projectId: "fullstack-mern-blogapp",
  storageBucket: "fullstack-mern-blogapp.appspot.com",
  messagingSenderId: "367246046598",
  appId: "1:367246046598:web:c2b32dddbd5c297edaa807"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);