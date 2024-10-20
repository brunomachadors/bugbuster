import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vh;
  width: 100%;
  gap: 4vh;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
    gap: 3vh;
    width: 80%;
  }

  @media (max-width: 480px) {
    padding: 2vh 0;
    gap: 2vh;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.75em;
  }
`;

export const TestimonialBlock = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 2rem;
  border: 2px dashed #00000073;
  border-radius: 10px;
  padding: 1rem;
  width: 90%; /* Ajustado para largura de 90% */
  max-width: 800px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Sempre em coluna no mobile */
    padding: 1.5rem;
    width: 95%; /* Ajustado para largura de 95% em telas menores */
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 100%; /* Largura completa em dispositivos pequenos */
  }
`;

export const TestimonialTextContainer = styled.div`
  flex: 1;
  text-align: left;
`;

export const TestimonialText = styled.p`
  font-size: 1.25em;
  line-height: 1.5;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const TestimonialAuthor = styled.p`
  font-size: 1em;
  font-style: italic;
  color: #4a4a4a;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export const TestimonialImage = styled.img`
  width: 100px; /* Ajustado para largura responsiva */
  height: 100px; /* Ajustado para altura responsiva */
  border-radius: 50%;
  object-fit: cover;
`;

export const TestimonialTitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

export const TestimonialDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const Quote = styled.blockquote`
  font-style: italic;
  border-left: 4px solid #fad72c;
  padding-left: 16px;
  margin: 10px 0;
`;
