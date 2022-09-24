import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import React from 'react';
import styled from 'styled-components';
import __Breadcrumb from 'app/components/Breadcrumb';
import { Col, Row } from 'antd';
export function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled.main`
  // min-height: 500px;
`;
