import { Col, Row } from 'antd';
import { CarTypeItem } from 'app/components/CarTypeItem';
import { ProcedureItem } from 'app/components/ProcedureItem';
import { ServiceItem } from 'app/components/ServiceItem';
import {
  CarTypeItemModal,
  ProcedureItemModal,
  ServiceItemModal,
} from 'app/models';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import { styleVariables } from 'styles';
import Fade from 'react-reveal/Fade';
import { CategoryItemTitle } from 'app/components/CategoryItemTitle';
import Slider from 'react-slick';
import { MobilScreenSize } from 'styles/commons';
import { SlideShow } from 'app/components/SlideShow/Loadable';
const carTypeList: Array<CarTypeItemModal> = [
  {
    title: 'Cho Thuê Xe Tự Lái 5 Chỗ VINFAT',
    description:
      'Xe 5 chổ tiêu biểu : Xe cho thuê Đông Hà Fadil Vinfat đời mới 2021 màu đỏ \n - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo tốc độ, định vị google maps, nghe nhạc online .v.v... \n  - Gọi để báo giá: hotline 03 886 85 886 \n Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi tiết',
    redirectUrl: '/1',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z34053520846735a84ce25fc2f04b806661f708e35f638-9758.jpg?alt=media&token=34f8afff-8caa-4d1b-a25b-0e7911387fe2',
  },
  {
    title: 'Cho Thuê Xe Tự Lái 5 Chỗ MITSUBISHI',
    description:
      'Xe 5 chổ tiêu biểu : Xe xe cho thuê Đông Hà Quảng Trị Mitsubishi Attrage đời mới 2020 màu xanh rêu - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo tốc độ, định vị google maps, nghe nhạc online .v.v... - Gọi để báo giá: hotline 03 886 85 886 Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi tiết',
    redirectUrl: '/2',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z3405348776361_a39a0c86edd68c90b56a33199fbdd88b.jpg?alt=media&token=b7068a78-d3c6-4ca4-aea6-6e69cd700a49',
  },
];

const procedureList: Array<ProcedureItemModal> = [
  {
    title: 'thủ tục đặt xe',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/thue-xe-tu-lai-1143.jpg?alt=media&token=ef724c4d-5b2a-4865-ac4f-7d14537d6b32',
    redirectUrl: '/3',
  },
  {
    title: 'giao nhận xe',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/thue-xe-tu-lai-phu-quoc-3-11630852841-2989.jpg?alt=media&token=fb51904a-aec6-455a-844a-4cc6e9b5c718',
    redirectUrl: '/4',
  },
  {
    title: 'trải nghiệm xe',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/thu-tuc-thue-xe-tu-lai-tai-da-nang-8-3316.jpg?alt=media&token=3f457cb8-d357-4a82-92e4-0013ddd6b110',
    redirectUrl: '/5',
  },
  {
    title: 'kết thúc',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/cho-thue-xe-2693.jpg?alt=media&token=286bcb80-63db-4998-a3b9-75ded0a1c43d',
    redirectUrl: '/6',
  },
];

const renderProcedureList = procedureList.map((item, index) => (
  <ProcedureItem {...item} />
));

const renderCarTypeList = carTypeList.map((item, index) => (
  <Slide key={index} bottom>
    <CarTypeItem {...item} index={index} />
  </Slide>
));

const ServiceItems: Array<ServiceItemModal> = [
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z340534869004776aec2e23062d0c162d372845fde8868-7783.jpg?alt=media&token=c6827636-f377-4d6a-b6d9-11c47728c77c',
    title: 'CHO THUÊ XE TỰ LÁI',
    redirectUrl: '/7',
  },
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/capture-8099.png?alt=media&token=31a7b93e-c49c-440e-a84b-8919b7ca7141',
    title: 'CHO THUÊ XE CÓ TÀI',
    redirectUrl: '/8',
  },
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/capture-6695.png?alt=media&token=f72f1d34-ec49-43c1-a8ee-1b795281537e',
    title: 'NHẬN KÝ GỬI XE',
    redirectUrl: '/9',
  },
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/thue-xe-hoa-thu-dau-mot-6714.png?alt=media&token=9f1ae422-8bc9-4b83-be7b-6ae95ca97833',
    title: 'CHO THUÊ XE HOA',
    redirectUrl: '/10',
  },
];

const renderServiceItem = ServiceItems.map((item, index) => (
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
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Row justify="center">
        <Col xl={24}>
          <Row justify="center" align="middle">
            <Col sm={24}>
              {/* <p
                style={{
                  width: '100%',
                  height: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid black',
                }}
              >
                This is slider/banner
              </p> */}
              <SlideShow />
            </Col>
          </Row>
        </Col>
      </Row>

      <CarTypeWrapper>
        <Row justify="center">
          <Col xl={23} xxl={18}>
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
            <Row>{renderCarTypeList}</Row>
          </Col>
        </Row>
      </CarTypeWrapper>

      <ProcedureWrapper>
        <Row justify="center">
          <Col xl={23} xxl={18}>
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
          <Col xl={23} xxl={18}>
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
              <Col xl={23} xxl={18}>
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
  background-color: ${styleVariables.BACKGROUND_COLOR};
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
