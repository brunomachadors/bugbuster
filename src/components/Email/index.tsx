import { SocialLinkContainer, SocialIcon, SocialLink } from '../Social/style';

function Email() {
  return (
    <SocialLinkContainer>
      <SocialLink href="mailto:brunomachadors@gmail.com" id="emailLink">
        <SocialIcon
          src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000"
          alt="Email Icon"
        />
        Email
      </SocialLink>
    </SocialLinkContainer>
  );
}

export default Email;
