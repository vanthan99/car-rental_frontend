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
import { GoogleMapExtenstion } from './components/GoogleMapExtenstion/Loadable';
import { Footer } from './components/Footer';
import { AdminLayout } from './layouts';
import { AdminNotFoundPage } from './components/AdminNotFoundPage';

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
        <Route exact path={['/', '/about']}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={GoogleMapExtenstion} />
            </Switch>
          </MainLayout>
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
