/**
 *
 * CategoryItemTitle
 *
 */
import { Col, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';

export interface Props {}

export function CategoryItemTitle(title: string, description: string) {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}

const Title = styled.p`
  text-align: center;
  font-size: 30px;
  color: #010101;
  text-transform: uppercase;
  // font-weight: 900;
  margin-bottom: 0;
  margin-top: 0;
`;
const Description = styled.p`
  text-align: center;
  color: #333333;
  // font-weight: 400;
  background: url(http://xetulaitritin.com/assets/images/bg-title.png) no-repeat
    bottom center;
  padding-bottom: 20px;
  margin-bottom: 1.5rem;
  margin-top: 0;
`;
