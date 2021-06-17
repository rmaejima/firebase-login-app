import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Login, Logout, auth } from "utils/firebase";

const IndexPage: React.VFC = () => {
  const router = useRouter();
  useEffect(() => {
    // if not logged in, redirect to login page
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("認証できてる");
      } else {
        console.log("ログインしてない");
        router.push("/login");
      }
    });
  }, []);
  return (
    <>
      <h1>Firebaseを用いてログイン</h1>
      <div>
        <button onClick={() => Login()}>ログイン</button>
        <button onClick={() => Logout()}>ログアウト</button>
      </div>
      <div>
        <pre>
          {auth.currentUser
            ? auth.currentUser.displayName + "でログインしています"
            : "ログインしていません"}
        </pre>
      </div>
      <Link href="/edit">
        <a>編集ページへ移動</a>
      </Link>
    </>
  );
};

export default IndexPage;
