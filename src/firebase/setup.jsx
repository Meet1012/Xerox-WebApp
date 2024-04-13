// Import the functions you need from the SDKs you need
// require("dotenv").config();
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "xerox-8c92d.firebaseapp.com",
  projectId: "xerox-8c92d",
  storageBucket: "xerox-8c92d.appspot.com",
  messagingSenderId: "649153086655",
  appId: "1:649153086655:web:399cf5490d8c420e6e720a",
  measurementId: "G-VC7B36GGH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
