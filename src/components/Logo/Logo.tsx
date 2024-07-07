import styled, { keyframes } from 'styled-components';
import logo from '../../assets/bug.svg';

// Definindo a animação de fantasma
const ghostAnimation = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

// Estilizando o componente de imagem do logo com a animação
const GhostlyLogo = styled.img`
  width: 35px;
  animation: ${ghostAnimation} 8s ease-in-out infinite;
`;

const BugText = styled.div`
  text-align: center;
  font-size: 0.8rem;
  margin-top: 5px;
  opacity: 0;
  animation: ${ghostAnimation} 8s ease-in-out infinite;
  animation-delay: 1s;
`;

// Componente funcional que renderiza o logo com o texto
const Logo = () => {
  return (
    <>
      <GhostlyLogo src={logo} alt="Bug Buster Logo" id="logoBugBuster" />
      <BugText id="logoBugBusterText">AHHHH UM BUG!</BugText>
    </>
  );
};

export default Logo;
