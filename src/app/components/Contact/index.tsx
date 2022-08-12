/**
 *
 * Contact
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Col, Row } from 'antd';

interface Props {}

export const Contact = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <ContactWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Row>
        <Col>Lien he</Col>
      </Row>
      <Row>
        <Col>
          {/* title */}
          <div>CHO THUÊ XE TỰ LÁI TRÍ TÍN</div>
          <div>
            <p>
              Địa Chỉ: D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu
              Một, Bình Dương
            </p>
            <p>Hotline: 0382936939 - 0902927936</p>
            <p>Email:congtri1410@gmail.com</p>
            <p>Website: http://xetulaitritin.com</p>
          </div>
        </Col>
        <Col>
          <ContactForm>
            <input type="text" placeholder="Ho ten" />
            <input type="text" placeholder="so dien thoai" />
            <input type="text" placeholder="dia chi" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="chu de" />
            <input type="text" placeholder="noi dung" />
            <button>Gui</button>
            <button>Nhap lai</button>
          </ContactForm>
        </Col>
      </Row>
    </ContactWrapper>
  );
});

const ContactForm = styled.div``;

const ContactWrapper = styled.div``;
