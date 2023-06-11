// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// const firebaseConfig = {
//   apiKey: "AIzaSyA1Km8b1_lsMzyi2XeKa0rfz94ZmyE-W4w",
//   authDomain: "carefinder-6ad95.firebaseapp.com",
//   projectId: "carefinder-6ad95",
//   storageBucket: "carefinder-6ad95.appspot.com",
//   messagingSenderId: "985225777417",
//   appId: "1:985225777417:web:8ea08841f050e37c9cc3d8"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_GL5dZiC6CuT01EWkuAAE2O-38TLS_o",
  authDomain: "carefinder-app-6e91d.firebaseapp.com",
  projectId: "carefinder-app-6e91d",
  storageBucket: "carefinder-app-6e91d.appspot.com",
  messagingSenderId: "485777694081",
  appId: "1:485777694081:web:b77b0b79cd8a7b02e15c80"
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



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);


  // creating user doc if it dosen't exist
  if (!userSnapShot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();


    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }


  return userDocRef;
};

