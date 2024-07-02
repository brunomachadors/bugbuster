import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
import { API_KEY } from '../../data/keys';

const MediumPostPage: React.FC = () => {
  const [post, setPost] = useState<MediumPost | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const location = useLocation();
  const { id } = useParams<{ id: string }>(); // Obter o ID da URL

  useEffect(() => {
    const fetchPostById = async (postId: string) => {
      try {
        const response: AxiosResponse<{ items: MediumPost[] }> =
          await axios.get('https://api.rss2json.com/v1/api.json', {
            params: {
              rss_url: 'https://medium.com/feed/@brunomachadoricardosilva',
              api_key: API_KEY,
            },
          });

        console.log('PUBLICAÇÕES');
        console.log(response.data.items);

        if (response.data.items) {
          const postData = response.data.items.find((item) => {
            const normalizeString = (str: string) =>
              str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase();

            const normalizedItemTitle = normalizeString(item.title);
            const normalizedId = normalizeString(postId);

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

    if (location.state && location.state.post) {
      setPost(location.state.post);
    } else if (id) {
      fetchPostById(id);
    }
  }, [id, location.state]);

  const handleImageClick = (imageUrl: string) => {
    setExpandedImage(imageUrl);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

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
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === 'IMG') {
            handleImageClick((e.target as HTMLImageElement).src);
          }
        }}
      />

      {expandedImage && (
        <>
          <div className="overlay" onClick={closeExpandedImage}></div>
          <img
            className="expanded-image"
            src={expandedImage}
            alt="Imagem Expandida"
            onClick={closeExpandedImage}
          />
        </>
      )}
    </ContentContainer>
  );
};

export default MediumPostPage;
