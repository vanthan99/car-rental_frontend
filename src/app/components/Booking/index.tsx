/**
 *
 * Booking
 *
 */
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}
const { RangePicker } = DatePicker;
export const Booking = memo((props: Props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <BookingWrapper>
      <h1 style={{ textAlign: 'center' }}>Đặt xe</h1>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
        >
          <Input placeholder="Họ Tên" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Vui lòng nhập số điên thoại!' }]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>

        <Form.Item
          name="date"
          rules={[
            {
              type: 'array' as const,
              required: true,
              message: 'Vui lòng chọn thời gian!',
            },
          ]}
        >
          <RangePicker />
        </Form.Item>

        <Form.Item
          name="type"
          rules={[{ required: true, message: 'Vui lòng nhập loại xe!' }]}
        >
          <Select placeholder="Loại xe">
            <Select.Option value="1">Vinfast</Select.Option>
            <Select.Option value="2">Misumishi</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item style={{ justifyContent: 'center' }}>
          <Button
            style={{ textAlign: 'center' }}
            type="primary"
            htmlType="submit"
          >
            Đặt
          </Button>
        </Form.Item>
      </Form>
    </BookingWrapper>
  );
});

const BookingWrapper = styled.div`
  background-color: white;
  padding: 0 10px 5px 10px;
`;
