import styled from 'styled-components';

export const OurServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  margin-top: 2vh;
  gap: 3vh;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 10rem;
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
