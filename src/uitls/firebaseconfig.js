// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgu-_nDiEkQBNkAp1SdF60JitjkAZalMI",
  authDomain: "netflixgpt-ad9b8.firebaseapp.com",
  projectId: "netflixgpt-ad9b8",
  storageBucket: "netflixgpt-ad9b8.firebasestorage.app",
  messagingSenderId: "145376315949",
  appId: "1:145376315949:web:bb7019c87a389b62bf46a4",
  measurementId: "G-D5SDVZ5HT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);