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
  gap: 1px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
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
    max-width: 100%;
    margin: 0 auto;
    word-wrap: break-word;
    padding-bottom: 1vh;
  }

  figcaption {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    max-width: 80%;
  }

  li {
    display: flex;
    text-align: justify;
    margin-bottom: 10px;
    word-break: break-word;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const PubDate = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

export const Author = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  span {
    background-color: #c40202;
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 0.9rem;
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
`;
