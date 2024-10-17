import styled from 'styled-components';

export const SocialLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 10vw;
  max-width: 100%;
  box-shadow: none;
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  transition: transform 0.3s ease;

  ${SocialLinkContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border: 2px solid #45474b;
  border-radius: 8px;
  color: #45474b;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: #f90000;
    transform: translateY(-2px);
  }
`;
