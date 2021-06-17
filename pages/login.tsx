import { useEffect } from "react";
import { useRouter } from "next/router";
import { Login, auth } from "utils/firebase";

const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    // if logged in, redirect to home
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <>
      <h1>Firebaseを用いてログイン</h1>
      <div>
        <button onClick={() => Login()}>ログイン</button>
      </div>
      <div>
        <pre>
          {auth.currentUser
            ? auth.currentUser.displayName + "でログインしています"
            : "ログインしていません"}
        </pre>
      </div>
    </>
  );
};

export default LoginPage;
