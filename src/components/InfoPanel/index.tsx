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
  // Remove todos os espaços do título do serviço
  const uniqueId = service.title.replace(/\s+/g, '');

  return (
    <BlockContainer id={`blockContainer-${uniqueId}`}>
      <TitleContainer id={`titleContainer-${uniqueId}`}>
        <MaterialIcon iconName={service.icon} size="5vh" />
        <Title id={`title-${uniqueId}`}>{service.title}</Title>
      </TitleContainer>

      <DescriptionContainer id={`descriptionContainer-${uniqueId}`}>
        <Description id={`description-${uniqueId}`}>
          {service.description}
        </Description>
      </DescriptionContainer>
    </BlockContainer>
  );
};

export default InfoPanel;
