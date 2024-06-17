import styled from 'styled-components';

export const MentorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8vh;
  margin-top: 8vh;
  gap: 3vh;

  @media (max-width: 1024px) {
    margin-bottom: 6vh;
    margin-top: 6vh;
    gap: 2.5vh;
  }

  @media (max-width: 768px) {
    margin-bottom: 5vh;
    margin-top: 4vh;
    gap: 2vh;
  }

  @media (max-width: 480px) {
    margin-bottom: 3vh;
    margin-top: 12vh;
    gap: 1.5vh;
  }

  @media (max-width: 376px) {
    margin-bottom: 3vh;
    margin-top: 60vh;
    gap: 1.5vh;
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
