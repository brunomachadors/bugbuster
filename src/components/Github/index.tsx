import { GithubContainer, GithubIcon, GithubLink } from './style';
import gitImage from '../../assets/github.svg';

function Github() {
  return (
    <GithubContainer>
      <GithubLink
        href="https://github.com/brunomachadors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon src={gitImage} alt="Github Icon" />
        brunomachadors
      </GithubLink>
    </GithubContainer>
  );
}

export default Github;
