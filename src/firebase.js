// firebase網頁應用

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyKe0dGjMFA2yAiLEpEviYnfrqDDHQtKE",
  authDomain: "mapwebs-project-6ceed.firebaseapp.com",
  databaseURL: "https://mapwebs-project-6ceed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mapwebs-project-6ceed",
  storageBucket: "mapwebs-project-6ceed.firebasestorage.app",
  messagingSenderId: "209560710959",
  appId: "1:209560710959:web:d1dd3a1e4f3f53a9af7bda",
  measurementId: "G-FQB4QLHE87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);