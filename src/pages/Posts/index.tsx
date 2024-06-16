import { PostsContainer, Title, TitleContainer } from './style';
import Post from '../../components/Post';
import { examplePost } from '../../data/posts';

interface PostsProps {
  title: string;
}

const Posts: React.FC<PostsProps> = ({ title }) => {
  return (
    <PostsContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>

      <Post post={examplePost} />
    </PostsContainer>
  );
};

export default Posts;
