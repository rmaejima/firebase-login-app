import { auth } from "./firebase";

export const logout = () => {
  auth.signOut().then(() => {
    window.location.href = "/login";
  });
};
