import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import React from 'react';
import styled from 'styled-components';
import __Breadcrumb from 'app/components/Breadcrumb';
import { Col, Row } from 'antd';
import { HotLine } from 'app/components/HotLine';
export function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <HotLine />
      <Footer />
    </>
  );
}

const MainWrapper = styled.main`
  // min-height: 500px;
`;
