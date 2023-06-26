// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_GL5dZiC6CuT01EWkuAAE2O-38TLS_o",
  authDomain: "carefinder-app-6e91d.firebaseapp.com",
  projectId: "carefinder-app-6e91d",
  storageBucket: "carefinder-app-6e91d.appspot.com",
  messagingSenderId: "485777694081",
  appId: "1:485777694081:web:b77b0b79cd8a7b02e15c80",
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

export const createReviewDocument = async (payload) => {
  if (!payload) return;
  const reviewDocRef = doc(db, "reviews", payload.id);
  const reviewSnapShot = await getDoc(reviewDocRef);

  // creating review doc if it dosen't exist
  try {
    await setDoc(reviewDocRef, payload);
  } catch (error) {
    console.log("error creating user", error.message);
  }

  return reviewDocRef;
};

export const deleteSupport = async (feedbackId) => {
  try {
    const supportRef = doc(db, "supports", feedbackId);
    const res = await deleteDoc(supportRef);

    return res;

    // Remove the deleted feedback from the state

    // console.log(feedbackId)
  } catch (error) {
    console.log("Error deleting feedback:", error);
  }
};
