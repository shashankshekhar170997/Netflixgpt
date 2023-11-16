// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1OvLABM97bCRk0GE9Q35JftraKaYMiow",
  authDomain: "netflixgpt-a6349.firebaseapp.com",
  projectId: "netflixgpt-a6349",
  storageBucket: "netflixgpt-a6349.appspot.com",
  messagingSenderId: "376291607496",
  appId: "1:376291607496:web:193b6578e9758008dff6fd",
  measurementId: "G-WGDJR4CLMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
