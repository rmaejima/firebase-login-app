import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { GoogleLogin } from "utils/firebase";
import { FirebaseContext } from "contexts/FirebaseContext";

const LoginPage = () => {
  const { user } = useContext(FirebaseContext);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [{ user }]);
  return (
    <>
      <h1>Firebaseを用いてログイン</h1>
      <div>
        <button onClick={() => GoogleLogin()}>Googleでログイン</button>
      </div>
      <div>
        <pre>
          {user ? user + "でログインしています" : "ログインしていません"}
        </pre>
      </div>
    </>
  );
};

export default LoginPage;
