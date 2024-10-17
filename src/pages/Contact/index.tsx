import Email from '../../components/Email';
import Github from '../../components/Github';
import Instagram from '../../components/Instagram';
import Linkedin from '../../components/Linkedin';
import MediumContact from '../../components/MediumContact';

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
        <Instagram />
        <Linkedin />
        <MediumContact />
        <Github />
        <Email />
      </ContactInfoContainer>
    </ContactContainer>
  );
}

export default Contact;
