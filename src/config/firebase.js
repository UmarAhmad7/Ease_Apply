
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8VJAZ8zIpIgytO-_OkkFpokd2DqBogXE",
  authDomain: "vite-contact-81aec.firebaseapp.com",
  projectId: "vite-contact-81aec",
  storageBucket: "vite-contact-81aec.appspot.com",
  messagingSenderId: "813997748797",
  appId: "1:813997748797:web:6acec5fdf13a152bd7b054"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)