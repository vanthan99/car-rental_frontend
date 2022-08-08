import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import React from 'react';
import styled from 'styled-components';
export function MainLayout({ children }) {
  console.log('abc');
  console.log();

  return (
    <>
      <Header />
      {/* <SideBar /> */}
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled.main`
  min-height: 500px;
`;
