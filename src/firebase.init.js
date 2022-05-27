// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-908XY1KErv5bl5OW9Qv4QoQQd0oWXQY",
  authDomain: "car-parts-92e3e.firebaseapp.com",
  projectId: "car-parts-92e3e",
  storageBucket: "car-parts-92e3e.appspot.com",
  messagingSenderId: "336632247977",
  appId: "1:336632247977:web:74188a8e478f7f5b1c1bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;