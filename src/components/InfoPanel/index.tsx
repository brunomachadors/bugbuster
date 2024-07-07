import { IService } from '../../Types/IServices';
import { MaterialIcon } from '../Icons/style';
import {
  BlockContainer,
  Description,
  DescriptionContainer,
  Title,
  TitleContainer,
} from './style';

interface InfoPanelProps {
  service: IService;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ service }) => {
  return (
    <BlockContainer id="blockContainer1">
      <TitleContainer id="titleContainerInfoPanel">
        <MaterialIcon iconName={service.icon} size="5vh" />
        <Title id="titleInfoPanel">{service.title}</Title>
      </TitleContainer>

      <DescriptionContainer id="descriptionContainerInfoPanel">
        <Description id="descriptionInfoPanel">
          {service.description}
        </Description>
      </DescriptionContainer>
    </BlockContainer>
  );
};

export default InfoPanel;
