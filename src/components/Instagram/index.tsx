import { InstagramContainer, InstagramIcon, InstagramLink } from './style';

function Instagram() {
  return (
    <InstagramContainer id="instagramContainer">
      <InstagramLink
        href="https://www.instagram.com/brunomachadors/"
        target="_blank"
        rel="noopener noreferrer"
        id="instagramLink"
      >
        <InstagramIcon
          src="https://img.icons8.com/?id=RhYNENh5cxlS&format=png"
          id="instagramIcon"
          alt="instagramIcon"
        ></InstagramIcon>
        brunomachadors
      </InstagramLink>
    </InstagramContainer>
  );
}

export default Instagram;
