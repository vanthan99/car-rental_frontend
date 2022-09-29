import {
  CarTypeItemModal,
  ProcedureItemModal,
  ServiceItemModal,
} from 'app/models';
import React from 'react';
export const CarTypeListData: Array<CarTypeItemModal> = [
  {
    title: 'Cho Thuê Xe Tự Lái 5 Chỗ VINFAT',
    description: (
      <>
        <span>
          Xe 5 chổ tiêu biểu : Xe cho thuê Đông Hà Fadil Vinfat đời mới 2021 màu
          đỏ
        </span>
        <br />
        <span>
          - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo tốc
          độ, định vị google maps, nghe nhạc online .v.v...{' '}
        </span>
        <br />
        <span>- Gọi để báo giá: hotline 03 886 85 886</span>
        <br />
        <span>
          - Ngoài ra chúng tôi còn các dòng xe khác xin liên hệ để biết thêm chi
          tiết
        </span>
      </>
    ),
    redirectUrl: '/1',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/E3890532-35AB-4EE3-9E1C-71F9F7DFFC06.jpeg?alt=media&token=77d671ec-2f26-4c5c-b5de-d57c57fb77a1',
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
          - Các tiện ích được trang bị đầy đủ: camera hành trình có cảnh báo tốc
          độ, định vị google maps, nghe nhạc online .v.v...{' '}
        </span>
        <br />
        <span>- Gọi để báo giá: hotline 03 886 85 886</span>
      </>
    ),
    redirectUrl: '/2',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/2E7AB002-EC92-4852-92B7-7A59111826DF.jpeg?alt=media&token=5ceedffa-7afc-48b7-b0e6-3898245991eb',
  },
];

export const ProcedureListData: Array<ProcedureItemModal> = [
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

export const ServiceListData: Array<ServiceItemModal> = [
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

export const HelmetData = {
  defaultTitle: 'Cho thuê xe ô tô Đông Hà - Quảng Trị',
  titleTemplate: '%s - Cho thuê xe ô tô Đông Hà - Quảng Trị',
};
