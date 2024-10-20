import { SocialLinkContainer, SocialIcon, SocialLink } from '../Social/style';

function Instagram() {
  return (
    <SocialLinkContainer>
      <SocialLink
        href="https://www.instagram.com/brunomachadors/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon
          src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"
          alt="Instagram Icon"
        />
        Instagram
      </SocialLink>
    </SocialLinkContainer>
  );
}

export default Instagram;
