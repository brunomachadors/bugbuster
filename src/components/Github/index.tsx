import { GithubContainer, GithubIcon, GithubLink } from './style';
import gitImage from '../../assets/github.svg';

function Github() {
  return (
    <GithubContainer id="gitHubContainer">
      <GithubLink
        href="https://github.com/brunomachadors"
        target="_blank"
        rel="noopener noreferrer"
        id="gitHubLink"
      >
        <GithubIcon src={gitImage} alt="Github Icon" id="gitHubIcon" />
        brunomachadors
      </GithubLink>
    </GithubContainer>
  );
}

export default Github;
