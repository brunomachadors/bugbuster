import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 2vh auto 8vh auto;
  gap: 3vh;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: xx-large;
  text-align: center;
  margin-bottom: 1rem;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
