// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAepkVA5RlTNWjG2J9MhBM92i-JxGMqKmE",
  authDomain: "chat-app-f80b7.firebaseapp.com",
  projectId: "chat-app-f80b7",
  storageBucket: "chat-app-f80b7.appspot.com",
  messagingSenderId: "461243831475",
  appId: "1:461243831475:web:67c053e49c7788caa30cc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);