import { IService } from '../../Types/IServices';
import {
  BlockContainer,
  Description,
  DescriptionContainer,
  MaterialIcon,
  Title,
  TitleContainer,
} from './style';

interface InfoPanelProps {
  service: IService;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ service }) => {
  return (
    <BlockContainer id="blockContainer1">
      <TitleContainer>
        <MaterialIcon iconName={service.icon} size="5vh" />
        <Title>{service.title}</Title>
      </TitleContainer>

      <DescriptionContainer>
        <Description>{service.description}</Description>
      </DescriptionContainer>
    </BlockContainer>
  );
};

export default InfoPanel;
