import { Layout } from 'antd';
import {
  Content,
  Footer as FooterAnt,
  Header as HeaderAnt,
} from 'antd/lib/layout/layout';
import { Article } from 'app/components/Article/Loadable';
import { CarRentalServiceOverview } from 'app/components/CarRentalServiceOverview/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { GoogleMapExtenstion } from 'app/components/GoogleMapExtenstion/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { ProcedureOverview } from 'app/components/ProcedureOverview/Loadable';
import { SideBar } from 'app/components/SideBar/Loadable';
import { SlideShow } from 'app/components/SlideShow/Loadable';
import { MainLayout } from 'app/layouts';
import { _LayoutProps } from 'app/models';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      this is home page
    </>
  );
}
