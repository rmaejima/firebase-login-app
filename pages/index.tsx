import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Logout, auth } from "utils/firebase";
import { FirebaseContext } from "contexts/FirebaseContext";

const IndexPage: React.VFC = () => {
  const router = useRouter();
  const { user } = useContext(FirebaseContext);
  useEffect(() => {
    // if not logged in, redirect to login page
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log("認証できてる");
    //   } else {
    //     console.log("ログインしてない");
    //     router.push("/login");
    //   }
    if (user) {
      console.log("認証できてる");
    } else {
      console.log("ログインしてない");
      router.push("/login");
    }
  }, []);
  return (
    <Container>
      <h1>Firebaseを用いてログインするアプリ</h1>
      <div>
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
    </Container>
  );
};

export default IndexPage;

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.primary[500]};
`;
