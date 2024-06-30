import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  max-width: 100%;
  padding: 5%;
  padding-bottom: 5vh;
  margin: 0 auto;
  margin-top: 5vh;

  img {
    max-width: 90%;
    height: auto;
    display: flex;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  p {
    text-align: justify;
    line-height: 1.6;
    max-width: 90%;
    margin: 0 auto;
    word-wrap: break-word;
    padding-bottom: 1vh;
  }

  figcaption {
    text-align: center;
  }

  ul {
  }

  li {
    margin-bottom: 10px;
  }

  a {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const PubDate = styled.span`
  color: #666;
`;

export const Author = styled.span`
  color: #666;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;

  span {
    background-color: #c40202;
    border-radius: 8px;
    padding: 3% 4%;
    color: #ffffff;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const PublicationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-bottom: 2vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 60%;
`;

export const Banner = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Content = styled.p`
  text-align: justify;
  margin-bottom: 0.2rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;
