import styled from 'styled-components';
import Logo from '../Logo/Logo';

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px dotted black;
  width: 80%;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
`;

const IntroTitle = styled.h1`
  font-size: 2.4em;
  text-align: center;
  margin-bottom: 1rem;
`;

const IntroDescription = styled.p`
  font-size: 1.5em;
  text-align: center;
  width: 90%;
`;

const HomeIntroSection = () => {
  return (
    <IntroContainer>
      <TitleContainer>
        <Logo></Logo>
        <IntroTitle>BUG BUSTER</IntroTitle>
      </TitleContainer>

      <IntroDescription>
        Somos uma página especializada em serviços de mentoria para
        profissionais em transição de carreira ou buscando aprimoramento na área
        de teste de software. Nosso objetivo é fornecer orientação personalizada
        para ajudá-lo a alcançar seus objetivos profissionais.
      </IntroDescription>
    </IntroContainer>
  );
};

export default HomeIntroSection;
