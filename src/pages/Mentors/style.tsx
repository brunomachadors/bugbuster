import styled from 'styled-components';

export const MentorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 3vh;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (max-width: 768px) {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }

  @media (max-width: 480px) {
    padding-top: 3vh;
    padding-bottom: 3vh;
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
