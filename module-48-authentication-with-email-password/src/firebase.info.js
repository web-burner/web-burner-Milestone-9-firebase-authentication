// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaDXEmmLTPJM1IFULdUo_B9MSJJtX2YTk",
  authDomain: "email-password-auth-42bd2.firebaseapp.com",
  projectId: "email-password-auth-42bd2",
  storageBucket: "email-password-auth-42bd2.firebasestorage.app",
  messagingSenderId: "274603190441",
  appId: "1:274603190441:web:1c8a63251776aa8b49e1b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

/**
 * 1. create a firebase project
 * 2. create a web app
 * 3. install firebase in your project
 * 4. get config
 * 5. initialize authentication method
 * 6. go to doc and initialize auth>build>authentication>get started
 * 7. specific authentication method email/password
 */
