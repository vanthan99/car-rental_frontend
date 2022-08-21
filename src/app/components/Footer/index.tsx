/**
 *
 * Footer
 *
 */
import { Col, Divider, List, Row, Typography } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';
const { Paragraph, Text } = Typography;
export function Footer() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

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
      background: ${styleVariables.BACKGROUND_COLOR};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `;
  return (
    <FooterWrapper>
      <Row justify="center">
        <Col sm={10}>
          <Title>CHO THUÊ XE TỰ LÁI TRÍ TÍN</Title>
          <Paragraph>
            <CompanyInfoItem>
              Địa Chỉ: D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu
              Một, Bình Dương
            </CompanyInfoItem>
            <CompanyInfoItem>Hotline: 0382936939 - 0902927936</CompanyInfoItem>
            <CompanyInfoItem>Email:congtri1410@gmail.com</CompanyInfoItem>
            <CompanyInfoItem>
              Website: <Link to="/">http://xetulaitritin.com</Link>
            </CompanyInfoItem>
          </Paragraph>
        </Col>
        <Col sm={8}>
          <ServiceTitle>DỊCH VỤ</ServiceTitle>
          <Ul>
            <Li>
              <_NavLink to="/">CHO THUÊ XE TỰ LÁI</_NavLink>
            </Li>
            <Li>
              <_NavLink to="/">CHO THUÊ XE CÓ TÀI</_NavLink>
            </Li>
            <Li>
              <_NavLink to="/">NHẬN KÝ GỬI XE</_NavLink>
            </Li>
            <Li>
              <_NavLink to="/">CHO THUÊ XE HOA</_NavLink>
            </Li>
          </Ul>
        </Col>
      </Row>
      <Row
        justify="center"
        css={{
          backgroundColor: styleVariables.BACKGROUND_COLOR3,
          padding: '1rem 0',
        }}
      >
        <Col sm={12}>
          <CompanyInfoItem>
            © 2022 CHO THUÊ XE TỰ LÁI TRÍ TÍN - KHANG TRẦN THIẾT KẾ WEBSITE
            070595 3638. Designed by Nina.vn
          </CompanyInfoItem>
        </Col>
        <Col sm={6}>
          <Row justify="end">
            <Col>
              <CompanyInfoItem>
                Đang online: 1 Tổng truy cập: 13547
              </CompanyInfoItem>
            </Col>
          </Row>
        </Col>
      </Row>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  background: url(${styleVariables.BACKGROUND_IMAGE_FOOTER}) no-repeat top
    center;
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
`;
