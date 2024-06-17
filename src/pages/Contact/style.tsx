import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: ce;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  margin-top: 2vh;
  gap: 3vh;

  @media (min-width: 768px) {
    width: 50%;
    margin: auto;
    margin-top: 2vh;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2vh;
  border: 3px dashed black;
  padding: 3vw;
  border-radius: 10px;
  font-size: 5vw;

  @media (min-width: 768px) {
    padding: 2vw;
    font-size: 2.5vw;
    gap: 3vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

export const Title = styled.h1`
  font-size: xx-large;
  text-align: center;
  margin-bottom: 1rem;
`;
