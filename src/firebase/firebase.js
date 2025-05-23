// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAkEKHinNTRhY5jfPYkALBnSojX9azc2kE",
  authDomain: "sudhanwebsite-df2d9.firebaseapp.com",
  projectId: "sudhanwebsite-df2d9",
  storageBucket: "sudhanwebsite-df2d9.firebasestorage.app",
  messagingSenderId: "15483333526",
  appId: "1:15483333526:web:7a7389176a073ba1730bb7",
  measurementId: "G-NQJ5KE2ZPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };
