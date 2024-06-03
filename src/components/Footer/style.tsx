import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  position: fixed;
  bottom: 0;
  left: 0;
  color: white;
  background-color: #000000;
  z-index: 1000;
`;

export const FooterText = styled.p`
  font-size: 0.5rem;
`;
