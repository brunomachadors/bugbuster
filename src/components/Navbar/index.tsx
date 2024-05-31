import { NavLinks, NavbarContainer, StyledLink } from './style';
import logo from '../../assets/bug.svg';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <StyledLink to="/bugbuster">
          <img src={logo} width={'35px'} alt="Bug Buster Logo" />
          BUG BUSTER
        </StyledLink>
        <StyledLink to="/contact">MENTORIA</StyledLink>
        <StyledLink to="/contact">STACKS</StyledLink>
        <StyledLink to="/about">NOSSOS MENTORES</StyledLink>
        <StyledLink to="/about">DEPOIMENTOS</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
