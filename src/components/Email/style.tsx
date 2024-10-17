import styled from 'styled-components';

export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const EmailLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #45474b;
  border-radius: 8px;
  color: #45474b;
  text-decoration: none;
  font-weight: bold;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: #fad72c;
    transform: translateY(-2px);
  }
`;

export const EmailIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  transition: transform 0.3s ease;

  ${EmailLink}:hover & {
    transform: scale(1.2);
  }
`;
