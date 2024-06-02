import styled from 'styled-components';

export const MentorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2vh;
`;

export const MentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 2vh;
`;

export const MentorImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MentorInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MentorName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const MentorDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.p`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const ListItem = styled.li`
  font-size: 0.9em;
  color: #333;
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

export const MentorBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;