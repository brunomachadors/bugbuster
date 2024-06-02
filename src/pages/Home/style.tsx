import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  width: 100%;
  flex-direction: column;
  margin-top: 2vh;
  margin-bottom: 5vh;
  gap: 3vh;
`;

export const BlockContainer = styled.div`
  border-bottom: 3px dashed #00000073;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 2em;
  max-width: 80vw;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    font-size: 4em;
  }
`;

export const Description = styled.p`
  font-size: 1em;
  max-width: 80vw;
  text-align: center;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.25em;
    max-width: 60vw;
  }

  @media (min-width: 1024px) {
    font-size: 1.5em;
    max-width: 50vw;
  }
`;

interface MaterialIconProps {
  iconName: string;
  size?: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  iconName,
  size,
}) => {
  const iconStyle = {
    fontSize: size || 'inherit',
  };

  return (
    <span className="material-icons" style={iconStyle}>
      {iconName}
    </span>
  );
};
