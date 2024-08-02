import Email from '../../components/Email';
import Github from '../../components/Github';
import Instagram from '../../components/Instagram';
import Linkedin from '../../components/Linkedin';

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
        <Title>CONTATOS</Title>
      </TitleContainer>
      <ContactInfoContainer>
        <Email></Email>
        <Instagram></Instagram>
        <Github></Github>
        <Linkedin></Linkedin>
      </ContactInfoContainer>
    </ContactContainer>
  );
}

export default Contact;
