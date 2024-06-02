// src/components/Navbar/index.tsx
import React, { useState, useEffect } from 'react';
import {
  NavLinks,
  NavbarContainer,
  StyledLink,
  MenuToggle,
  MenuIcon,
} from './style';
import Logo from '../Logo/Logo';
import useWindowWidth from '../../hooks/useWindowWidth';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (width > 768) {
      // 768px é uma largura comum para determinar a transição entre mobile e desktop
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  const toggleMenu = () => {
    if (width <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <NavbarContainer>
      <MenuToggle>
        <MenuIcon className="material-icons" onClick={toggleMenu}>
          menu
        </MenuIcon>
        <Logo />
      </MenuToggle>
      <NavLinks isOpen={isOpen}>
        <StyledLink to="/" onClick={toggleMenu}>
          BUG BUSTER
        </StyledLink>
        <StyledLink to="/mentors" onClick={toggleMenu}>
          QUEM SOMOS
        </StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;