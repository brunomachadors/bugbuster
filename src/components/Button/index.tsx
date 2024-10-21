import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 0.8rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 1vh;

  &:hover {
    background-color: #333;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const KnowMoreButton = () => {
  return <ButtonContainer to="/ourservices">Saiba Mais</ButtonContainer>;
};

export const ModalCloseButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1001;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 120px;
    height: 120px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }

  &:disabled {
    background-color: #ddd;
    color: #999;
    cursor: not-allowed;
  }
`;
