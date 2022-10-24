/**
 *
 * Contact
 *
 */
import { Button, Col, Form, Input, Row, Select, Space, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { CompanyInfo } from 'app/models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
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
              style={{ border: 0, width: '100%', height: '400px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.297772457948!2d107.10185361536612!3d16.81157752357959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e5890a26ab53%3A0x75a7eb92c3c71e1d!2zMzAgVMO0biBUaOG6pXQgVMO5bmcsIFBoxrDhu51uZyA1LCDEkMO0bmcgSMOgLCBRdeG6o25nIFRy4buLLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1666586452715!5m2!1sen!2s"
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
