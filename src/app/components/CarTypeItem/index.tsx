/**
 *
 * CarTypeItem
 *
 */
import { Col, Row } from 'antd';
import { CarTypeItemModal } from 'app/models';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

export function CarTypeItem(item: CarTypeItemModal, index: number) {
  console.log(index);

  const { description, redirectUrl, imageUrl, title } = item;
  return (
    <Row justify="center" style={{ marginTop: '2rem' }} key={index}>
      <Col sm={18}>
        <CarTypeItemWrapper>
          <Row justify="space-between">
            <Col sm={10} order={index % 2 === 0 ? 0 : 1}>
              <ImageWrapper to={redirectUrl}>
                <_Image src={imageUrl} />
              </ImageWrapper>
            </Col>
            <Col sm={13}>
              <CarTypeItemTitle>
                <CarTypeItemTitleText to={redirectUrl}>
                  {title}
                </CarTypeItemTitleText>
              </CarTypeItemTitle>
              <Description>{description}</Description>
              <RedirectButton to={redirectUrl}>Xem thêm</RedirectButton>
            </Col>
          </Row>
        </CarTypeItemWrapper>
      </Col>
    </Row>
  );
}

const RedirectButton = styled(Link)`
  width: 130px;
  height: 35px;
  border: 1px solid ${styleVariables.BACKGROUND_COLOR};
  background: #fff;
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
  -webkit-line-clamp: 3;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const CarTypeItemTitleText = styled(Link)`
  color: #fff;
  width: 256px;
  height: 49px;
  background: url(http://xetulaitritin.com/assets/images/title-dichvu-1.png)
    no-repeat left center;
  padding-left: 30px;
  font-size: 18px;
  text-transform: uppercase;
  // font-weight: 900;
  display: flex;
  align-items: center;
  padding-bottom: 9px;
  position: relative;
  z-index: 1;

  &:hover {
    color: #fff;
  }
`;
const CarTypeItemTitle = styled.h3`
  position: relative;
  margin-bottom: 1rem;

  font-size: 1.75rem;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    left: 150px;

    background: url(http://xetulaitritin.com/assets/images/bg-title-dichvu.png);
  }
`;
const CarTypeItemWrapper = styled.div``;
const ImageWrapper = styled(Link)`
  overflow: hidden;
  display: block;

  &::after {
    content: '';
  left: 10px;
  right: -10px;
  bottom: 10px;
  top: -10px;

  border: 2px solid ${styleVariables.BACKGROUND_COLOR};
  position: absolute;
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