/**
 *
 * CarTypePage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { styleVariables } from 'styles';
import { TitleMain } from 'app/components/TitleMain';
import { CarTypeItemModal } from 'app/models';
import { CarTypeItem } from 'app/components/CarTypeItem';

interface Props {}

export function CarTypePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
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

  const renderCarTypeList = carTypeList.map((item, index) =>
    CarTypeItem(item, index),
  );
  return (
    <CarTypeWrapper>
      <TitleMain name="LOẠI XE" />
      {renderCarTypeList}
    </CarTypeWrapper>
  );
}

const CarTypeWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR_CREAM};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
