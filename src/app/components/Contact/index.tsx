/**
 *
 * Contact
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Button, Col, Form, Row, Select, Typography, Input } from 'antd';
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
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

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <ContactWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Row justify="center">
        <Col>
          <Title>LIÊN HỆ</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={9}>
          <Title>CHO THUÊ XE TỰ LÁI TRÍ TÍN</Title>
          <Paragraph>
            Địa Chỉ:{' '}
            <Link to="/">
              D1-109 Nhà ở an sinh xã hội becamex, Định Hoà, Thủ Dầu Một, Bình
              Dương
            </Link>
          </Paragraph>
          <Paragraph>Hotline: 0382936939 - 0902927936</Paragraph>
          <Paragraph>Email:congtri1410@gmail.com</Paragraph>
          <Paragraph>
            Website: <Link to="/">http://xetulaitritin.com</Link>
          </Paragraph>
        </Col>
        <Col sm={9}>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="name">
              <Input placeholder="Họ tên" />
            </Form.Item>
            <Form.Item name="phoneNumber">
              <Input placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item name="address">
              <Input placeholder="Địa chỉ" />
            </Form.Item>
            <Form.Item name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="subject">
              <Input placeholder="Chủ đề" />
            </Form.Item>
            <Form.Item name="content">
              <TextArea placeholder="Nội dung" />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
                Fill form
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ContactWrapper>
  );
};

const ContactForm = styled.div``;

const ContactWrapper = styled.div``;
