import firebase from "firebase";
import { auth } from "../firebase";

// google
export const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
  } catch (err) {
    alert(err);
  }
};
// email
export const emailLogin = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err);
  }
};
