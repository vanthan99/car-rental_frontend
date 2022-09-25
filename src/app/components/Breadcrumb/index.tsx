/**
 *
 * Breadcrumb
 *
 */
import { Breadcrumb, Col, Row } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { SiteMap, SiteMapArray } from 'app/models';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function _Breadcrumb() {
  const { HOME } = SiteMap;

  const { pathname } = useLocation();
  const found = SiteMapArray.find(item => item.path === pathname);

  return (
    <Row justify="center" align="middle" style={{ margin: '1rem 0' }}>
      <Col
        xl={23}
        xxl={18}
        style={{
          backgroundColor: '#eee',
          height: '3rem',
          alignItems: 'center',
          display: 'flex',
          padding: '0 1rem',
        }}
      >
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
      </Col>
    </Row>
  );
}
