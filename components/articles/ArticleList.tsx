import React, { useCallback } from "react";
import styled from "styled-components";

import { Article } from "types/articleModel";
import { ArticleListItem } from "components/articles/ArticleListItem";

interface Props {
  articles: Article[];
}

export const ArticleList: React.VFC<Props> = ({ articles }) => {
  return (
    <Container>
      {articles[0] &&
        articles.map((article) => {
          return <ArticleListItem article={article} />;
        })}
    </Container>
  );
};

const Container = styled.div``;
