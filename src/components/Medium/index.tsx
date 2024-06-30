import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Author,
  Categories,
  ContentContainer,
  GlobalStyle,
  PubDate,
  PublicationContainer,
  Thumbnail,
  Title,
} from './style';

interface MediumPost {
  title: string;
  pubDate: string;
  thumbnail: string;
  content: string;
  author: string;
  categories: string[];
}

interface MediumApiResponse {
  items: MediumPost[];
}

interface MediumPostPageProps {
  id: string;
}

const MediumPostPage: React.FC<MediumPostPageProps> = ({ id }) => {
  const [post, setPost] = useState<MediumPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response: AxiosResponse<MediumApiResponse> = await axios.get(
          'https://api.rss2json.com/v1/api.json',
          {
            params: {
              rss_url: 'https://medium.com/feed/@brunomachadoricardosilva',
            },
          }
        );

        if (response.data.items) {
          const postData = response.data.items.find(
            (item) => item.title === id
          );

          if (postData) {
            setPost(postData);
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return null;

  return (
    <>
      <GlobalStyle />
      <ContentContainer>
        <Title>{post.title}</Title>
        <Categories>
          {post.categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </Categories>
        <PublicationContainer>
          <Author>Por {post.author}</Author>
          <PubDate>
            publicado em {new Date(post.pubDate).toLocaleDateString()}
          </PubDate>
        </PublicationContainer>
        {post.thumbnail && <Thumbnail src={post.thumbnail} alt={post.title} />}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </ContentContainer>
    </>
  );
};

export default MediumPostPage;
