/**
 *
 * CarTypePage
 *
 */
import { Col, Row } from 'antd';
import { CarTypeItem } from 'app/components/CarTypeItem';
import { TitleMain } from 'app/components/TitleMain';
import { CarTypeListData } from 'app/DataInitial';
import { SiteMap } from 'app/models';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

export function CarTypePage() {
  const renderCarTypeList = CarTypeListData.map((item, index) => (
    <CarTypeItem {...item} index={index} key={index} />
  ));
  return (
    <CarTypeWrapper>
      <Helmet>
        <title>{SiteMap.TYPE.name}</title>
      </Helmet>
      <Row justify="center">
        <Col xs={23} xl={23} xxl={18}>
          <TitleMain name="LOẠI XE" />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23} xl={23} xxl={18}>
          {renderCarTypeList}
        </Col>
      </Row>
    </CarTypeWrapper>
  );
}

const CarTypeWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR_CREAM};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
