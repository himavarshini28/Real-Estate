// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-94289.firebaseapp.com",
  projectId: "real-estate-94289",
  storageBucket: "real-estate-94289.firebasestorage.app",
  messagingSenderId: "313463071517",
  appId: "1:313463071517:web:b2ea31f97d0e8ff9cd37f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);