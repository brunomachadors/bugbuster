// src/pages/Mentors.tsx
import React from 'react';
import { MentorsContainer } from '../../components/MentorCard/style';
import MentorCard from '../../components/MentorCard/MentorCard';

const Mentors: React.FC = () => {
  // Array de mentores com suas informações
  const mentors = [
    {
      id: 1,
      name: 'Bruno Machado',
      description: `Com 16 anos de experiência na área de tecnologia`,
      languages: ['javascript', 'typescript', 'C#'],
      skills: ['Teste Funcional', 'Automação Frontend', 'Automação Backend'],
      frameworks: ['Cypress', 'Playwright', 'Selenium', 'Postman'],
      imageUrl:
        'https://media.licdn.com/dms/image/C4D03AQFnMRVhdXJDQg/profile-displayphoto-shrink_800_800/0/1622465790874?e=1722470400&v=beta&t=-7X6qPATVHjhKqE54z_c2001K8lKPecGK8u4Yg8oNUc', // URL da imagem do mentor
    },
  ];

  return (
    <MentorsContainer>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </MentorsContainer>
  );
};

export default Mentors;
