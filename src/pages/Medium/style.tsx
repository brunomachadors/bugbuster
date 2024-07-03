import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MediumFeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
  margin-bottom: 10%;
`;

export const PostThumbnail = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3vh;
  width: 95%;
  max-width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
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

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  width: calc(100% / 3 - 30px);
  margin: 10px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px dashed black;
  text-align: center;

  @media (max-width: 1200px) {
    width: calc(100% / 2 - 30px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }
`;

export const FirstParagraph = styled.p`
  text-align: justify;
  max-width: 90%;
  margin: 0 auto;
  word-wrap: normal;
  padding-bottom: 1vh;
  font-size: 1.1rem;
  line-height: 1.6;
`;
