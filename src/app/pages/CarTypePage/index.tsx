/**
 *
 * CarTypePage
 *
 */
import { Col, Row } from 'antd';
import { CarTypeItem } from 'app/components/CarTypeItem';
import { TitleMain } from 'app/components/TitleMain';
import { CarTypeItemModal } from 'app/models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

interface Props {}

export function CarTypePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const carTypeList: Array<CarTypeItemModal> = [
    {
      title: 'cho thuê xe 4 chỗ',
      description:
        'Xe 4 chổ tiêu biểu : Xe Mazda 3 đời mới 2022 màu trắng - Xe có nhiều tính năng hiện đại mà những xe đời cũ không có như: thắng tay điện tử, đèn sáng tự động ban đêm, gạt nước mưa tự động, ghế chỉnh điện, cảnh báo va chạm sau xe .v.v... - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo tốc độ, định vị google maps, điểu hòa ghế sau, dây kích bình, bơm xe mini .v.v... - Gọi để báo giá: hotline 0382936939 - 0902927936 Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi tiết',
      redirectUrl: '/1',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z34053520846735a84ce25fc2f04b806661f708e35f638-9758.jpg?alt=media&token=34f8afff-8caa-4d1b-a25b-0e7911387fe2',
    },
    {
      title: 'cho thuê xe 7 chỗ',
      description:
        'Xe 7 chổ tiêu biểu : Xe Xpander đời mới 2021 màu trắng - Khoang xe rộng rãi thích hợp đi du lịch đường dài cùng gia đình và bạn bè - Các tiện ích được trang bị đầy đủ: màn hình giải trí youtube, wifi sài thoải mái, camera hành trình có cảnh báo tốc độ, định vị google maps, điểu hòa ghế sau, bơm xe mini .v.v... - Gọi để báo giá: hotline 0382936939 - 0902927936 Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi tiết',
      redirectUrl: '/2',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z3405348776361_a39a0c86edd68c90b56a33199fbdd88b.jpg?alt=media&token=b7068a78-d3c6-4ca4-aea6-6e69cd700a49',
    },
  ];

  const renderCarTypeList = carTypeList.map((item, index) => (
    <CarTypeItem {...item} index={index} key={index} />
  ));
  return (
    <CarTypeWrapper>
      <TitleMain name="LOẠI XE" />
      <Row justify="center">
        <Col sm={18} md={23}>
          {renderCarTypeList}
        </Col>
      </Row>
    </CarTypeWrapper>
  );
}

const CarTypeWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR_CREAM};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
