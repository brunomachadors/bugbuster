import KnowMoreButton from '../../components/Button';
import HomeIntroSection from '../../components/Intro';
import Testimonials from '../Testimonials';

import { HomeContainer } from './style';

const Home = () => {
  return (
    <HomeContainer id="homeContainer">
      <HomeIntroSection></HomeIntroSection>
      <Testimonials />
      <KnowMoreButton></KnowMoreButton>
    </HomeContainer>
  );
};

export default Home;
