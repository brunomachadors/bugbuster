import styled from 'styled-components';
import Banner from '../Banner';

interface IntroDescriptionProps {
  backgroundColor?: string;
  color?: string;
}

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 80vw;
  text-align: center;
  line-height: 1.5;
  border-bottom: 1px solid black;

  @media (min-width: 768px) {
    font-size: 1.25em;
    max-width: 60vw;
  }

  @media (min-width: 1024px) {
    font-size: 1.5em;
    max-width: 50vw;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

const IntroTitle = styled.h1`
  font-size: xx-large;
  text-align: center;
  margin-bottom: 1rem;
`;

// Use a interface no componente estilizado
const IntroDescription = styled.p<IntroDescriptionProps>`
  font-size: x-large;
  text-align: center;
  width: 100%;
  background-color: #000000b8;
  color: ${(props) => props.color || 'white'};
  border-radius: 20px;
  padding: 20px;
`;

const HomeIntroSection = () => {
  return (
    <IntroContainer>
      <TitleContainer>
        <IntroTitle>BUG BUSTER</IntroTitle>
      </TitleContainer>
      <Banner></Banner>
      <IntroDescription color="white">
        Somos uma página especializada em serviços de mentoria para
        profissionais em transição de carreira ou buscando aprimoramento na área
        de teste de software.
      </IntroDescription>
    </IntroContainer>
  );
};

export default HomeIntroSection;
