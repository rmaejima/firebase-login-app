import { Login, Logout, auth } from "utils/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
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
      <p>編集ページ</p>
    </>
  );
};

export default IndexPage;
