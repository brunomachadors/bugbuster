import React from 'react';
import { MentorsContainer } from '../../components/MentorCard/style';
import MentorCard from '../../components/MentorCard/MentorCard';
import { mentors } from '../../data/mentores';

const Mentors: React.FC = () => {
  return (
    <MentorsContainer>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </MentorsContainer>
  );
};

export default Mentors;
