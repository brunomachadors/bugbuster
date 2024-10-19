import styled from 'styled-components';

export const MentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-top: 2vh;
  padding: 2vh;
  border-top: 3px dashed #00000073;
  border-bottom: 3px dashed #00000073;
  border-radius: 10%;
  width: 60%;
`;

export const MentorImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MentorInfo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MentorName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 1px;
`;

export const MentorDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

export const ListContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ListTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: larger;
  text-align: center;
  width: 100%;
`;

export const ListItem = styled.div`
  font-size: medium;
  color: #333;
  text-align: center;
  width: 100%;
`;

export const MentorBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ListsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CurrentCompany = styled.p`
  font-size: 1.2rem;
  color: #000000;
  font-weight: bold;
  text-align: center;
`;

export const CompanyImage = styled.img`
  width: 30%;
  height: auto;

  @media (min-width: 1024px) {
    width: 25%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 35%;
  }

  @media (max-width: 767px) {
    width: 50%;
  }
`;
