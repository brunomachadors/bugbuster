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
  ListsContainer,
  CurrentCompany,
  CompanyImage,
} from './style';
import { Mentor } from '../../Types/IMentor';

interface MentorCardProps {
  mentor: Mentor;
}

const generateId = (prefix: string, name: string) => {
  return `${prefix}${name.replace(/\s+/g, '-')}`;
};

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <MentorContainer id="mentorContainer">
      <MentorImage
        src={mentor.imageUrl}
        alt={mentor.name}
        id={generateId('mentorImage', mentor.name)}
      />
      <MentorInfo id={generateId('mentorInfo', mentor.name)}>
        <MentorName id={generateId('mentorName', mentor.name)}>
          {mentor.name}
        </MentorName>

        <MentorDescription id={generateId('mentorDescription', mentor.name)}>
          {mentor.description}
        </MentorDescription>

        <ListsContainer id={generateId('listsContainer', mentor.name)}>
          <MentorBlockContainer
            id={generateId('mentorBlockContainer', mentor.name)}
          >
            <ListContainer
              id={generateId('listContainerLanguages', mentor.name)}
            >
              <ListTitle id={generateId('listTitleLanguages', mentor.name)}>
                Linguagens:
              </ListTitle>
              {mentor.languages.map((language, index) => (
                <ListItem
                  key={index}
                  id={generateId(
                    'listItemLanguage',
                    `${mentor.name}-${language}`
                  )}
                >
                  • {language}
                </ListItem>
              ))}
            </ListContainer>
          </MentorBlockContainer>

          <MentorBlockContainer
            id={generateId('mentorBlockContainerSkills', mentor.name)}
          >
            <ListContainer id={generateId('listContainerSkills', mentor.name)}>
              <ListTitle id={generateId('listTitleSkills', mentor.name)}>
                Skills:
              </ListTitle>
              {mentor.skills.map((skill, index) => (
                <ListItem
                  key={index}
                  id={generateId('listItemSkill', `${mentor.name}-${skill}`)}
                >
                  • {skill}
                </ListItem>
              ))}
            </ListContainer>
          </MentorBlockContainer>

          <MentorBlockContainer
            id={generateId('mentorBlockContainerFrameworks', mentor.name)}
          >
            <ListContainer
              id={generateId('listContainerFrameworks', mentor.name)}
            >
              <ListTitle id={generateId('listTitleFrameworks', mentor.name)}>
                Frameworks:
              </ListTitle>
              {mentor.frameworks.map((framework, index) => (
                <ListItem
                  key={index}
                  id={generateId(
                    'listItemFramework',
                    `${mentor.name}-${framework}`
                  )}
                >
                  • {framework}
                </ListItem>
              ))}
            </ListContainer>
          </MentorBlockContainer>
        </ListsContainer>

        <CurrentCompany id={generateId('currentCompany', mentor.name)}>
          Empresa Atual
        </CurrentCompany>
        <CompanyImage
          src={mentor.company.image}
          alt={mentor.company.name}
          id={generateId('companyImage', mentor.company.name)}
        />
      </MentorInfo>
    </MentorContainer>
  );
};

export default MentorCard;
