import HomeIntroSection from '../../components/Intro';
import { examplePosts } from '../../data/posts';

import Contact from '../Contact';
import Mentors from '../Mentors';
import OurServices from '../OurServices';
import Posts from '../Posts';
import { HomeContainer } from './style';

const Home = () => {
  return (
    <HomeContainer id="homeContainer">
      <HomeIntroSection></HomeIntroSection>
      <Posts
        title="ÚLTIMA PUBLICAÇÃO"
        posts={[examplePosts[examplePosts.length - 1]]} // Passar um array com um único post
      ></Posts>
      <OurServices></OurServices>
      <Mentors></Mentors>

      <Contact></Contact>
    </HomeContainer>
  );
};

export default Home;
