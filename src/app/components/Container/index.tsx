/**
 *
 * Container
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

export function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

const ContainerWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px @media (min-width: 476px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 992px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 1200px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 476px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 720px;
    max-width: 100%;
  }
  @media (min-width: 992px) {
    width: 960px;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    width: 1140px;
    max-width: 100%;
  }
  @media (min-width: 1400px) {
    width: 1340px;
    max-width: 100%;
  }
`;
