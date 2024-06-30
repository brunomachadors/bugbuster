import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MediumFeedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  flex-direction: column;
  margin-top: 1vh;
  gap: 5vh;

  @media (max-width: 768px) {
    gap: 10rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    gap: 2vh;
  }
`;

export const PostThumbnail = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin: 10%;
  gap: 3vh;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15%;
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
  text-align: center;
  margin-bottom: 1rem;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-top: 1vh;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px dashed black;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;
