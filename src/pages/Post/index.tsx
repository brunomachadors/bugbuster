import React from 'react';
import { useParams } from 'react-router-dom';
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
      <Post post={post} />
    </div>
  );
};

export default PostPage;
