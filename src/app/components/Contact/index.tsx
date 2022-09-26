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
import { CompanyInfo } from 'app/models';
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
        <Col xl={23} xxl={18}>
          <TitleMain name="LIÊN HỆ" />
        </Col>
      </Row>
      <Row justify="center">
        <Col md={23} lg={23} xl={23} xxl={18}>
          <Row justify="space-between">
            <Col lg={24} xl={14}>
              <CompanyTitle>{CompanyInfo.DESCRIPTION}</CompanyTitle>
              <CompanyInfoItem>
                Địa Chỉ: <Link to="/">{CompanyInfo.ADDRESS}</Link>
              </CompanyInfoItem>
              <CompanyInfoItem>
                Hotline: {CompanyInfo.PHONE_NUMBER}
              </CompanyInfoItem>
              <CompanyInfoItem>
                Website: <Link to="/">{CompanyInfo.WEBSITE}</Link>
              </CompanyInfoItem>
            </Col>
            <Col sm={24} md={24} lg={24} xl={10}>
              <Form
                // {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
              >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: 'Vui lòng nhập họ tên!' },
                      ]}
                    >
                      <Input size="large" placeholder="Họ tên" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="phoneNumber"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập số điện thoại!',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Số điện thoại" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="address"
                      rules={[
                        { required: true, message: 'Vui lòng nhập địa chỉ!' },
                      ]}
                    >
                      <Input size="large" placeholder="Địa chỉ" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Vui lòng nhập email!' },
                      ]}
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
                  rules={[
                    { required: true, message: 'Vui lòng nhập nội dung' },
                  ]}
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
        </Col>
      </Row>
      <Row
        justify="center"
        css={{
          marginTop: '2rem',
        }}
      >
        <Col xs={24} md={24} lg={24} xl={23} xxl={23}>
          <div>
            <iframe
              style={{ border: 0, width: '100%', height: '270px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameBorder={0}
              allowFullScreen
            />
          </div>
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
