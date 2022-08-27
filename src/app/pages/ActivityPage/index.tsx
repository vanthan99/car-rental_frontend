/**
 *
 * ActivityPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { styleVariables } from 'styles';
import { TitleMain } from 'app/components/TitleMain';
import { Col, Row, Space } from 'antd';
import { PostItemModal } from 'app/models';
import { PostItem } from 'app/components/PostItem';

const PostItems: Array<PostItemModal> = [
  {
    title:
      'Cho thuê xe tự lái 4 chổ 7 chổ Thủ Đầu Một Bình Dương Cho thuê xe tự lái 4 chổ 7 chổ Thủ Đầu Một Bình Dương',
    datePosted: new Date(),
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z340534869004776aec2e23062d0c162d372845fde8868-2498.jpg?alt=media&token=f27919fa-f28e-4f2f-a50f-92804c87fd11',
    description:
      'cho thuê xe tự lái mang đến là giá thành thấp, luôn phù hợp với mọi công việc, có đầy đủ các dòng xe cao cấp cho đến bình dân, phục vụ nhiều lĩnh vực khác nhau.',
  },
  {
    title: 'Cần đánh giá sâu sự lãng phí trong vụ kit test Việt Á',
    datePosted: new Date(),
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/2nguyenminhsontiengiang-1654158747677-1760.jpg?alt=media&token=59bed932-8bc2-4f07-938b-25923149f0be',
    description:
      'Dẫn số liệu trong thời gian 17 tháng được Bộ Y tế cấp phép lưu hành, Công ty Việt Á đạt doanh thu gần 4.000 tỷ đồng, đại biểu Quốc hội Nguyễn Minh Sơn gọi đây là sự lãng phí to lớn, thất thoát nghiêm trọng cho ngân sách và ảnh hưởng công tác phòng, chống dịch.',
  },
];

export function ActivityPage() {
  const renderPostItem = PostItems.map((item, index) => (
    <Col key={index} sm={9}>
      {PostItem(item)}
    </Col>
  ));
  return (
    <ActivityPageWrapper>
      <TitleMain name="HOẠT ĐỘNG" />
      <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* <Space> */}
        {renderPostItem}
        {/* </Space> */}
      </Row>
    </ActivityPageWrapper>
  );
}

const ActivityPageWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
