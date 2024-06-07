import { InstagramContainer, InstagramIcon, InstagramLink } from "./style";

function Instagram() {
  return (
    <InstagramContainer>
      <InstagramIcon src="https://img.icons8.com/?id=RhYNENh5cxlS&format=png"></InstagramIcon>
      <InstagramLink
        href="https://www.instagram.com/brunomachadors/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @brunomachadors
      </InstagramLink>
    </InstagramContainer>
  );
}

export default Instagram;
