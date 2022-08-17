/**
 *
 * Breadcrumb
 *
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';

export default function _Breadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/contact">Liên Hệ</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/activity">Hoạt động</a>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

const CustomBreadcrumb = styled(Breadcrumb)`
  background-color: #eee;
`;

// #eee
