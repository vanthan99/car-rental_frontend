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
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z340534869004776aec2e23062d0c162d372845fde8868-7783.jpg?alt=media&token=c6827636-f377-4d6a-b6d9-11c47728c77c',
      title: 'CHO THUÊ XE TỰ LÁI',
      redirectUrl: '/',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/capture-8099.png?alt=media&token=31a7b93e-c49c-440e-a84b-8919b7ca7141',
      title: 'CHO THUÊ XE CÓ TÀI',
      redirectUrl: '/',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/capture-6695.png?alt=media&token=f72f1d34-ec49-43c1-a8ee-1b795281537e',
      title: 'NHẬN KÝ GỬI XE',
      redirectUrl: '/',
    },
    {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/thue-xe-hoa-thu-dau-mot-6714.png?alt=media&token=9f1ae422-8bc9-4b83-be7b-6ae95ca97833',
      title: 'CHO THUÊ XE HOA',
      redirectUrl: '/',
    },
  ];

  const renderServiceItem = ServiceItems.map((item, index) => (
    <Col key={index} sm={12}>
      {ServiceItem(item, index)}
    </Col>
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
