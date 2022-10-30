// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe2NcT9HptYi6p8pDioCub-Pghm_8CFuk",
  authDomain: "coderhouse-littlepaws.firebaseapp.com",
  projectId: "coderhouse-littlepaws",
  storageBucket: "coderhouse-littlepaws.appspot.com",
  messagingSenderId: "396907818230",
  appId: "1:396907818230:web:8fbc8495f561e4163610d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app