import { KnowMoreButton } from '../../components/Button';
import Galery from '../../components/Galery';
import HomeIntroSection from '../../components/Intro';
import Testimonials from '../Testimonials';

import { HomeContainer } from './style';

const Home = () => {
  return (
    <HomeContainer id="homeContainer">
      <HomeIntroSection></HomeIntroSection>
      <KnowMoreButton></KnowMoreButton>
      <Testimonials />
      <Galery />
    </HomeContainer>
  );
};

export default Home;
