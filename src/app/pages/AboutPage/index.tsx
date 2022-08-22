/**
 *
 * AboutPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { styleVariables } from 'styles';
import { TitleMain } from 'app/components/TitleMain';
import { Col, Image, Row } from 'antd';
import { Share } from 'app/components/Share';

interface Props {}

export function AboutPage() {
  return (
    <AboutPageWrapper>
      <TitleMain name="CHO THUÊ XE TỰ LÁI TRÍ TIN BÌNH DƯƠNG" />
      <Row justify="center">
        <Col sm={18}>
          <Content>
            <div className="content-main w-clear">
              <h1>
                <strong>
                  <span style={{ fontSize: '20px' }}>
                    Giới thiệu dịch vụ cho thuê xe tự lái Trí Tín&nbsp;
                  </span>
                </strong>
              </h1>
              <h2>
                <strong>
                  <span style={{ fontSize: '18px' }}>
                    Cho thuê xe tự lái bình dương&nbsp;
                  </span>
                </strong>
              </h2>
              <p>
                <span style={{ fontSize: '16px' }}>
                  Dịch vụ cho thuê xe ô tô tự lái trí Tin Bình Dương khu vực Thủ
                  Dầu Một, Bến Cát, Tân Uyên&nbsp;đặc biệt là cho thuê tự
                  lái&nbsp;gồm 4 chỗ và 7 chỗ
                </span>
              </p>
              <p>
                <span style={{ fontSize: '16px' }}>
                  Được biết đến là hình thức chỉ thuê xe&nbsp;không cần thuê
                  người lái, nhằm đảm bảo tính riêng tư và không bị
                  ràng&nbsp;buộc bởi tài xế, giúp người thuê có những giây phúc
                  tự do di&nbsp;chuyển cùng gia đình, người thân bạn bè và đối
                  tác.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: '16px' }}>
                  Bạn đang cần dịch vụ&nbsp;thuê xe tự&nbsp;lái&nbsp;để đưa gia
                  đình, người thân đi du lịch trong
                  dịp&nbsp;nghỉ&nbsp;lễ&nbsp;dài&nbsp;ngày. bạn có thể chủ động
                  trong quá trình công tác, cùng đồng nghiệp.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: '16px' }}>
                  Dịch vụ cho thuê xe ô tô&nbsp;tự lái Trí Tín xẽ mong đáp ứng
                  được những mong muốn và yêu cầu của bạn giúp bạn có 1 chuyến
                  đi thật thoải mái và tiết kiệm&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: '16px' }}>&nbsp;</span>
                <Image
                  alt="Cho thuê xe tự lái Trí Tín "
                  src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/Di%CC%A3ch-vu%CC%A3-cho-thue%CC%82-xe-tu%CC%9B%CC%A3-la%CC%81i-TPHCM-1400x725.jpg?alt=media&token=ffd29eb9-56bf-48dd-9806-b60716e6f273"
                />
              </p>
              <h3 style={{ textAlign: 'center' }}>
                <em>
                  <span style={{ fontSize: '14px' }}>
                    Thuê xe tự lái Thủ dầu một&nbsp;
                  </span>
                </em>
              </h3>
              <p>
                <span style={{ fontSize: '16px' }}>
                  -{' '}
                  <strong>
                    Giao xe tận nơi trong khu vực Thủ Dầu Một, Bến Cát, Tân Uyên
                  </strong>{' '}
                  và các điểm lân cận
                </span>
              </p>
              <p style={{ textAlign: 'center' }}>
                <Image
                  alt="Cho thuê xe tự lái Trí Tín "
                  src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/z3405348776361_a39a0c86edd68c90b56a33199fbdd88b.jpg?alt=media&token=b7068a78-d3c6-4ca4-aea6-6e69cd700a49"
                />
              </p>
              <p style={{ textAlign: 'center' }}>
                <em>
                  <strong>Hình ảnh cho thuê xe tự lái Bình Dương</strong>
                </em>
              </p>
              <p>
                <span style={{ fontSize: '16px' }}>
                  <strong>CHO THUÊ XE TỰ LÁI TRÍ TÍN</strong>&nbsp; là cái tên
                  được nhiều lượt truy cập nhất, cũng là cái tên hot nhất trong
                  ngành{' '}
                  <strong>cho thuê xe tự lái ở Thủ Dầu Một Bình Dương</strong>.
                  Sự uy tín minh bạch được&nbsp; nhiều du khách đón nhận và đồng
                  tình. Là nơi đáng để thuê xe khi cần xe ô tô đi lại.
                </span>
              </p>
              <p>
                <span style={{ fontSize: '16px' }}>
                  Các lĩnh vực chúng tôi cung cấp, cho thuê xe du lịch và thuê
                  xe ô tô tự lái. Các mẫu xe đời mới từ 2021&nbsp;đến nay. Là
                  đơn vị chuyên cho thuê ô tô tự lái các dòng xe ở Trí
                  Tín&nbsp;có chế độ bảo dưỡng nghiêm ngặt. Nên chất lượng đạt
                  chuẩn đầu ra, cung ứng đến khách hàng không bị phàn nàn.
                </span>
              </p>
              <h2>
                <strong>
                  <span style={{ fontSize: '18px' }}>
                    Địa điểm cho thuê xe tự lái đời mới tại Thủ Dầu Một&nbsp;
                  </span>
                </strong>
              </h2>
              <h2>
                <span style={{ color: '#ff0000' }}>
                  <strong>
                    <em>
                      <span style={{ fontSize: '18px' }}>
                        CHO THUÊ XE TỰ LÁI TRÍ TÍN&nbsp;
                      </span>
                    </em>
                  </strong>
                </span>
              </h2>
              <p>
                Địa Chỉ:&nbsp;
                <a href="https://www.google.com/maps/place/Cho+thu%C3%AA+xe+t%E1%BB%B1+l%C3%A1i+Tr%C3%AD+T%C3%ADn+-+Th%E1%BB%A7+D%E1%BA%A7u+M%E1%BB%99t/@11.050926,106.662304,16z/data=!4m5!3m4!1s0x0:0x4f267fd9bff834f!8m2!3d11.0509257!4d106.6623038?hl=vi">
                  D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu Một,
                  Bình Dương
                </a>
              </p>
              <p>Hotline:&nbsp;0382936939 - 0902927936</p>
              <p>Email:congtri1410@gmail.com</p>
              <p>
                Website:&nbsp;
                <a href="http://xetulaitritin.com/">http://xetulaitritin.com</a>
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </Content>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={18}>
          <Share />
        </Col>
      </Row>
    </AboutPageWrapper>
  );
}

const AboutPageWrapper = styled.div`
  background-color: ${styleVariables.BACKGROUND_COLOR};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Content = styled.div``;
