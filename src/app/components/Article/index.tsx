/**
 *
 * Article
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { PostModal } from 'app/models';
import { CalendarFilled, EyeFilled } from '@ant-design/icons';

export const Article = (artilce: PostModal) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { contentDecoder, dateCreated, title, viewCount, id } = artilce;
  console.log('result = ', artilce);

  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      <Time>
        <span>
          <CalendarFilled /> {'ngày'}
        </span>
        <span>
          <EyeFilled />
          {viewCount}
        </span>
      </Time>
      <Content>{contentDecoder}</Content>
    </ArticleWrapper>
  );
};

const Content = styled.div``;
const Title = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;
const Time = styled.div`
  margin-bottom: 0.75rem;
  color: #000;
`;
const ArticleWrapper = styled.div`
  padding: 30px 0;
`;
