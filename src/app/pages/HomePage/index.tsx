import { Carousel, Col, Image, Row } from 'antd';
import { CarTypeItem } from 'app/components/CarTypeItem';
import { CategoryItemTitle } from 'app/components/CategoryItemTitle';
import { ProcedureItem } from 'app/components/ProcedureItem';
import { ServiceItem } from 'app/components/ServiceItem';
import { SlideShow } from 'app/components/SlideShow/Loadable';
import {
  CarTypeListData,
  ProcedureListData,
  ServiceListData,
} from 'app/DataInitial';
import { SiteMap } from 'app/models';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import { styleVariables } from 'styles';
import { MobilScreenSize } from 'styles/commons';
import Slider from 'react-slick';

const renderProcedureList = ProcedureListData.map((item, index) => (
  <ProcedureItem {...item} key={index} />
));

const renderCarTypeList = CarTypeListData.map((item, index) => (
  <Slide key={index} bottom>
    <CarTypeItem {...item} index={index} />
  </Slide>
));

const renderServiceItem = ServiceListData.map((item, index) => (
  <Col key={index} sm={12}>
    <Rotate bottom right>
      {ServiceItem(item, index)}
    </Rotate>
  </Col>
));

export function HomePage() {
  const isMobileScreen = useMediaQuery(MobilScreenSize);
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: isMobileScreen ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <>
      <Helmet>
        <title>{SiteMap.HOME.name}</title>
      </Helmet>
      <Row justify="center">
        <Col lg={23} xl={23} xxl={18}>
          <Row justify="center" align="middle">
            <Col sm={24}>
              <SlideShow />
            </Col>
          </Row>
        </Col>
      </Row>

      <CarTypeWrapper>
        <Row justify="center">
          <Col lg={23} xl={23} xxl={18}>
            <Row justify="center">
              <Fade bottom>
                <Col>
                  <CategoryItemTitle
                    title="loại xe"
                    description="Cho thuê các dòng xe đời mới"
                    textColorDark
                  />
                </Col>
              </Fade>
            </Row>
            <Row justify="center">
              <Col xs={23} md={23} xl={24}>
                {renderCarTypeList}
              </Col>
            </Row>
          </Col>
        </Row>
      </CarTypeWrapper>

      <ProcedureWrapper>
        <Row justify="center">
          <Col xs={23} md={23} lg={23} xl={23} xxl={18}>
            <Row justify="center">
              <Fade bottom>
                <Col>
                  <CategoryItemTitle
                    title="thủ tục đặt xe"
                    description="Cho thuê các dòng xe đời mới"
                  />
                </Col>
              </Fade>
            </Row>
            <Row justify="center" gutter={[16, 16]}>
              <Col>
                <Slider {...slickSettings}>{renderProcedureList}</Slider>
              </Col>
            </Row>
          </Col>
        </Row>
      </ProcedureWrapper>

      <ServiceWrapper>
        <Row justify="center">
          <Col xs={23} md={23} xl={23} xxl={18}>
            <Row justify="center">
              <Fade bottom>
                <Col>
                  <CategoryItemTitle
                    title="dịch vụ cho thuê xe"
                    description="Cho thuê các dòng xe đời mới"
                    textColorDark
                    iconColorDark
                  />
                </Col>
              </Fade>
            </Row>
            <Row justify="center">
              <Col>
                <Row gutter={[16, 16]}>{renderServiceItem}</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </ServiceWrapper>
    </>
  );
}
const ServiceWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR3};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
const ProcedureWrapper = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/bg-thutuc.jpg?alt=media&token=8ba62de0-63c5-4dbe-ad70-52543aed2943);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const CarTypeWrapper = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/bg-dichvu.jpg?alt=media&token=c2a87a33-cfbf-4104-84df-73c55fa0f056);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
