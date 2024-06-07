import Email from "../../components/Email";
import Instagram from "../../components/Instagram";
import Linkedin from "../../components/Linkedin";
import { ContactContainer } from "./style";

function Contact() {
  return (
    <ContactContainer>
      <Email></Email>
      <Linkedin></Linkedin>
      <Instagram></Instagram>
    </ContactContainer>
  );
}

export default Contact;
