import Link from "next/link";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AuthContext } from "contexts/Auth";
import { CreateArticle } from "components/edit/CreateArticle";
import { getArticles } from "utils/article/article";
import { collectionName } from "consts/collectionName";

const EditPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  getArticles(collectionName.articles);

  useEffect(() => {
    !user && router.push("/login");
  }, []);

  return (
    <>
      <CreateArticle />
      <Link href="/">
        <h1>トップへ戻る</h1>
      </Link>
    </>
  );
};

export default EditPage;
