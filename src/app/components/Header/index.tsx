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
import { Link, NavLink, useHistory } from 'react-router-dom';
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
      <Row>
        <ul>
          <li>
            <LinkWraper>
              <NavLink to="/">Home</NavLink>
            </LinkWraper>
            <LinkWraper>
              <NavLink to="/about">About</NavLink>
            </LinkWraper>
            <LinkWraper>
              <NavLink to="/service">Service</NavLink>
            </LinkWraper>
            <LinkWraper>
              <NavLink to="/type">Type Car</NavLink>
            </LinkWraper>
            <LinkWraper>
              <NavLink to="/activity">Activity</NavLink>
            </LinkWraper>
            <LinkWraper>
              <NavLink to="/contact">Contact</NavLink>
            </LinkWraper>
          </li>
        </ul>
      </Row>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #fbbc05;
`;

const LinkWraper = styled.span`
  margin: 0px 10px;
`;

const TextWraper = styled.div``;
