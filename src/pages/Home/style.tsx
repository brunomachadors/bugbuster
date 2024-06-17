import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 1vh;
  gap: 5vh;

  @media (max-width: 768px) {
    gap: 3vh;
    padding: 0 1em;
  }

  @media (max-width: 480px) {
    gap: 2vh;
    padding: 0 0.5em;
  }
`;
