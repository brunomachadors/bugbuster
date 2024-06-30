import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Author,
  Categories,
  GlobalStyle,
  PubDate,
} from '../../components/Medium/style';
import { MediumPost } from '../../Types/IPost';
import {
  MediumFeedContainer,
  PostContainer,
  PostThumbnail,
  PostsContainer,
  Title,
} from './style';

const MediumFeed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<MediumPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response: AxiosResponse<{ items: MediumPost[] }> =
          await axios.get('https://api.rss2json.com/v1/api.json', {
            params: {
              rss_url: 'https://medium.com/feed/@brunomachadoricardosilva',
            },
          });

        console.log('API Response:', response.data.items);

        if (response.data.items) {
          const items: MediumPost[] = response.data.items.map(
            (item: MediumPost) => ({
              ...item,
              thumbnail: extractFirstImageFromContent(item.content),
            })
          );
          console.log('Mapped Items:', items);
          setFeedItems(items);
        }
      } catch (error) {
        console.error('Error fetching feed:', error);
      }
    };

    fetchFeed();
  }, []);

  const extractFirstImageFromContent = (content: string): string | null => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  };

  const normalizeString = (str: string) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

  const handlePostClick = (post: MediumPost) => {
    const normalizedTitle = normalizeString(post.title);
    navigate(`/medium/${encodeURIComponent(normalizedTitle)}`, {
      state: { post },
    });
  };

  return (
    <MediumFeedContainer>
      <GlobalStyle />
      <PostsContainer>
        {feedItems.map((item, index) => (
          <PostContainer key={index} onClick={() => handlePostClick(item)}>
            <Title>{item.title}</Title>
            <Categories>
              {item.categories.map((category, index) => (
                <span key={index}>{category}</span>
              ))}
            </Categories>
            <Author>{item.author}</Author>
            <PubDate>{new Date(item.pubDate).toLocaleDateString()}</PubDate>

            {item.thumbnail && (
              <PostThumbnail src={item.thumbnail} alt={item.title} />
            )}
          </PostContainer>
        ))}
      </PostsContainer>
    </MediumFeedContainer>
  );
};

export default MediumFeed;
