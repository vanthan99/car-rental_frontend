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
import { FacebookOutlined, SearchOutlined } from '@ant-design/icons';
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
      {/* <Row
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
       */}

      <MenuWrapper>
        <DeskTopMenu>
          <ImageWrapper to="/">
            <_Image src="http://xetulaitritin.com/thumbs/141x53x1/upload/photo/logo-6731.png" />
          </ImageWrapper>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                position: 'relative',
                zIndex: 10,
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',

                  width: '100%',
                  padding: 0,
                  margin: 'auto',
                  listStyle: 'none',
                  height: '40px',
                  lineHeight: '40px',
                }}
              >
                <Li>
                  <_NavLink to="/">trang chủ</_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to="/about"
                  >
                    giới thiệu
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to="/service"
                  >
                    dịch vụ
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to="/type"
                  >
                    loại xe
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to="/activity"
                  >
                    hoạt động
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to="/contact"
                  >
                    liên hệ
                  </_NavLink>
                </Li>
                <Li style={{ marginLeft: 'auto' }}>
                  <SearchWrapper>
                    <_Input type="text" placeholder="Nhập từ khóa cần tìm..." />
                    <SearchButton>
                      <SearchOutlined />
                    </SearchButton>
                  </SearchWrapper>
                </Li>
              </ul>
            </div>
          </div>
        </DeskTopMenu>
      </MenuWrapper>
    </HeaderWrapper>
  );
}
const SearchButton = styled.p`
  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;

  width: 35px;
  height: 35px;
  cursor: pointer;
  text-align: center;
  margin: 0px;
  color: #000;
  font-size: 16px;
`;

const _Input = styled.input`
  width: calc(100% - 35px);
  height: 35px;
  outline: none;
  padding: 0px;
  border: 0px;
  background: transparent;
  text-indent: 10px;
  font-size: 12px;
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  overflow: visible;
`;

const SearchWrapper = styled.div`
  width: 235px;
  background: #f1f3f4;
  border-radius: 20px;
  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;
`;

const _NavLink = styled(NavLink)`
  display: block;
  position: relative;
  color: #333;
  padding: 0 20px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none !important;
  height: 100%;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 30px;

  transition: ${styleVariables.TRANSITION} ease-out;
  outline: none;
  background-color: transparent;
`;
const Li = styled.li`
  position: relative;
  z-index: 1;
  display: list-item;
  text-align: -webkit-match-parent;

  &:hover > a {
    color: ${styleVariables.TEXT_COLOR_RED};
  }
`;
const _Image = styled.img`
  opacity: 1;

  max-width: 100%;
  height: auto;
  vertical-align: top;
  border-style: none;
`;
const ImageWrapper = styled(Link)`
  position: relative;
  outline: none;
  padding: 0px;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 10px;
    height: 100%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 11;
  }
  &:before {
    left: -5%;
    animation: light-left 2.5s infinite alternate linear;
  }

  &:after {
    right: -5%;
    animation: light-right 2.5s infinite alternate linear;
  }

  @keyframes light-left {
    0% {
      left: -5%;
      opacity: 0;
    }
    50% {
      left: 50%;
      opacity: 1;
    }
    to {
      left: 105%;
      opacity: 0;
    }
  }
  @keyframes light-right {
    0% {
      right: -5%;
      opacity: 0;
    }
    50% {
      right: 50%;
      opacity: 1;
    }
    to {
      right: 105%;
      opacity: 0;
    }
  }
`;

const HeaderWrapper = styled.header`
  // background-color: ${styleVariables.BACKGROUND_COLOR};
`;

// const _NavLink = styled(NavLink)`
//   color: ${styleVariables.TEXT_COLOR_BLACK};
//   font-size: ${styleVariables.TEXT_FONT_SIZE_LV3};
//   transition: ${styleVariables.TRANSITION};

//   &:hover {
//     color: ${styleVariables.TEXT_COLOR_HOVER};
//     font-size: ${styleVariables.TEXT_FONT_SIZE_LV3};
//   }
// `;

const MenuWrapper = styled.div`
  background: #fff;
  padding: 13px 0;
`;
const DeskTopMenu = styled.div`
  max-width: 1200px;
  margin: auto;
  width: calc(100% - 20px);
  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;
`;
