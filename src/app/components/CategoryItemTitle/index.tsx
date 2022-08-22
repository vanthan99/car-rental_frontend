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
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 0;
`;
const Description = styled.p`
  text-align: center;
  color: #333333;
  font-weight: 400;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/bg-title.png?alt=media&token=ae9b1d09-ac92-493d-811c-aa589fa95888);

  background-repeat: no-repeat;
  background-position: bottom center;
  padding-bottom: 20px;
  margin-bottom: 1.5rem;
  margin-top: 0;
`;
