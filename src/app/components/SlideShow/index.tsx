/**
 *
 * SlideShow
 *
 */
import { Carousel, Col, Image, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';
import { LoadingIndicator } from '../LoadingIndicator';
export const SlideShow = () => {
  const ItemStyle: React.CSSProperties = {
    minHeight: '160px',
    lineHeight: '160px',
    textAlign: 'center',
  };

  const SliderData = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/657B9349-7D9C-483E-A5F4-FFC38742575C.jpeg?alt=media&token=6891be07-25b4-4daa-b5f5-60318aa53907',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/C1D6C238-AB33-46AD-BFED-087D4F39F8FC.jpeg?alt=media&token=1b7c5c36-6d23-4bd0-bbe1-9c606f0c8ebb',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/6ED48C7B-E164-49F5-BFFB-C719A6517CF8.jpeg?alt=media&token=c952a28e-059a-4f90-b05b-747d615b5ad8',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/75AD4DFC-AB06-4E93-BB54-A8042BF2027E.jpeg?alt=media&token=12a4adfa-2627-4421-8814-5e4d3fa1ec1d',
    },
  ];

  const ItemImageStyle: React.CSSProperties = {
    width: '100%',
  };
  const counter = React.useRef(0);

  const onImageLoad = () => {
    counter.current += 1;
    if (counter.current >= SliderData.length) {
      setLoading(false);
    }
  };

  const renderSliderItem = SliderData.map((item, index) => (
    <div style={ItemStyle} key={index}>
      <Image
        style={ItemImageStyle}
        src={item.image}
        preview={false}
        onLoad={onImageLoad}
      />
    </div>
  ));

  const [loading, setLoading] = React.useState(true);
  return (
    <SlideShowWrapper>
      {loading && (
        <Row justify="center">
          <Col span={24}>
            <LoadingIndicator />
          </Col>
        </Row>
      )}
      <Carousel
        effect="scrollx"
        // speed={2000}
        dots={false}
        autoplaySpeed={4500}
        lazyLoad="progressive"
        autoplay
      >
        {renderSliderItem}
      </Carousel>
      {/* <hr /> */}
      {/* <BookingWrapper>
        <Booking />
      </BookingWrapper> */}
    </SlideShowWrapper>
  );
};

const SlideShowWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const BookingWrapper = styled.div`
  color: red;
  position: absolute;
  bottom: -15px;
  right: 27px;
  width: 250px;
  height: 400px;
`;
