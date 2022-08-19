/**
 *
 * Contact
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Button, Col, Form, Row, Select, Typography, Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import { styleVariables } from 'styles';
import { TitleMain } from '../TitleMain';
const { Title, Text, Paragraph } = Typography;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      name: 'Hello world!',
      content: 'leewd2daw',
      phoneNumber: '0927312312312',
    });
  };

  return (
    <ContactWrapper>
      <Row justify="center">
        <Col>
          <TitleMain name="LIÊN HỆ" />
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={9}>
          <CompanyTitle>CHO THUÊ XE TỰ LÁI TRÍ TÍN</CompanyTitle>
          <CompanyInfoItem>
            Địa Chỉ:{' '}
            <Link to="/">
              D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu Một, Bình
              Dương
            </Link>
          </CompanyInfoItem>
          <CompanyInfoItem>Hotline: 0382936939 - 0902927936</CompanyInfoItem>
          <CompanyInfoItem>Email:congtri1410@gmail.com</CompanyInfoItem>
          <CompanyInfoItem>
            Website: <Link to="/">http://xetulaitritin.com</Link>
          </CompanyInfoItem>
        </Col>
        <Col sm={9}>
          <Form
            // {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col sm={12}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                >
                  <Input size="large" placeholder="Họ tên" />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại!' },
                  ]}
                >
                  <Input size="large" placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item
                  name="address"
                  rules={[
                    { required: true, message: 'Vui lòng nhập địa chỉ!' },
                  ]}
                >
                  <Input size="large" placeholder="Địa chỉ" />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                  <Input size="large" placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="subject"
              rules={[{ required: true, message: 'Vui lòng nhập chủ để!' }]}
            >
              <Input size="large" placeholder="Chủ đề" />
            </Form.Item>
            <Form.Item
              name="content"
              rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
            >
              <TextArea rows={5} placeholder="Nội dung" />
            </Form.Item>
            <Row>
              <Space>
                <Button size="large" type="primary" htmlType="submit">
                  Gửi
                </Button>
                <Button size="large" htmlType="button" onClick={onReset}>
                  Nhập lại
                </Button>
              </Space>
            </Row>
          </Form>
        </Col>
      </Row>
    </ContactWrapper>
  );
};

const CompanyTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${styleVariables.TEXT_COLOR_RED};
  margin-top: 0;
  margin-bottom: 1rem;
`;

const CompanyInfoItem = styled.div`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 18px;
`;

const ContactWrapper = styled.div``;
