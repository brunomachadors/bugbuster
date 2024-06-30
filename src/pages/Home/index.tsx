import HomeIntroSection from '../../components/Intro';

import Contact from '../Contact';
import Mentors from '../Mentors';
import OurServices from '../OurServices';

import { HomeContainer } from './style';

const Home = () => {
  return (
    <HomeContainer id="homeContainer">
      <HomeIntroSection></HomeIntroSection>
      <OurServices></OurServices>
      <Mentors></Mentors>

      <Contact></Contact>
    </HomeContainer>
  );
};

export default Home;
