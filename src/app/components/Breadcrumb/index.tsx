/**
 *
 * Breadcrumb
 *
 */
import * as React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';
import { SiteMap, SiteMapArray } from 'app/models';

export default function _Breadcrumb() {
  const { HOME } = SiteMap;

  const { pathname } = useLocation();
  console.log('abc = ' + pathname);
  const found = SiteMapArray.find(item => item.path === pathname);

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to={HOME.path}>{HOME.name}</Link>
      </BreadcrumbItem>
      {found && (
        <BreadcrumbItem>
          <Link to={found.path}>{found.name}</Link>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

const CustomBreadcrumb = styled(Breadcrumb)`
  background-color: #eee;
`;

// #eee
