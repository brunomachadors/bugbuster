// src/components/MentorCard.tsx

import React from 'react';
import {
  MentorContainer,
  MentorDescription,
  MentorImage,
  MentorInfo,
  MentorName,
  ListContainer,
  ListTitle,
  ListItem,
  MentorBlockContainer,
} from './style';
import { Mentor } from '../../Types/IMentor';

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <MentorContainer>
      <MentorImage src={mentor.imageUrl} alt={mentor.name} />
      <MentorInfo>
        <MentorName>{mentor.name}</MentorName>

        <MentorDescription>{mentor.description}</MentorDescription>

        <MentorBlockContainer>
          <ListContainer>
            <ListTitle>Linguagens:</ListTitle>
            {mentor.languages.map((language, index) => (
              <ListItem key={index}>• {language}</ListItem>
            ))}
          </ListContainer>
        </MentorBlockContainer>

        <MentorBlockContainer>
          <ListContainer>
            <ListTitle>Skills:</ListTitle>
            {mentor.skills.map((skill, index) => (
              <ListItem key={index}>• {skill}</ListItem>
            ))}
          </ListContainer>
        </MentorBlockContainer>

        <MentorBlockContainer>
          <ListContainer>
            <ListTitle>Frameworks:</ListTitle>
            {mentor.frameworks.map((framework, index) => (
              <ListItem key={index}>• {framework}</ListItem>
            ))}
          </ListContainer>
        </MentorBlockContainer>
      </MentorInfo>
    </MentorContainer>
  );
};

export default MentorCard;
