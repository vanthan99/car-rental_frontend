import { ReactComponentElement, ReactElement } from 'react';
import { EnumMember, EnumType } from 'typescript';

export interface _LayoutProps {
  childElement?: ReactElement;
  googleMapExtendsion?: ReactElement;
}

export interface PostItemModal {
  title: string;
  datePosted: Date;
  description: string;
  imageUrl: string;
}

export interface CarTypeItemModal {
  index?: number;
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
}

export interface ServiceItemModal {
  title: string;
  imageUrl: string;
  redirectUrl: string;
}

export interface ProcedureItemModal {
  imageUrl: string;
  title: string;
  redirectUrl: string;
}

export interface PostModal {
  id: string;
  title?: string;
  dateCreated?: Date;
  viewCount?: number;
  contentDecoder?: string;
}

export const SiteMap = {
  HOME: {
    path: '/',
    name: 'Trang Chủ',
  },

  ABOUT: {
    path: '/about',
    name: 'Giới Thiệu',
  },
  SERVICE: {
    path: '/service',
    name: 'Dịch Vụ',
  },
  TYPE: {
    path: '/type',
    name: 'Loại Xe',
  },
  ACTIVITY: {
    path: '/activity',
    name: 'Hoạt Động',
  },
  CONTACT: {
    path: '/contact',
    name: 'Liên Hệ',
  },
};

export const SiteMapArray = [
  {
    path: '/',
    name: 'Trang Chủ',
  },

  {
    path: '/about',
    name: 'Giới Thiệu',
  },
  {
    path: '/service',
    name: 'Dịch Vụ',
  },
  {
    path: '/type',
    name: 'Loại Xe',
  },
  {
    path: '/activity',
    name: 'Hoạt Động',
  },
  {
    path: '/contact',
    name: 'Liên Hệ',
  },
];

export const CompanyInfo = {
  ADDRESS: '30, Tôn Thất Tùng, Phường 5, thành phố Đông Hà, tỉnh Quảng Trị',
  PHONE_NUMBER: '03 886 85 886',
  WEBSITE: 'https://thueotoquangtri.com/',
  DESCRIPTION: 'CHO THUÊ XE Ô TÔ TỰ LÁI QUẢNG TRỊ',
  FACEBOOK_HOMEPAGE: 'https://www.facebook.com/lr.tuan.5',
};

// testing
export const PostList: Array<PostModal> = [
  {
    id: '1',
    title: 'cho thuê xe 4 chỗ',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '2',
    title: 'cho thuê xe 7 chỗ',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '3',
    title: 'thủ tục đặt xe',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '4',
    title: 'giao nhận xe',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '5',
    title: 'trải nghiệm xe',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '6',
    title: 'kết thúc',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },

  {
    id: '7',
    title: 'cho thuê xe tự lái',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '8',
    title: 'cho thuê xe có tài',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '9',
    title: 'nhận ký gửi xe',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
  {
    id: '10',
    title: 'cho thuê xe hoa',
    dateCreated: new Date(),
    viewCount: 120,
    contentDecoder: 'content is comming soon',
  },
];
