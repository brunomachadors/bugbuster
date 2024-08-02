import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  * {
    max-width: 100%;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
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

  pre {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-x: auto;
    margin: 0 auto 15px;
    border: 2px solid green;
    max-width: 75%;
    text-align: left;
    padding: 1%;
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
    max-width: 80%;
    height: auto;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    @media (max-width: 768px) {
      max-width: 100%;
    }
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
    max-width: 70%;
    margin: 0 auto;
    word-wrap: normal;
    padding-bottom: 2vh;
    font-size: large;
    line-height: 1.6;
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  figcaption {
    text-align: center;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 70%;
    text-align: left;
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  li {
    margin-bottom: 10px;
  }

  a {
    max-width: 100%;
  }

  blockquote {
    max-width: 70%;
    margin: 2em auto;
    padding: 1em;
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    font-style: italic;
    color: #666;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  blockquote em {
    color: #333;
  }

  pre {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-x: auto;
    margin: 0 auto 15px;
    border: 2px solid black;
    max-width: 75%;
    text-align: left;
    padding: 1%;

    @media (max-width: 768px) {
      max-width: 80%;
      font-size: small;
    }
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
    padding: 6px 12px;
    color: #ffffff;
    font-size: 0.8rem;
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
