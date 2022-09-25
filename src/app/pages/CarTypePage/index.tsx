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
      title: 'Cho Thuê Xe Tự Lái 5 Chỗ VINFAT',
      description: (
        <>
          <span>
            Xe 5 chổ tiêu biểu : Xe cho thuê Đông Hà Fadil Vinfat đời mới 2021
            màu đỏ
          </span>
          <br />
          <span>
            - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo
            tốc độ, định vị google maps, nghe nhạc online .v.v...{' '}
          </span>
          <br />
          <span>- Gọi để báo giá: hotline 03 886 85 886</span>
          <br />
          <span>
            - Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm
            chi tiết
          </span>
        </>
      ),
      redirectUrl: '/1',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z34053520846735a84ce25fc2f04b806661f708e35f638-9758.jpg?alt=media&token=34f8afff-8caa-4d1b-a25b-0e7911387fe2',
    },
    {
      title: 'Cho Thuê Xe Tự Lái 5 Chỗ MITSUBISHI',
      description: (
        <>
          <span>
            Xe 5 chổ tiêu biểu : Xe xe cho thuê Đông Hà Quảng Trị Mitsubishi
            Attrage đời mới 2020 màu xanh rêu
          </span>
          <br />
          <span>
            - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo
            tốc độ, định vị google maps, nghe nhạc online .v.v...{' '}
          </span>
          <br />
          <span>- Gọi để báo giá: hotline 03 886 85 886</span>
        </>
      ),
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
      <Row justify="center">
        <Col sm={18}>
          <TitleMain name="LOẠI XE" />
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={18}>{renderCarTypeList}</Col>
      </Row>
    </CarTypeWrapper>
  );
}

const CarTypeWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR_CREAM};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
