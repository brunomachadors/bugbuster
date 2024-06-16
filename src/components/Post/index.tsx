import React from 'react';
import {
  PostContainer,
  Title,
  BannerContainer,
  Banner,
  Content,
  ImageContainer,
} from './style';
import PostImage from '../Image';
import { IPost } from '../../Types/IPost';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <PostContainer>
      <BannerContainer>
        <Banner src={post.banner} alt="Banner da publicação" />
      </BannerContainer>

      <Title>{post.title}</Title>

      {post.content.map((paragraph, index) => (
        <Content key={index}>{paragraph}</Content>
      ))}
      <ImageContainer>
        <PostImage imageUrl={post.imageUrl} />
      </ImageContainer>
    </PostContainer>
  );
};

export default Post;
