import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import React from 'react';
export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
