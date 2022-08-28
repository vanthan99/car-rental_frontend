/**
 *
 * SlideShow
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

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
  return (
    <SlideShowWrapper>
      <Slider {...settings}>
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
      </Slider>
    </SlideShowWrapper>
  );
};

const SlideShowWrapper = styled.div``;
