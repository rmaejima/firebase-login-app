import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/storage";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const Firebase = firebase;

// Sign Up
export const EmailSignUp = async (email: string, password: string) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err);
  }
};

// Login
export const GoogleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
  } catch (err) {
    alert(err);
  }
};

export const EmailLogin = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err);
  }
};

// Logout
export const Logout = () => {
  auth.signOut().then(() => {
    window.location.href = "/login";
  });
};
