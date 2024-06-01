// src/components/Navbar/index.tsx
import React, { useState } from 'react';
import {
  NavLinks,
  NavbarContainer,
  StyledLink,
  MenuToggle,
  MenuIcon,
} from './style';
import Logo from '../Logo/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <MenuToggle>
        <MenuIcon className="material-icons" onClick={toggleMenu}>
          menu
        </MenuIcon>

        <StyledLink to="/" onClick={toggleMenu}>
          BUG BUSTER
        </StyledLink>
        <Logo />
      </MenuToggle>
      <NavLinks isOpen={isOpen}>
        <StyledLink to="/mentors" onClick={toggleMenu}>
          NOSSOS MENTORES
        </StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
