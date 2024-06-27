import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Post from '../../components/Post';
import { examplePosts } from '../../data/posts';
import { IPost } from '../../Types/IPost';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const post: IPost | undefined = examplePosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content[0]?.value} />
        <meta property="og:image" content={post.banner} />
        <meta
          property="og:url"
          content={`https://seu-site.com/posts/${post.id}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <Post post={post} />
    </div>
  );
};

export default PostPage;
