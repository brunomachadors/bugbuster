import { SocialLinkContainer, SocialIcon, SocialLink } from '../Social/style';

function Linkedin() {
  return (
    <SocialLinkContainer>
      <SocialLink
        href="https://www.linkedin.com/in/brunomrs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon
          src="https://img.icons8.com/?id=8808&format=png"
          alt="LinkedIn Icon"
        />
        Linkedin
      </SocialLink>
    </SocialLinkContainer>
  );
}

export default Linkedin;
