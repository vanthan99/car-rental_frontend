/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Col, Collapse, Image, Row, Typography } from 'antd';
const { Text } = Typography;
interface Props {}

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <HeaderWrapper>
      <Row justify="space-around" align="middle">
        <Col>
          <Text>
            D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu Một, Bình
            Dương
          </Text>
        </Col>
        <Col>
          <Text>0902 927 936 - 0382 936 939</Text>
          <Text>FB Icon</Text>
        </Col>
      </Row>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #fbbc05;
`;

const TextWraper = styled.div``;
