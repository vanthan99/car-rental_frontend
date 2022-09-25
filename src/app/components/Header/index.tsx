/**
 *
 * Header
 *
 */
import {
  AimOutlined,
  FacebookOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Col, List, Row, Space, Typography } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';
import { MobilScreenSize } from 'styles/commons';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import { sizes } from 'styles/media';
import { CompanyInfo, SiteMap, SiteMapInNav } from 'app/models';
const { Text } = Typography;
const onSearch = (value: string) => console.log(value);
const TopHeaderWrapper = styled.span``;
export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const isMediumScreen = useMediaQuery({ maxWidth: sizes.medium });
  const [isShowMobileMenu, setShowMobileMenu] = React.useState(false);
  const toggleMobileMenu = () => setShowMobileMenu(!isShowMobileMenu);
  const { ABOUT, ACTIVITY, CONTACT, HOME, SERVICE, TYPE } = SiteMap;
  const [showHeader, setShowHeader] = React.useState<boolean>(true);
  const turnOffHeader = () => {
    setShowHeader(false);
  };
  return (
    <HeaderWrapper>
      <TopHeaderWrapper hidden={isMediumScreen ? true : false}>
        <Row
          justify="center"
          align="middle"
          css={{
            backgroundColor: styleVariables.BACKGROUND_COLOR,
            height: '3rem',
          }}
        >
          <Col sm={18}>
            <Row justify="space-between">
              <Col sm={10}>
                <ComponentAlignCenter>
                  <AimOutlined
                    style={{ fontSize: styleVariables.ICON_FONT_SIZE }}
                  />{' '}
                  &nbsp;
                  <span>{CompanyInfo.ADDRESS}</span>
                </ComponentAlignCenter>
              </Col>
              <Col sm={8}>
                <Row justify="end">
                  <Col>
                    <ComponentAlignCenter>
                      <PhoneOutlined
                        rotate={90}
                        style={{ fontSize: styleVariables.ICON_FONT_SIZE }}
                      />
                      <b> &nbsp; {CompanyInfo.PHONE_NUMBER} &nbsp;| &nbsp;</b>
                      {/* <Link style={{color:'black'}} to={CompanyInfo.FACEBOOK_HOMEPAGE}> */}
                      <FacebookOutlined
                        style={{ fontSize: styleVariables.ICON_FONT_SIZE }}
                      />
                      {/* </Link> */}
                    </ComponentAlignCenter>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </TopHeaderWrapper>
      <MenuWrapper>
        <DeskTopMenu hidden={isMediumScreen ? true : false}>
          <Row justify="center" align="middle">
            <Col sm={18}>
              <Row justify="space-between" align="middle">
                <Col sm={3}>
                  <ImageWrapper to="/">
                    <_Image src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/logo-6731.png?alt=media&token=0cb4880a-9733-4af8-8dbb-6f45782fd84c" />
                  </ImageWrapper>
                </Col>
                <Col>
                  <Row align="middle" justify="end">
                    <Space>
                      <_NavLink to={HOME.path}>{HOME.name}</_NavLink>
                      <_NavLink
                        activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                        to={ABOUT.path}
                      >
                        {ABOUT.name}
                      </_NavLink>
                      <_NavLink
                        activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                        to={SERVICE.path}
                      >
                        {SERVICE.name}
                      </_NavLink>

                      <_NavLink
                        activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                        to={TYPE.path}
                      >
                        {TYPE.name}
                      </_NavLink>

                      <_NavLink
                        activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                        to={ACTIVITY.path}
                      >
                        {ACTIVITY.name}
                      </_NavLink>
                      <_NavLink
                        activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                        to={CONTACT.path}
                      >
                        {CONTACT.name}
                      </_NavLink>
                      <SearchWrapper>
                        <_Input
                          type="text"
                          placeholder="Nhập từ khóa cần tìm..."
                        />
                        <SearchButton>
                          <SearchOutlined />
                        </SearchButton>
                      </SearchWrapper>
                    </Space>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* <div
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
                  <_NavLink to={HOME.path}>{HOME.name}</_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to={ABOUT.path}
                  >
                    {ABOUT.name}
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to={SERVICE.path}
                  >
                    {SERVICE.name}
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to={TYPE.path}
                  >
                    {TYPE.name}
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to={ACTIVITY.path}
                  >
                    {ACTIVITY.name}
                  </_NavLink>
                </Li>
                <Li>
                  <_NavLink
                    activeStyle={{ color: styleVariables.TEXT_COLOR_RED }}
                    to={CONTACT.path}
                  >
                    {CONTACT.name}
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
          </div> */}
        </DeskTopMenu>
        <MobileMenu hidden={isMediumScreen ? false : true}>
          <MobileMenuBar>
            <_Hamburger onClick={toggleMobileMenu}>
              <MenuOutlined />
            </_Hamburger>
            <MobileLogo to="/">
              <MobileLogoImage src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/logo-6731.png?alt=media&token=0cb4880a-9733-4af8-8dbb-6f45782fd84c" />
            </MobileLogo>
            <MobileSearchWrapper>
              <SearchOutlined style={{ fontSize: '17px' }} />
            </MobileSearchWrapper>
          </MobileMenuBar>
        </MobileMenu>
        {isShowMobileMenu && (
          <MobileMenuWrapper id="mobile_header_menu">
            <List
              size="small"
              header={
                <Bounce top>
                  <div style={{ textAlign: 'center' }}>Menu</div>
                </Bounce>
              }
              bordered
              dataSource={SiteMapInNav}
              renderItem={item => (
                <Roll left cascade>
                  <List.Item
                    onClick={toggleMobileMenu}
                    style={{ justifyContent: 'center' }}
                  >
                    <_NavLink to={item.path}>{item.name}</_NavLink>
                  </List.Item>
                </Roll>
              )}
            />
          </MobileMenuWrapper>
        )}
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export const ComponentAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

const MobileMenuWrapper = styled.div``;

const MobileSearchWrapper = styled.div`
  position: relative;
`;

const MobileLogoImage = styled.img`
  opacity: 1;
  transition: opacity 1s;
  max-width: 100%;
  height: auto;
  vertical-align: top;
  vertical-align: middle;
  border-style: none;
`;

const MobileLogo = styled(Link)`
  position: relative;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;

  &:before {
    left: -5%;
    animation: light-left 2.5s infinite alternate linear;
  }
  &:after {
    right: -5%;
    animation: light-right 2.5s infinite alternate linear;
  }
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
`;

const _Hamburger = styled.div`
  display: block;
  width: 30px;
  height: 23px;
  position: relative;

  outline: none;
  padding: 0px;

  color: black;
  text-decoration: none;
  background-color: transparent;
`;

const MobileMenuBar = styled.div`
  padding: 0px 10px;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const MobileMenu = styled.div`
  display: block;
  height: 70px;
  z-index: 10;
  background: #fff;
  position: relative;
  line-height: normal;
`;

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
  background-color: transparent;
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
  background-color: #f1f3f4;
  border-radius: 20px;
  align-items: center !important;
  justify-content: space-between !important;
  display: flex !important;
`;

const _NavLink = styled(NavLink)`
  display: block;
  position: relative;
  color: #333;
  padding: 0 15px;
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

  &:hover {
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

const MenuWrapper = styled.div`
  background-color: #fff;
  padding: 13px 0;
`;
const DeskTopMenu = styled.div`
  // max-width: 1200px;
  // margin: auto;
  // width: calc(100% - 20px);
  // align-items: center !important;
  // justify-content: space-between !important;
  // display: flex;
`;
