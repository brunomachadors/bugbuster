import styled from 'styled-components';

export const GalleryContainer = styled.div`
  padding: 20px;
  width: 50%;
  margin: 0 auto;
  border-top: 1px solid black;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const PhotoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Limite de 3 fotos por linha */
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Reduz para 2 fotos por linha em telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 foto por linha em telas muito pequenas */
  }
`;

export const EventDescription = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #45474b;
  margin-bottom: 8px; /* Ajuste para reduzir o espaço */
`;

export const EventNameContainer = styled.div``;

export const EventDate = styled.p`
  text-align: center;
  font-size: 16px;
  color: #45474b;
  margin-bottom: 10px;
`;

export const EventContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #000000;
`;

export const PhotoCard = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PhotoDescription = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: black;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column; /* Garante que os elementos no modal fiquem empilhados verticalmente */
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  display: block;
  margin: 0 auto;
`;

export const ModalDescription = styled.p`
  text-align: center;
  color: white;
  margin-top: 15px;
  font-size: 16px;

  @media (max-width: 1024px) {
    z-index: 3000;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const ModalEventTitle = styled.h3`
  color: white;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;
