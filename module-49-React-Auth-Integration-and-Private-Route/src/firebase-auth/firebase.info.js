// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPrwdfdjkudvzcNm-Y16ArywlJnWID7Io",
  authDomain: "moduel-49.firebaseapp.com",
  projectId: "moduel-49",
  storageBucket: "moduel-49.firebasestorage.app",
  messagingSenderId: "903525073434",
  appId: "1:903525073434:web:20d94b066904dd26b607a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);