import InfoPanel from '../../components/InfoPanel';
import Logo from '../../components/Logo/Logo';
import { SERVICES } from '../../data/services';
import { OurServicesContainer, Title, TitleContainer } from './style';

function OurServices() {
  return (
    <OurServicesContainer>
      <TitleContainer>
        <Logo></Logo>
        <Title>NOSSOS SERVIÇOS</Title>
      </TitleContainer>
      <InfoPanel service={SERVICES.carrerTransition} />
      <InfoPanel service={SERVICES.automation} />
      <InfoPanel service={SERVICES.specialization} />
    </OurServicesContainer>
  );
}

export default OurServices;
