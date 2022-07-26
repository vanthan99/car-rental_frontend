/**
 *
 * Footer
 *
 */
import { Col, Divider, List, Row, Typography } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';
import { MobilScreenSize } from 'styles/commons';
import CSS from 'csstype';
import { CompanyInfo } from 'app/models';
import { ComponentAlignCenter } from '../Header';
const { Paragraph, Text } = Typography;
export const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery(MobilScreenSize);
  const FooterWrapper = styled.div`
    width: 100%;
    min-height: 100px;
    background-image: url(${styleVariables.BACKGROUND_IMAGE_FOOTER});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    padding: 20px 0 0 0;
  `;

  const _NavLink = styled(NavLink)`
    color: ${styleVariables.TEXT_COLOR_WHITE};

    &:hover {
      color: ${styleVariables.BACKGROUND_COLOR};
    }
  `;

  const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
  `;

  const Li = styled.li`
    height: 2rem;
    border-bottom: 1px solid ${styleVariables.COLOR_GRAY};
    margin-bottom: 1rem;
    width: 50%;
  `;

  const CompanyInfoItem = styled.p`
    color: ${styleVariables.TEXT_COLOR_WHITE};
    font-size: 14px;
    margin: 1rem 0;
  `;

  const Title = styled.p`
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 900;
    color: ${styleVariables.BACKGROUND_COLOR};
  `;

  const ServiceTitle = styled.p`
    color: ${styleVariables.TEXT_COLOR_WHITE};
    text-transform: uppercase;
    font-size: 18px;
    position: relative;
    padding-bottom: 5px;

    &:after {
      content: '';
      width: 50px;
      height: 1px;
      background-color: ${styleVariables.BACKGROUND_COLOR};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `;

  const rowStyles: CSS.Properties = {
    padding: isMobile ? '0 10px' : 0,
  };
  return (
    <FooterWrapper>
      <Row justify="center" style={rowStyles}>
        <Col md={23} lg={23} xl={23} xxl={18}>
          <Row justify="space-between">
            <Col md={24} lg={12} xl={12}>
              <Title>{CompanyInfo.DESCRIPTION}</Title>
              <Paragraph>
                <CompanyInfoItem>
                  Địa chỉ: {CompanyInfo.ADDRESS}
                </CompanyInfoItem>
                <CompanyInfoItem>
                  SĐT: {CompanyInfo.PHONE_NUMBER}
                </CompanyInfoItem>
                <CompanyInfoItem>
                  Website: <Link to="/">{CompanyInfo.WEBSITE}</Link>
                </CompanyInfoItem>
              </Paragraph>
            </Col>
            <Col xs={23} md={24} lg={10} xl={12}>
              <ServiceTitle>DỊCH VỤ</ServiceTitle>
              <Ul>
                <Li>
                  <_NavLink to="/7">CHO THUÊ XE TỰ LÁI</_NavLink>
                </Li>
                <Li>
                  <_NavLink to="/8">CHO THUÊ XE CÓ TÀI</_NavLink>
                </Li>
                <Li>
                  <_NavLink to="/9">NHẬN KÝ GỬI XE</_NavLink>
                </Li>
                <Li>
                  <_NavLink to="/10">CHO THUÊ XE HOA</_NavLink>
                </Li>
              </Ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={rowStyles}
        justify="center"
        css={{
          backgroundColor: styleVariables.BACKGROUND_COLOR4,
          padding: '1rem 0',
        }}
      >
        <Col md={23} xl={23} xxl={18}>
          <Row>
            <Col md={24} xl={14} sm={12}>
              <CompanyInfoItem>{CompanyInfo.DESIGN_BY}</CompanyInfoItem>
            </Col>
            <Col md={24} xl={10} sm={6}>
              <Row justify="end">
                <Col>
                  <CompanyInfoItem>
                    Đang online: 1 Tổng truy cập: 13547
                  </CompanyInfoItem>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </FooterWrapper>
  );
};
