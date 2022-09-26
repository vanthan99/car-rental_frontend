/**
 *
 * ServicePage
 *
 */
import { Col, Row } from 'antd';
import { ServiceItem } from 'app/components/ServiceItem';
import { TitleMain } from 'app/components/TitleMain';
import { ServiceListData } from 'app/DataInitial';
import React from 'react';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

export function ServicePage() {
  const renderServiceItem = ServiceListData.map((item, index) => (
    <Col key={index} sm={12}>
      {ServiceItem(item, index)}
    </Col>
  ));

  return (
    <ServicePageWrapper>
      <TitleMain name="DỊCH VỤ" />
      <Row justify="center">
        <Col xs={23} xl={23} xxl={18}>
          <Row gutter={[16, 16]}>{renderServiceItem}</Row>
        </Col>
      </Row>
    </ServicePageWrapper>
  );
}

const ServicePageWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR3};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
