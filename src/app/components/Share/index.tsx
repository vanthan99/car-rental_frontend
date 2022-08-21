/**
 *
 * Share
 *
 */
import {
  GoogleOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YahooOutlined,
} from '@ant-design/icons';
import { Col, Row, Space } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

interface Props {}

export function Share(props: Props) {
  return (
    <ShareWrapper>
      <Title>Chia sẻ:</Title>
      <SocialWrapper>
        <Space>
          <ItemWrapper>
            <Link to="/">
              <TwitterOutlined style={{ fontSize: '20px', color: '#08c' }} />
            </Link>
          </ItemWrapper>
          <ItemWrapper>
            <Link to="/">
              <LinkedinOutlined style={{ fontSize: '20px', color: '#08c' }} />
            </Link>
          </ItemWrapper>
          <ItemWrapper>
            <Link to="/">
              <GoogleOutlined style={{ fontSize: '20px', color: '#08c' }} />
            </Link>
          </ItemWrapper>
          <ItemWrapper>
            <Link to="/">
              <YahooOutlined style={{ fontSize: '20px', color: '#08c' }} />
            </Link>
          </ItemWrapper>
        </Space>
      </SocialWrapper>
    </ShareWrapper>
  );
}

const ItemWrapper = styled.div`
  transition: ${styleVariables.TRANSITION};
  padding-top: 5px;
  padding-bottom: 0;

  &:hover {
    padding-top: 0;
    padding-bottom: 5px;
  }
`;

const ShareWrapper = styled.div`
  padding: 17px 15px 10px 15px;
  line-height: normal;
  background-color: rgba(128, 128, 128, 0.15);
  margin-top: 15px;
  border-radius: 5px;
`;

const Title = styled.p`
  display: block;
  margin-bottom: 5px;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
