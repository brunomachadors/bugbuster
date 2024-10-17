import styled from 'styled-components';

export const GithubContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 25px;
  border: 2px solid #45474b;
  border-radius: 8px;
  color: #45474b;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: #fad72c;
    transform: translateY(-2px);
  }
`;

export const GithubIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  transition: transform 0.3s ease;

  ${GithubLink}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 575px) {
    width: 28px;
    height: 28px;
  }
`;
