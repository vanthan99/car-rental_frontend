/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  Col,
  Collapse,
  Divider,
  Image,
  List,
  Row,
  Space,
  Typography,
} from 'antd';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Search from 'antd/lib/input/Search';
import { styleVariables } from 'styles';
import { FacebookOutlined } from '@ant-design/icons';
const { Text } = Typography;
interface Props {}

const onSearch = (value: string) => console.log(value);

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  return (
    <HeaderWrapper>
      <Row
        justify="center"
        align="middle"
        css={{
          backgroundColor: styleVariables.BACKGROUND_COLOR,
          height: '3rem',
        }}
      >
        <Col sm={10}>
          <Text>
            D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu Một, Bình
            Dương
          </Text>
        </Col>
        <Col sm={8}>
          <Row justify="end">
            <Col>
              <Space>
                <Text>0902 927 936 - 0382 936 939</Text>
                <Text>
                  <FacebookOutlined style={{ fontSize: '20px' }} />
                </Text>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{ padding: '20px 0' }}
        justify="center"
        align="middle"
        css={{ backgroundColor: styleVariables.BACKGROUND_COLOR2 }}
      >
        <Col sm={5}>
          <ImageWrapper>
            <img
              src="http://xetulaitritin.com/thumbs/141x53x1/upload/photo/logo-6731.png"
              alt="logo"
            />
          </ImageWrapper>
        </Col>
        <Col sm={10}>
          <Space>
            <_NavLink to="/">TRANG CHỦ</_NavLink>
            <_NavLink activeStyle={{ color: 'red' }} to="/about">
              GIỚI THIỆU
            </_NavLink>
            <_NavLink activeStyle={{ color: 'red' }} to="/service">
              DỊCH VỤ
            </_NavLink>
            <_NavLink activeStyle={{ color: 'red' }} to="/type">
              LOẠI XE
            </_NavLink>
            <_NavLink activeStyle={{ color: 'red' }} to="/activity">
              HOẠT ĐỘNG
            </_NavLink>
            <_NavLink activeStyle={{ color: 'red' }} to="/contact">
              LIÊN HỆ
            </_NavLink>
          </Space>
        </Col>
        <Col sm={3}>
          <Search
            placeholder="Nhập từ khóa cần tìm"
            onSearch={onSearch}
            enterButton
          />
        </Col>
      </Row>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  // background-color: ${styleVariables.BACKGROUND_COLOR};
`;

const _NavLink = styled(NavLink)`
  color: ${styleVariables.TEXT_COLOR_BLACK};
  font-size: ${styleVariables.TEXT_FONT_SIZE_LV3};
  transition: ${styleVariables.TRANSITION};

  &:hover {
    color: ${styleVariables.TEXT_COLOR_HOVER};
    font-size: ${styleVariables.TEXT_FONT_SIZE_LV3};
  }
`;

const ImageWrapper = styled.div``;
