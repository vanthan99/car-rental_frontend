/**
 *
 * SlideShow
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';

export const SlideShow = () => {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  const DemoBox = styled.div`
    height: 300px;
    background-color: #557be1;

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const ItemStyle: React.CSSProperties = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'center',
  };

  const ItemImageStyle: React.CSSProperties = {
    width: '100%',
  };
  return (
    <SlideShowWrapper>
      {/* <Slider {...settings}>
        <DemoBox>
          <h3>1</h3>
        </DemoBox>
        <DemoBox>
          <h3>2</h3>
        </DemoBox>
        <DemoBox>
          <h3>3</h3>
        </DemoBox>
        <DemoBox>
          <h3>4</h3>
        </DemoBox>
        <DemoBox>
          <h3>5</h3>
        </DemoBox>
        <DemoBox>
          <h3>6</h3>
        </DemoBox>
      </Slider> */}

      <Carousel autoplay>
        <div style={ItemStyle}>
          <img
            style={ItemImageStyle}
            src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/657B9349-7D9C-483E-A5F4-FFC38742575C.jpeg?alt=media&token=6891be07-25b4-4daa-b5f5-60318aa53907"
          />
        </div>
        <div style={ItemStyle}>
          <img
            style={ItemImageStyle}
            src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/C1D6C238-AB33-46AD-BFED-087D4F39F8FC.jpeg?alt=media&token=1b7c5c36-6d23-4bd0-bbe1-9c606f0c8ebb"
          />
        </div>
        <div style={ItemStyle}>
          <img
            style={ItemImageStyle}
            src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/6ED48C7B-E164-49F5-BFFB-C719A6517CF8.jpeg?alt=media&token=c952a28e-059a-4f90-b05b-747d615b5ad8"
          />
        </div>
        <div style={ItemStyle}>
          <img
            style={ItemImageStyle}
            src="https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/75AD4DFC-AB06-4E93-BB54-A8042BF2027E.jpeg?alt=media&token=12a4adfa-2627-4421-8814-5e4d3fa1ec1d"
          />
        </div>
      </Carousel>
    </SlideShowWrapper>
  );
};

const SlideShowWrapper = styled.div``;
