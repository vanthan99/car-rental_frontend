/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Col, PageHeader, Row } from 'antd';
import { Container } from '../Container';
import { Divider, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title, Paragraph, Text } = Typography;
export function Footer() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FooterWrapper>
      <Row justify="center">
        <Col sm={10}>
          <Title style={{ color: 'yellow' }}>CHO THUÊ XE TỰ LÁI TRÍ TÍN</Title>
          <Paragraph>
            <Paragraph>
              <Text>
                Địa Chỉ: D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu
                Một, Bình Dương
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>Hotline: 0382936939 - 0902927936</Text>
            </Paragraph>
            <Paragraph>
              <Text>Email:congtri1410@gmail.com</Text>
            </Paragraph>
            <Paragraph>
              <Text>
                Website: <Link to="/">http://xetulaitritin.com</Link>
              </Text>
            </Paragraph>
          </Paragraph>
        </Col>
        <Col sm={8}>
          <Title level={3} underline>
            DỊCH VỤ
          </Title>
          <Paragraph>
            <Paragraph>
              <Text>CHO THUÊ XE TỰ LÁI</Text>
            </Paragraph>
            <Paragraph>
              <Text>CHO THUÊ XE CÓ TÀI</Text>
            </Paragraph>
            <Paragraph>
              <Text>NHẬN KÝ GỬI XE</Text>
            </Paragraph>
            <Paragraph>
              <Text>CHO THUÊ XE HOA</Text>
            </Paragraph>
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={12}>
          <Text>
            © 2022 CHO THUÊ XE TỰ LÁI TRÍ TÍN - KHANG TRẦN THIẾT KẾ WEBSITE
            070595 3638. Designed by Nina.vn
          </Text>
        </Col>
        <Col sm={6}>
          <Text>Đang online: 1 Tổng truy cập: 13547</Text>
        </Col>
      </Row>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #000000bd;
  padding: 20px 0px;
`;
