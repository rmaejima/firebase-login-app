import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AuthContext } from "contexts/Auth";
import { CreateArticle } from "components/edit/CreateArticle";
import { Article } from "types/articleModel";
import { getArticles } from "utils/article/article";
import { collectionName } from "consts/collectionName";

const EditPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [articles, setArticles] = useState<Article[]>([]);
  // getArticles(collectionName.articles);

  useEffect(() => {
    !user && router.push("/login");
    (async () => {
      setArticles(await getArticles(collectionName.articles));
    })();
  }, []);

  return (
    <>
      <CreateArticle />
      {articles.map((article) => {
        return (
          <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </div>
        );
      })}
      <Link href="/">
        <h1>トップへ戻る</h1>
      </Link>
    </>
  );
};

export default EditPage;
