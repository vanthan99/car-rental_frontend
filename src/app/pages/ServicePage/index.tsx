/**
 *
 * ServicePage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { styleVariables } from 'styles';
import { TitleMain } from 'app/components/TitleMain';
import { Col, Row } from 'antd';
import { ServiceItemModal } from 'app/models';
import { ServiceItem } from 'app/components/ServiceItem';

interface Props {}

export function ServicePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const ServiceItems: Array<ServiceItemModal> = [
    {
      imageUrl:
        'http://xetulaitritin.com/thumbs/576x300x1/upload/news/z340534869004776aec2e23062d0c162d372845fde8868-7783.jpg',
      title: 'CHO THUÊ XE TỰ LÁI',
      redirectUrl: '/',
    },
    {
      imageUrl:
        'http://xetulaitritin.com/thumbs/576x300x1/upload/news/capture-8099.png',
      title: 'CHO THUÊ XE CÓ TÀI',
      redirectUrl: '/',
    },
    {
      imageUrl:
        'http://xetulaitritin.com/thumbs/576x300x1/upload/news/capture-6695.png',
      title: 'NHẬN KÝ GỬI XE',
      redirectUrl: '/',
    },
    {
      imageUrl:
        'http://xetulaitritin.com/thumbs/576x300x1/upload/news/thue-xe-hoa-thu-dau-mot-6714.png',
      title: 'CHO THUÊ XE HOA',
      redirectUrl: '/',
    },
  ];

  const renderServiceItem = ServiceItems.map((item, index) => (
    <Col sm={12}>{ServiceItem(item, index)}</Col>
  ));

  return (
    <ServicePageWrapper>
      <TitleMain name="DỊCH VỤ" />
      <Row justify="center">
        <Col sm={18}>
          <Row gutter={[16, 16]}>{renderServiceItem}</Row>
        </Col>
      </Row>
    </ServicePageWrapper>
  );
}

const ServicePageWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
