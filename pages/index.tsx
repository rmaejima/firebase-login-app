import Link from "next/link";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { logout } from "utils/auth/logout";
import { AuthContext } from "contexts/Auth";
import { LoadingSpinner } from "components/common/LoadingSpinner";

const IndexPage: React.VFC = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  //もう少しいい方法がありそう
  useEffect(() => {
    !user && router.push("/login");
  }, []);
  if (!user) {
    return <LoadingSpinner />;
  } else {
    return (
      <Container>
        <h1>
          Firebase Authentification を使ってログイン認証(Email or
          Googleアカウント)を行うアプリ
        </h1>
        <div>
          <button onClick={() => logout()}>ログアウト</button>
        </div>
        <div>
          <pre>
            {user
              ? user.email + "でログインしています"
              : "ログインしていません"}
          </pre>
        </div>
        <Link href="/edit">
          <a>編集ページへ移動</a>
        </Link>
      </Container>
    );
  }
};

export default IndexPage;

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.primary[500]};
`;
