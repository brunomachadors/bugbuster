import React from 'react';

import { CustomLink, PostsContainer, Title, TitleContainer } from './style';
import Post from '../../components/Post';
import { IPost } from '../../Types/IPost';
import { examplePosts } from '../../data/posts';

interface PostsProps {
  title: string;
  posts?: IPost[];
}

const Posts: React.FC<PostsProps> = ({ title, posts }) => {
  const postsToRender = Array.isArray(posts) ? posts : examplePosts;

  return (
    <PostsContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {postsToRender
        .slice()
        .reverse()
        .map((post, index) => (
          <CustomLink to={`/posts/${post.id}`} key={index}>
            <Post post={post} />
          </CustomLink>
        ))}
    </PostsContainer>
  );
};

export default Posts;
