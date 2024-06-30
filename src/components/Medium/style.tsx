import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  * {
    box-sizing: border-box;
    max-width: 100%;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  .expanded-image {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000; 
    width: 100%;
    height: auto;
    cursor: zoom-out; 
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); 
    z-index: 900; 
    opacity: 1; 
    transition: opacity 0.3s ease-in-out;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 75%;
  padding-bottom: 5vh;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  img {
    max-width: 70%;
    height: auto;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    max-width: 90%;
  }

  p {
    text-align: justify;
    max-width: 90%;
    margin: 0 auto;
    word-wrap: normal;
    padding-bottom: 2vh;
    font-size: large;
    line-height: 1.6;
  }

  figcaption {
    text-align: center;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
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
    padding: 10px 16px;
    color: #ffffff;
    font-size: 1rem;
  }
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
