// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZAtuW-KoYuoESKi_-Sp2tHuro7WbRr7c",
  authDomain: "practice-firebase-ad389.firebaseapp.com",
  projectId: "practice-firebase-ad389",
  storageBucket: "practice-firebase-ad389.firebasestorage.app",
  messagingSenderId: "581899100525",
  appId: "1:581899100525:web:e3b0bab7da2aa6829f7a64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
