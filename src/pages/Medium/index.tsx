import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';

import { PostsContainer } from '../../pages/Posts/style';
import { PostContainer } from '../../components/Post/style';
import MediumPostPage from '../../components/Medium';
import { GlobalStyle } from '../../components/Medium/style';

interface MediumFeedItem {
  title: string;
}

const MediumFeedContainer = styled.div``;

const MediumFeed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<MediumFeedItem[]>([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response: AxiosResponse<{ items: MediumFeedItem[] }> =
          await axios.get('https://api.rss2json.com/v1/api.json', {
            params: {
              rss_url: 'https://medium.com/feed/@brunomachadoricardosilva',
            },
          });

        if (response.data.items) {
          const items: MediumFeedItem[] = response.data.items.map(
            (item: MediumFeedItem) => ({
              title: item.title,
            })
          );
          setFeedItems(items);
        }
      } catch (error) {
        console.error('Error fetching feed:', error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <MediumFeedContainer>
      <GlobalStyle />
      <PostsContainer>
        {feedItems.map((item, index) => (
          <PostContainer key={index}>
            <MediumPostPage id={item.title} />
          </PostContainer>
        ))}
      </PostsContainer>
    </MediumFeedContainer>
  );
};

export default MediumFeed;
