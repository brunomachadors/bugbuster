import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  * {
    box-sizing: border-box; /* Melhora o cálculo do tamanho total do elemento */
    max-width: 100%;
  }
`;

export const ContentContainer = styled.div`
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
    max-width: 50%;
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
    max-width: 90%;
  }

  p {
    text-align: justify;
    max-width: 90%;
    margin: 0 auto;
    word-wrap: normal;
    padding-bottom: 2vh;
    font-size: large; /* Aumenta o tamanho da fonte */
    line-height: 1.6; /* Ajusta o espaçamento entre linhas */
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
  margin-bottom: 20px; /* Aumenta a margem inferior para separar do conteúdo abaixo */
  font-size: 2.5rem; /* Reduz o tamanho da fonte */
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
    padding: 10px 16px; /* Aumenta o padding para melhor espaçamento interno */
    color: #ffffff;
    font-size: 1rem; /* Aumenta o tamanho da fonte */
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
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const ImageContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;
