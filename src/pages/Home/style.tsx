import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 2vh;
  gap: 3vh;
`;

export const BlockContainer = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  max-width: 50vw;
  text-align: center;
`;

interface MaterialIconProps {
  iconName: string;
}

interface MaterialIconProps {
  iconName: string;
  size?: string; // Adicionando um tamanho opcional
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
