import InfoPanel from '../../components/InfoPanel';
import { SERVICES } from '../../data/services';
import { OurServicesContainer } from './style';

function OurServices() {
  return (
    <OurServicesContainer>
      <InfoPanel service={SERVICES.carrerTransition} />
      <InfoPanel service={SERVICES.automation} />
      <InfoPanel service={SERVICES.specialization} />
    </OurServicesContainer>
  );
}

export default OurServices;
