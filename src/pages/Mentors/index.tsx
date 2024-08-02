import React from 'react';

import MentorCard from '../../components/MentorCard/MentorCard';
import { mentors } from '../../data/mentores';
import { MentorsContainer, Title, TitleContainer } from './style';

const Mentors: React.FC = () => {
  return (
    <MentorsContainer>
      <TitleContainer>
        <Title>MENTORES</Title>
      </TitleContainer>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </MentorsContainer>
  );
};

export default Mentors;
