/**
 *
 * TitleMain
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

interface Props {
  name: string;
}

export function TitleMain(props: Props) {
  return <Title>{props.name}</Title>;
}

const Title = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  text-transform: uppercase;
  color: ${styleVariables.TEXT_COLOR_BLACK};
  font-weight: 800;
  font-size: 23px;
`;
