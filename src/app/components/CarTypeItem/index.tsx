/**
 *
 * CarTypeItem
 *
 */
import { Col, Row } from 'antd';
import { CarTypeItemModal } from 'app/models';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';
import { MobilScreenSize } from 'styles/commons';
export const CarTypeItem = (item: CarTypeItemModal) => {
  const { description, redirectUrl, imageUrl, title, index } = item;
  const isMobileScreen = useMediaQuery(MobilScreenSize);
  return (
    <Row justify="center" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
      <Col md={24} sm={24}>
        <CarTypeItemWrapper>
          <Row justify="space-between" gutter={[16, 16]}>
            <Col
              md={24}
              xs={24}
              sm={10}
              xl={12}
              order={
                !isMobileScreen && index != undefined && index % 2 === 0 ? 0 : 1
              }
            >
              <ImageWrapper to={redirectUrl}>
                <_Image src={imageUrl} />
              </ImageWrapper>
            </Col>
            <Col
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              xs={24}
              sm={13}
              md={24}
              xl={11}
            >
              <div>
                <div>
                  <Link to={redirectUrl}>
                    <Title>{title}</Title>
                  </Link>
                </div>
                <Description>{description}</Description>
                <RedirectButton to={redirectUrl}>Xem thêm</RedirectButton>
              </div>
            </Col>
          </Row>
        </CarTypeItemWrapper>
      </Col>
    </Row>
  );
};

const Title = styled.h1`
  position: relative;
  padding: 0;
  margin: 0 0 1rem 0;
  font-family: 'Raleway', sans-serif;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 13px;
  width: fit-content;

  &:before {
    background-color: #c50000;
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
  }

  &:after {
    background-color: #c50000;
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`;

const RedirectButton = styled(Link)`
  width: 130px;
  height: 35px;
  border: 1px solid ${styleVariables.BACKGROUND_COLOR};
  background-color: #fff;
  border-radius: 30px;
  color: #000;
  font-size: 15px;

  transition: 0.4s;

  text-decoration: none !important;
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
  outline: none;
  padding: 0px;
  pointer-events: auto;

  &:hover {
    color: #000;
    letter-spacing: 2px;
  }
`;

const Description = styled.p`
  -webkit-line-clamp: 7;
  color: #333333;
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const CarTypeItemWrapper = styled.div`
  @media (max-width: 576px) {
    padding: 3px 5px;
  }
`;
const ImageWrapper = styled(Link)`
  overflow: hidden;
  display: block;

  &::after {
    content: '';
  left: 10px;
  right: -2px;
  bottom: 10px;
  top: -10px;

  border: 2px solid ${styleVariables.BACKGROUND_COLOR};
  position: absolute;

  @media (max-width: 576px){
    border: none;
  }
  
`;

const _Image = styled.img`
  transform: scale(1, 1);
  opacity: 1;
  width: 100% !important;

  max-width: 100%;
  height: auto;
  vertical-align: top;

  position: relative;
  z-index: 1;
  transition: ${styleVariables.TRANSITION};

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
