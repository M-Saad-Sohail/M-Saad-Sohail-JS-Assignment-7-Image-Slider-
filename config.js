// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6vv4muYTU-YWSB9khka4EwagGgOgVBlw",
  authDomain: "js-assignment-7-image-slider.firebaseapp.com",
  projectId: "js-assignment-7-image-slider",
  storageBucket: "js-assignment-7-image-slider.appspot.com",
  messagingSenderId: "838143758967",
  appId: "1:838143758967:web:7df83d734e7326b0bf2c72",
  measurementId: "G-63HRJB0T90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);