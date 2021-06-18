import Link from "next/link";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AuthContext } from "contexts/Auth";

const EditPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    !user && router.push("/login");
  }, []);

  return (
    <>
      <p>編集ページ</p>
      <Link href="/">トップへ戻る</Link>
    </>
  );
};

export default EditPage;
