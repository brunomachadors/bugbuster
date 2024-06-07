import { LinkedinContainer, LinkedinIcon, LinkedinLink } from './style';

function Linkedin() {
  return (
    <LinkedinContainer>
      <LinkedinIcon
        src="https://img.icons8.com/?id=8808&format=png"
        alt="LinkedIn Icon"
      />
      <LinkedinLink
        href="https://www.linkedin.com/in/brunomrs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bruno Machado
      </LinkedinLink>
    </LinkedinContainer>
  );
}

export default Linkedin;
