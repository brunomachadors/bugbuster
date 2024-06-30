import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import {
  Author,
  Categories,
  ContentContainer,
  GlobalStyle,
  PubDate,
  PublicationContainer,
  Title,
} from './style';
import { MediumPost } from '../../Types/IPost';

interface MediumPostPageProps {
  id: string;
}

const MediumPostPage: React.FC<MediumPostPageProps> = ({ id }) => {
  const [post, setPost] = useState<MediumPost | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.post) {
      setPost(location.state.post);
    } else {
      const fetchPost = async () => {
        try {
          const response: AxiosResponse<{ items: MediumPost[] }> =
            await axios.get('https://api.rss2json.com/v1/api.json', {
              params: {
                rss_url: 'https://medium.com/feed/@brunomachadoricardosilva',
              },
            });

          if (response.data.items) {
            const postData = response.data.items.find((item) => {
              const normalizeString = (str: string) =>
                str
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase();

              const normalizedItemTitle = normalizeString(item.title);
              const normalizedId = normalizeString(id);

              return normalizedItemTitle === normalizedId;
            });

            if (postData) {
              setPost(postData);
            }
          }
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchPost();
    }
  }, [id, location.state]);

  if (!post) return null;

  return (
    <ContentContainer>
      <GlobalStyle />
      <Title>{post.title.toUpperCase()}</Title>
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
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </ContentContainer>
  );
};

export default MediumPostPage;
