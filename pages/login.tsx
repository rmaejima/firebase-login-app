import { useEffect } from "react";
import Router from "next/router";
import { Login, auth } from "utils/firebase";

const LoginPage = () => {
  useEffect(() => {
    if (auth.currentUser) {
      Router.push("/");
    }
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
