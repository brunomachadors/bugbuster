import React, { useState } from 'react';
import {
  PostContainer,
  Title,
  BannerContainer,
  Banner,
  Content,
  ImageContainer,
  Signature,
  ExpandedImageContainer,
  ExpandedImage,
} from './style';
import PostImage from '../Image';
import { IPost } from '../../Types/IPost';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setExpandedImage(expandedImage === imageUrl ? null : imageUrl);
  };

  return (
    <PostContainer>
      <Title>{post.title}</Title>

      <BannerContainer>
        <Banner src={post.banner} alt="Banner da publicação" />
      </BannerContainer>

      {post.content.map((item, index) => (
        <React.Fragment key={index}>
          {item.type === 'text' && <Content>{item.value}</Content>}
          {item.type === 'image' && (
            <ImageContainer onClick={() => handleImageClick(item.value)}>
              <PostImage imageUrl={item.value} />
            </ImageContainer>
          )}
        </React.Fragment>
      ))}

      <Signature>Escrito por {post.author}</Signature>

      {expandedImage && (
        <ExpandedImageContainer onClick={() => setExpandedImage(null)}>
          <ExpandedImage src={expandedImage} alt="Imagem expandida" />
        </ExpandedImageContainer>
      )}
    </PostContainer>
  );
};

export default Post;
