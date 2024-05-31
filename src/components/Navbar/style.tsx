import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  border: 2px solid #fff;
  padding: 1rem 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5vw;
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0.75rem 1.5rem; /* Aumenta o padding para melhorar a área de clique */
  &:hover {
    text-decoration: underline;
  }
`;
