import { auth } from "../firebase";

export const emailSignUp = async (email: string, password: string) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err);
  }
};
