import styled from "styled-components";
import { Article } from "types/articleModel";

interface Props {
  article: Article;
}

export const ArticleListItem: React.VFC<Props> = ({ article }) => {
  return (
    <Container>
      <Title>{article.title}</Title>
      <Description>{article.body}</Description>
      <Img src={article.imageUrl} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 5rem auto 0;
  padding: 2rem;
  background-color: #fff;
  border-radius: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const Img = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%; ;
`;
