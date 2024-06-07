import { InstagramContainer, InstagramIcon, InstagramLink } from './style';

function Instagram() {
  return (
    <InstagramContainer>
      <InstagramLink
        href="https://www.instagram.com/brunomachadors/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon src="https://img.icons8.com/?id=RhYNENh5cxlS&format=png"></InstagramIcon>
        brunomachadors
      </InstagramLink>
    </InstagramContainer>
  );
}

export default Instagram;
