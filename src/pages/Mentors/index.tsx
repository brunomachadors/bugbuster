import React from 'react';

import MentorCard from '../../components/MentorCard/MentorCard';
import { mentors } from '../../data/mentores';
import { MentorsContainer, Title, TitleContainer } from './style';
import Logo from '../../components/Logo/Logo';

const Mentors: React.FC = () => {
  return (
    <MentorsContainer>
      <TitleContainer>
        <Logo></Logo>
        <Title>MENTORES</Title>
      </TitleContainer>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </MentorsContainer>
  );
};

export default Mentors;
