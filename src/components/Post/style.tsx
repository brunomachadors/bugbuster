import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 3rem;
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
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  text-indent: 1.5rem;
  margin-bottom: 0.2rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const Signature = styled.p`
  font-size: 1rem;
  margin-top: 20px;
`;

export const ExpandedImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ExpandedImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

export const PostMetaTags = styled.div`
  display: none; /* Esconder este componente, ele só existe para definir meta tags */
`;
