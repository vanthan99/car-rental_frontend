/**
 *
 * ServiceItem
 *
 */
import { Image, Row } from 'antd';
import { ServiceItemModal } from 'app/models';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

export function ServiceItem(item: ServiceItemModal, index: number) {
  const { imageUrl, redirectUrl, title } = item;
  return (
    <ServiceItemWrapper>
      <LinkWrapper>
        <ImageWrapper to={redirectUrl}>
          <_Image src={imageUrl} alt="" />
        </ImageWrapper>
      </LinkWrapper>
      <Title to={redirectUrl}>{title}</Title>
    </ServiceItemWrapper>
  );
}

const ServiceItemWrapper = styled.div`
  opacity: 1;
  -webkit-transform: none;
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled(Link)`
  color: #000;
  font-size: 20px;
  text-transform: uppercase;
  // font-weight: 900;

  text-decoration: none !important;

  outline: none;
  padding: 0px;
`;
const ImageWrapper = styled(Link)`
  overflow: hidden;
  display: block;
  outline: none;
  padding: 0px;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
`;

const LinkWrapper = styled.p`
  padding: 7px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);

  margin-top: 0;
  margin-bottom: 1rem;
`;

const _Image = styled.img`
  transform: scale(1, 1);
  transition: ${styleVariables.TRANSITION} ease-out;
  opacity: 1;
  width: 100% !important;
  max-width: 100%;
  height: auto;
  vertical-align: top;
  border-style: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
