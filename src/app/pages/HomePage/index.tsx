import { Col, Layout, Row, Space } from 'antd';
import {
  Content,
  Footer as FooterAnt,
  Header as HeaderAnt,
} from 'antd/lib/layout/layout';
import { Article } from 'app/components/Article/Loadable';
import { CarRentalServiceOverview } from 'app/components/CarRentalServiceOverview/Loadable';
import { CarTypeItem } from 'app/components/CarTypeItem';
import { CategoryItemTitle } from 'app/components/CategoryItemTitle';
import { Footer } from 'app/components/Footer/Loadable';
import { GoogleMapExtenstion } from 'app/components/GoogleMapExtenstion/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { ProcedureItem } from 'app/components/ProcedureItem';
import { ProcedureOverview } from 'app/components/ProcedureOverview/Loadable';
import { ServiceItem } from 'app/components/ServiceItem';
import { SideBar } from 'app/components/SideBar/Loadable';
import { SlideShow } from 'app/components/SlideShow/Loadable';
import { MainLayout } from 'app/layouts';
import {
  CarTypeItemModal,
  ProcedureItemModal,
  ServiceItemModal,
  _LayoutProps,
} from 'app/models';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { styleVariables } from 'styles';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
const carTypeList: Array<CarTypeItemModal> = [
  {
    title: 'cho thuê xe 4 chỗ',
    description:
      'Xe 4 chổ tiêu biểu : Xe Mazda 3 đời mới 2022 màu trắng - Xe có nhiều tính năng hiện đại mà những xe đời cũ không có như: thắng tay điện tử, đèn sáng tự động ban đêm, gạt nước mưa tự động, ghế chỉnh điện, cảnh báo va chạm sau xe .v.v... - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo tốc độ, định vị google maps, điểu hòa ghế sau, dây kích bình, bơm xe mini .v.v... - Gọi để báo giá: hotline 0382936939 - 0902927936 Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi tiết',
    redirectUrl: '/',
    imageUrl:
      'http://xetulaitritin.com/thumbs/550x370x1/upload/news/z34053520846735a84ce25fc2f04b806661f708e35f638-9758.jpg',
  },
  {
    title: 'cho thuê xe 7 chỗ',
    description:
      'Xe 7 chổ tiêu biểu : Xe Xpander đời mới 2021 màu trắng - Khoang xe rộng rãi thích hợp đi du lịch đường dài cùng gia đình và bạn bè - Các tiện ích được trang bị đầy đủ: màn hình giải trí youtube, wifi sài thoải mái, camera hành trình có cảnh báo tốc độ, định vị google maps, điểu hòa ghế sau, bơm xe mini .v.v... - Gọi để báo giá: hotline 0382936939 - 0902927936 Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi tiết',
    redirectUrl: '/',
    imageUrl:
      'http://xetulaitritin.com/thumbs/550x370x1/upload/news/z3405348776361a39a0c86edd68c90b56a33199fbdd88b-2030.jpg',
  },
];

const procedureList: Array<ProcedureItemModal> = [
  {
    title: 'thủ tục đặt xe',
    imageUrl:
      'http://xetulaitritin.com/thumbs/232x232x1/upload/news/thue-xe-tu-lai-1143.jpg',
    redirectUrl: '/',
  },
  {
    title: 'giao nhận xe',
    imageUrl:
      'http://xetulaitritin.com/thumbs/232x232x1/upload/news/thue-xe-tu-lai-phu-quoc-3-11630852841-2989.jpg',
    redirectUrl: '/',
  },
  {
    title: 'trải nghiệm xe',
    imageUrl:
      'http://xetulaitritin.com/thumbs/232x232x1/upload/news/thu-tuc-thue-xe-tu-lai-tai-da-nang-8-3316.jpg',
    redirectUrl: '/',
  },
  {
    title: 'kết thúc',
    imageUrl:
      'http://xetulaitritin.com/thumbs/232x232x1/upload/news/cho-thue-xe-2693.jpg',
    redirectUrl: '/',
  },
];

const renderProcedureList = procedureList.map((item, index) => (
  <Col>{ProcedureItem(item)}</Col>
));

const renderCarTypeList = carTypeList.map((item, index) => (
  <Slide bottom>{CarTypeItem(item, index)}</Slide>
));

const ServiceItems: Array<ServiceItemModal> = [
  {
    imageUrl:
      'http://xetulaitritin.com/thumbs/576x300x1/upload/news/z340534869004776aec2e23062d0c162d372845fde8868-7783.jpg',
    title: 'CHO THUÊ XE TỰ LÁI',
    redirectUrl: '/',
  },
  {
    imageUrl:
      'http://xetulaitritin.com/thumbs/576x300x1/upload/news/capture-8099.png',
    title: 'CHO THUÊ XE CÓ TÀI',
    redirectUrl: '/',
  },
  {
    imageUrl:
      'http://xetulaitritin.com/thumbs/576x300x1/upload/news/capture-6695.png',
    title: 'NHẬN KÝ GỬI XE',
    redirectUrl: '/',
  },
  {
    imageUrl:
      'http://xetulaitritin.com/thumbs/576x300x1/upload/news/thue-xe-hoa-thu-dau-mot-6714.png',
    title: 'CHO THUÊ XE HOA',
    redirectUrl: '/',
  },
];

const renderServiceItem = ServiceItems.map((item, index) => (
  <Col sm={12}>
    <Rotate bottom right>
      {ServiceItem(item, index)}
    </Rotate>
  </Col>
));

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Row justify="center">
        <Col sm={18}>
          <Row justify="center" align="middle">
            <Col sm={24}>
              <p
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
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <CarTypeWrapper>
        <Row justify="center">
          <Col sm={18}>
            <Row justify="center">
              <Col>
                {CategoryItemTitle('Loại xe', 'Cho thuê các dòng xe đời mới')}
              </Col>
            </Row>
            <Row>{renderCarTypeList}</Row>
          </Col>
        </Row>
      </CarTypeWrapper>

      <ProcedureWrapper>
        <Row justify="center">
          <Col sm={18}>
            <Row justify="center">
              <Col>
                {CategoryItemTitle(
                  'thủ tục đặt xe',
                  'Cho thuê các dòng xe đời mới',
                )}
              </Col>
            </Row>
            <Row justify="space-between">{renderProcedureList}</Row>
          </Col>
        </Row>
      </ProcedureWrapper>

      <ServiceWrapper>
        <Row justify="center">
          <Col sm={18}>
            <Row justify="center">
              <Col>
                {CategoryItemTitle(
                  'dịch vụ cho thuê xe',
                  'Cho thuê các dòng xe đời mới',
                )}
              </Col>
            </Row>
            <Row justify="center">
              <Col sm={18}>
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
  background-image: url(http://xetulaitritin.com/assets/images/bg-thutuc.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const CarTypeWrapper = styled.div`
  background-image: url(http://xetulaitritin.com/assets/images/bg-dichvu.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
