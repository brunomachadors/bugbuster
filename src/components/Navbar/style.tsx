import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  $isOpen: boolean;
}

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  @media (min-width: 769px) {
    width: 93%;
  }
`;

export const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')};
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    position: static;
    max-height: none;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5vw;
  color: #000000;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0.75rem 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0px 5%;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuIcon = styled.span`
  font-size: 2rem;
`;
