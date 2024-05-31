import { FooterContainer, FooterText } from './style';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Bug Buster Mentoria. Todos os direitos
        reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
