/**
 *
 * ArticlePage
 *
 */
import { Col, Row } from 'antd';
import { Article } from 'app/components/Article';
import { PostList, PostModal, SiteMap } from 'app/models';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { styleVariables } from 'styles';
import { sizes } from 'styles/media';

export const ArticlePage = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: sizes.medium });
  const ArticlePageWrapper = styled.div`
    background-color: ${styleVariables.BACKGROUND_COLOR};
    padding: ${isMobileScreen ? '2rem 10px' : '2rem 0'};
  `;
  type Params = {
    articleName: string;
  };
  const { articleName } = useParams<Params>();
  console.log('articleName = ' + articleName);

  const result = PostList.find(item => item.id === articleName);
  console.log(result);

  const renderResult = () => {
    if (result != undefined) {
      return <Article {...result} />;
    } else {
      return <div>Not found</div>;
    }
  };
  return (
    <ArticlePageWrapper>
      <Row justify="center">
        <Col sm={18} xs={24}>
          {renderResult()}
        </Col>
      </Row>
    </ArticlePageWrapper>
  );
};
