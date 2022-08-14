/**
 *
 * Breadcrumb
 *
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb as _Breadcrumb } from 'antd';

const routes = [
  {
    path: '/',
    breadcrumbName: 'home',
  },
  {
    path: '/about',
    breadcrumbName: 'Giới thiệu',
  },
  {
    path: '/service',
    breadcrumbName: 'Dịch Vụ',
  },
  {
    path: '/type',
    breadcrumbName: 'Loại Xe',
  },
  {
    path: '/activity',
    breadcrumbName: 'Hoạt động',
  },
  {
    path: '/contact',
    breadcrumbName: 'Liên Hệ',
  },

  // {
  //   path: 'first',
  //   breadcrumbName: 'first',
  //   children: [
  //     {
  //       path: '/general',
  //       breadcrumbName: 'General',
  //     },
  //     {
  //       path: '/layout',
  //       breadcrumbName: 'Layout',
  //     },
  //     {
  //       path: '/navigation',
  //       breadcrumbName: 'Navigation',
  //     },
  //   ],
  // },
  // {
  //   path: 'second',
  //   breadcrumbName: 'second',
  // },
];

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

export function Breadcrumb() {
  return <_Breadcrumb itemRender={itemRender} routes={routes} />;
}
