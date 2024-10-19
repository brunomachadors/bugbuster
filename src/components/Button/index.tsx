import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled(Link)`
  display: inline-block;
  padding: 10px 40px; /* Menos espaço em cima e mais nas laterais */

  background-color: white; /* Fundo branco */
  color: black; /* Texto preto */
  border: 2px solid black; /* Borda preta */
  border-radius: 20px; /* Borda arredondada para um visual mais suave */
  text-align: center;
  text-decoration: none;
  font-size: 0.8rem; /* Tamanho da fonte ajustado para um estilo mais uniforme */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transição suave */
  margin-top: 3vh;

  &:hover {
    background-color: #333; /* Cor de fundo ao passar o mouse */
    color: white; /* Texto branco ao passar o mouse */
  }

  @media (max-width: 768px) {
    font-size: 0.9em; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

const KnowMoreButton = () => {
  return <ButtonContainer to="/ourservices">Saiba Mais</ButtonContainer>;
};

export default KnowMoreButton;
