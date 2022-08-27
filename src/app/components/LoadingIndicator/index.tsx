/**
 *
 * LoadingIndicator
 *
 */
import { Col, Row, Spin } from 'antd';
import * as React from 'react';

export const LoadingIndicator = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100px' }}>
      <Col>
        <Spin tip="Loading..." />
      </Col>
    </Row>
  );
};
