/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { MainLayout } from './layouts/MainLayout';
import { GoogleMapExtenstion } from './components/GoogleMapExtenstion';
import { Footer } from './components/Footer';
import { AdminLayout } from './layouts';
import { AdminNotFoundPage } from './components/AdminNotFoundPage';
import { AboutPage } from './pages/AboutPage/Loadable';
import { ServicePage } from './pages/ServicePage/Loadable';
import { CarTypePage } from './pages/CarTypePage/Loadable';
import { ActivityPage } from './pages/ActivityPage/Loadable';
import { ContactPage } from './pages/ContactPage/Loadable';
import { BackTop } from 'antd';
import { Article } from './components/Article/Loadable';
import { ArticlePage } from './pages/ArticlePage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Thân Test"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path={['/admin*']}>
          <AdminLayout>
            <Switch>
              <Route exact path="/admin" component={Footer} />
              <Route component={AdminNotFoundPage} />
            </Switch>
          </AdminLayout>
        </Route>
        {/* <Route component={NotFoundPage} /> */}
        <Route>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/test" component={GoogleMapExtenstion} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/service" component={ServicePage} />
              <Route exact path="/type" component={CarTypePage} />
              <Route exact path="/activity" component={ActivityPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/:articleName" component={ArticlePage} />
            </Switch>
          </MainLayout>
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <BackTop />
    </BrowserRouter>
  );
}
