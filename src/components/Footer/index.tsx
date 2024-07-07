import { FooterContainer, FooterText } from './style';

const Footer: React.FC = () => {
  return (
    <FooterContainer id="footerContainer">
      <FooterText id="footerText">
        &copy; {new Date().getFullYear()} Bug Buster Mentoria.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
