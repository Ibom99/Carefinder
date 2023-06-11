// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Km8b1_lsMzyi2XeKa0rfz94ZmyE-W4w",
  authDomain: "carefinder-6ad95.firebaseapp.com",
  projectId: "carefinder-6ad95",
  storageBucket: "carefinder-6ad95.appspot.com",
  messagingSenderId: "985225777417",
  appId: "1:985225777417:web:8ea08841f050e37c9cc3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
export const auth = getAuth(app);
// Firestore
export const db = getFirestore(app);
// Google provider for authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// Sign in with Google
export const signInWithGoogle = () => signInWithPopup(getAuth(), provider);
// Sign out
export const signOut = () => getAuth().signOut();