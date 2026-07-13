// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIMOmip1OaSKicGtKiwel6rteov7C65Z4",
  authDomain: "netflixgpt-c9b4c.firebaseapp.com",
  projectId: "netflixgpt-c9b4c",
  storageBucket: "netflixgpt-c9b4c.firebasestorage.app",
  messagingSenderId: "152403793444",
  appId: "1:152403793444:web:1914cb139e3992a590eab1",
  measurementId: "G-NX91LZZX2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
