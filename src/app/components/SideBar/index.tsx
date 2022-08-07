/**
 *
 * SideBar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Col, Row } from 'antd';

interface Props {}

export function SideBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <SideBarWrapper>
      <Row justify="space-around" align="middle">
        <Col sm={6}>Logo</Col>
        <Col sm={12}>Menu</Col>
        <Col sm={6}>Search Form</Col>
      </Row>
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div``;
