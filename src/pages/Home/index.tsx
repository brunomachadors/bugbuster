import HomeIntroSection from '../../components/Intro';
import Posts from '../Posts';
import { HomeContainer } from './style';

const Home = () => {
  return (
    <HomeContainer id="homeContainer">
      <HomeIntroSection></HomeIntroSection>
      <Posts title="ULTIMA PUBLICAÇÃO"></Posts>
    </HomeContainer>
  );
};

export default Home;
