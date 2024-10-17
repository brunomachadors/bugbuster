import styled from 'styled-components';

export const OurServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 5vh 0;
  gap: 3vh;

  @media (max-width: 768px) {
    padding: 4vh 0;
  }

  @media (max-width: 480px) {
    padding: 3vh 0;
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
