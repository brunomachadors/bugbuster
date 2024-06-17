import { PostsContainer, Title, TitleContainer } from './style';
import Post from '../../components/Post';
import { IPost } from '../../Types/IPost';
import { examplePosts } from '../../data/posts';

interface PostsProps {
  title: string;
  posts?: IPost;
}

const Posts: React.FC<PostsProps> = ({ title, posts }) => {
  return (
    <PostsContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {posts ? (
        <Post post={posts} />
      ) : (
        examplePosts
          .slice()
          .reverse()
          .map((post, index) => <Post key={index} post={post} />)
      )}
    </PostsContainer>
  );
};

export default Posts;
