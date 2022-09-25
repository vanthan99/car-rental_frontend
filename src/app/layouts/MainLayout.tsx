import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import React from 'react';
import styled from 'styled-components';
import __Breadcrumb from 'app/components/Breadcrumb';
import { Col, Row } from 'antd';
import { styleVariables } from 'styles';
import { HotLine } from 'app/components/HotLine';
export function MainLayout({ children }) {
  return (
    <MainLayoutWrapper>
      <Header />
      {/* <SideBar /> */}
      <Row justify="center" style={{ height: '2rem' }}>
        <Col sm={18}>
          <__Breadcrumb />
        </Col>
      </Row>
      <MainWrapper>{children}</MainWrapper>
      <Footer />
      <HotLine />
    </MainLayoutWrapper>
  );
}

const MainWrapper = styled.main`
  // min-height: 500px;
`;

const MainLayoutWrapper = styled.div``;
