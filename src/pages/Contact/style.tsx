import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin-top: 2vh;
  gap: 3vh;

  @media (min-width: 768px) {
    width: 90%;
    margin: auto;
    margin-top: 2vh;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
  border-bottom: 3px dashed #00000073;
  border-top: 3px dashed #00000073;
  padding: 3vw;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 10%;
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
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;
