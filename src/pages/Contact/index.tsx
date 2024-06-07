import Email from '../../components/Email';
import Instagram from '../../components/Instagram';
import Linkedin from '../../components/Linkedin';
import Logo from '../../components/Logo/Logo';
import {
  ContactContainer,
  ContactInfoContainer,
  Title,
  TitleContainer,
} from './style';

function Contact() {
  return (
    <ContactContainer>
      <TitleContainer>
        <Logo></Logo>
        <Title>CONTATOS</Title>
      </TitleContainer>

      <ContactInfoContainer>
        <Email></Email>
        <Instagram></Instagram>
        <Linkedin></Linkedin>
      </ContactInfoContainer>
    </ContactContainer>
  );
}

export default Contact;
