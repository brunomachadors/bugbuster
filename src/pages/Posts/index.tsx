import React from 'react';
import { CustomLink, PostsContainer, Title, TitleContainer } from './style';
import Post from '../../components/Post';
import { IPost } from '../../Types/IPost';
import { examplePosts } from '../../data/posts';
import { PostMetaTags } from '../../components/Post/style';

interface PostsProps {
  title: string;
  posts?: IPost[];
}

const Posts: React.FC<PostsProps> = ({ title, posts = examplePosts }) => {
  return (
    <PostsContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {posts
        .slice()
        .reverse()
        .map((post, index) => (
          <CustomLink to={`/posts/${post.id}`} key={index}>
            <PostMetaTags>
              <meta property="og:title" content={post.title} />
              <meta
                property="og:description"
                content={post.content[0]?.value}
              />
              <meta property="og:image" content={post.banner} />
              <meta
                property="og:url"
                content={`https://seu-site.com/posts/${post.id}`}
              />
              <meta property="og:type" content="article" />
            </PostMetaTags>
            <Post post={post} />
          </CustomLink>
        ))}
    </PostsContainer>
  );
};

export default Posts;
