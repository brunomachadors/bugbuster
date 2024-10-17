import { SocialLinkContainer, SocialIcon, SocialLink } from '../Social/style';

function Github() {
  return (
    <SocialLinkContainer>
      <SocialLink
        href="https://github.com/brunomachadors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon
          src="https://img.icons8.com/?id=12599&format=png"
          alt="GitHub Icon"
        />
        Github
      </SocialLink>
    </SocialLinkContainer>
  );
}

export default Github;
