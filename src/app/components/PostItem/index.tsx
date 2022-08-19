/**
 *
 * PostItem
 *
 */
import { Col, Row } from 'antd';
import { PostItemModal } from 'app/models';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

export function PostItem(postItem: PostItemModal) {
  const { title, datePosted, description, imageUrl } = postItem;
  return (
    <Item>
      <Row justify="space-between">
        <Col sm={8}>
          <_ImageWrapper to="">
            <_Image src={imageUrl} alt="" />
          </_ImageWrapper>
        </Col>
        <Col sm={15}>
          <TitleInfo to="">{title}</TitleInfo>
          <DatePostInfo>{datePosted.toDateString()}</DatePostInfo>
          <DescriptionInfo>{description}</DescriptionInfo>
        </Col>
      </Row>
    </Item>
  );
}

const _ImageWrapper = styled(Link)`
  overflow: hidden;
  display: block;
`;
const _Image = styled.img`
  -webkit-transition: 0.3s ease-out;
  -moz-transition: 0.3s ease-out;
  -o-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  -moz-transform: scale(1, 1);
  -webkit-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  transform: scale(1, 1);

  opacity: 1;

  max-width: 100%;
  height: auto;
  vertical-align: top;

  &:hover {
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    -moz-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
`;
const Item = styled.div``;
const TitleInfo = styled(Link)`
  font-size: 1.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  color: #333;
  font-size: 16px;
  line-height: normal;
  margin-bottom: 5px;
  font-weight: 700;

  text-decoration: none !important;
  transition: ${styleVariables.TRANSITION};

  &:hover {
    color: ${styleVariables.TEXT_COLOR_RED};
  }
`;
const DatePostInfo = styled.p`
  color: ${styleVariables.TEXT_COLOR_GRAY};
  margin-bottom: 10px;
`;
const DescriptionInfo = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;

  color: #333333;
  margin-top: 5px;
  line-height: 22px;
  text-align: justify;
`;
