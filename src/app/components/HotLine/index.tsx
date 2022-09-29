/**
 *
 * HotLine
 *
 */
import { CompanyInfo } from 'app/models';
import * as React from 'react';
import styled from 'styled-components';
import { styleVariables } from 'styles';

interface Props {}

export function HotLine(props: Props) {
  const HotLineWrapper = styled.div`
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 11;

    &:before {
      position: absolute;
      left: -14px;
      top: -14px;
      content: '';
      width: 76px;
      height: 76px;

      background: url(http://xetulaitritin.com/assets/images/dt1.png) no-repeat;
      animation: rotating 5s linear infinite;
    }

    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `;

  const _A = styled.a`
    display: block;
    width: 167px;
    padding: 6px 0 6px 55px;
    border-radius: 24px;
    height: 48px;
    background: ${styleVariables.TEXT_COLOR_RED};
    color: #fef4f4;
    font-size: 13px;
    font-family: 'RR';
    line-height: 1.2;
    position: relative;
    z-index: 1;

    text-decoration: none !important;
    &:before {
      position: absolute;
      left: 4px;
      top: 4px;
      content: '';
      width: 40px;
      height: 40px;

      background: #fff
        url(https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/3DEB284A-EBE7-46A5-ACA4-6ECF1C00C435.jpeg?alt=media&token=440f1dce-c1a6-4f5f-9349-b6e746692d1c)
        no-repeat;
      animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
      border-radius: 50%;
    }

    @keyframes coccoc-alo-circle-img-anim {
      0%,
      100%,
      50% {
        transform: rotate(0) scale(1) skew(1deg);
      }
      10%,
      30% {
        transform: rotate(-25deg) scale(1) skew(1deg);
      }
      20%,
      40% {
        transform: rotate(25deg) scale(1) skew(1deg);
      }
    }

    &:hover {
      color: white;
    }
    span {
      display: block;
      color: #ffd500;
      overflow: hidden;
      font-size: 17px;
      font-family: 'RB';
    }
  `;

  const PhoneringAloPhone = styled.div`
    position: fixed;
    background-color: transparent;
    width: 200px;
    height: 200px;
    cursor: pointer;
    z-index: 200000 !important;
    right: 150px;
    bottom: -50px;
    left: -50px;
    display: block;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    transition: visibility 0.5s;
    visibility: visible;

    @keyframes phonering-alo-circle-anim {
      0% {
        -webkit-transform: rotate(0) scale(0.5) skew(1deg);
        transform: rotate(0) scale(0.5) skew(1deg);
        opacity: 0.1;
      }
      30% {
        -webkit-transform: rotate(0) scale(0.7) skew(1deg);
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.5;
      }
      100% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
        opacity: 0.1;
      }
    }
    @-webkit-keyframes phonering-alo-circle-fill-anim {
      0% {
        -webkit-transform: rotate(0) scale(0.7) skew(1deg);
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.2;
      }
      50% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
        opacity: 0.2;
      }
      100% {
        -webkit-transform: rotate(0) scale(0.7) skew(1deg);
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.2;
      }
    }
    @keyframes phonering-alo-circle-fill-anim {
      0% {
        -webkit-transform: rotate(0) scale(0.7) skew(1deg);
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.2;
      }
      50% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
        opacity: 0.2;
      }
      100% {
        -webkit-transform: rotate(0) scale(0.7) skew(1deg);
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.2;
      }
    }
    @-webkit-keyframes phonering-alo-circle-img-anim {
      0% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
      }
      10% {
        -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
        transform: rotate(-25deg) scale(1) skew(1deg);
      }
      20% {
        -webkit-transform: rotate(25deg) scale(1) skew(1deg);
        transform: rotate(25deg) scale(1) skew(1deg);
      }
      30% {
        -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
        transform: rotate(-25deg) scale(1) skew(1deg);
      }
      40% {
        -webkit-transform: rotate(25deg) scale(1) skew(1deg);
        transform: rotate(25deg) scale(1) skew(1deg);
      }
      50% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
      }
      100% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
      }
    }
    @keyframes phonering-alo-circle-img-anim {
      0% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
      }
      10% {
        -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
        transform: rotate(-25deg) scale(1) skew(1deg);
      }
      20% {
        -webkit-transform: rotate(25deg) scale(1) skew(1deg);
        transform: rotate(25deg) scale(1) skew(1deg);
      }
      30% {
        -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
        transform: rotate(-25deg) scale(1) skew(1deg);
      }
      40% {
        -webkit-transform: rotate(25deg) scale(1) skew(1deg);
        transform: rotate(25deg) scale(1) skew(1deg);
      }
      50% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
      }
      100% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
        transform: rotate(0) scale(1) skew(1deg);
      }
    }
  `;

  const PhoneringAloPhCircle = styled.div`
    border-color: #8cb045 !important;
    opacity: 0.5;

    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    position: absolute;
    background-color: transparent;
    border-radius: 100%;
    border: 2px solid rgba(30, 30, 30, 0.4);
    opacity: 0.1;
    -webkit-animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
    animation: phonering-alo-circle-anim 1.2s infinite ease-in-out;
    transition: all 0.5s;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  `;

  const PhoneringAloPhCircleFill = styled.div`
    background-color: #8cb045;

    width: 100px;
    height: 100px;
    top: 50px;
    left: 50px;
    position: absolute;
    background-color: #0a5e09;
    border-radius: 100%;
    border: 2px solid transparent;
    -webkit-animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
    animation: phonering-alo-circle-fill-anim 2.3s infinite ease-in-out;
    transition: all 0.5s;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  `;

  const PhoneringAloPhImgCircle = styled.div`
    background-color: #8cb045 !important;
    &:hover {
      background-color: #0a5e09 !important;
    }
    width: 60px;
    height: 60px;
    top: 70px;
    left: 70px;
    position: absolute;
    background: rgba(30, 30, 30, 0.1)
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB/ElEQVR42uya7W3CMBCG31QM4A1aNggTlG6QbpBMkHYC1AloJ4BOABuEDcgGtBOETnD9c1ERCH/lwxeaV8oPFGP86Hy+DxMREW5Bd7gRjSDSNGn4/RiAOvm8C0ZCRD5PSkQVXSr1nK/xE3mcWimA1ZV3JYBZCIO4giQANoYxMwYS6+xKY4lT5dJPreWZY+uspqSCKPYN27GJVBDXheVSQe494ksiEWTuMXcu1dld9SARxDX1OAJ4lgjy4zDnFsC076A4adEiRwAZg4hOUSpNoCsBPDGM+HqkNGynYBCuILuWj+dgWysGsNe8nwL4GsrW0m2fxZBq9rW0rNcX5MOQ9eZD8JFahcG5g/iKT671alGAYQggpYWvpEPYWrU/HDTOfeRIX0q2SL3QN4tGhZJukVobQyXYWw7WtLDKDIuM+ZSzscyCE9PCy5IttCvnZNaeiGLNHKuz8ZVh/MXTVu/1xQKmIqLEAuJ0fNo3iG5B51oSkeKnsBi/4bG9gYB/lCytU5G9DryFW+3Gm+JLwU7ehbJrwTjq4DJU8bHcVbEV9dXXqqP6uqO5e2/QZRYJpqu2IUAA4B3tXvx8hgKp05QZW6dJqrLTNkB6vrRURLRwPHqtYgkC3cLWQAcDQGGKH13FER/NATzi786+BPDNjm1dMkfjn2pGkBHkf4D8DgBJDuDHx9BN+gAAAABJRU5ErkJggg==)
      no-repeat center center;
    border-radius: 100%;
    border: 2px solid transparent;
    -webkit-animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
    animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  `;
  const PpsBtnImg = styled.a`
    background-color: transparent;

    &:hover {
      text-decoration: none;
      color: #0a5e09;
    }

    img {
      vertical-align: middle;
      border-style: none;
    }
  `;

  const HotLineWrapperV2 = styled.div`
    color: #0a5e09;
    font-family: Arial;
  `;

  return (
    // <HotLineWrapper>
    //   <_A href={`tel:${CompanyInfo.PHONE_NUMBER}`}>
    //     HOTLINE
    //     <span>{CompanyInfo.PHONE_NUMBER}</span>
    //   </_A>
    // </HotLineWrapper>
    <HotLineWrapperV2>
      <PhoneringAloPhone>
        <PhoneringAloPhCircle />
        <PhoneringAloPhCircleFill />
        <PhoneringAloPhImgCircle>
          <PpsBtnImg href={`tel:${CompanyInfo.PHONE_NUMBER}`} title="Liên hệ">
            <img
              alt="Liên hệ"
              className="img-responsive"
              src="https://3.bp.blogspot.com/-jipOkVbgvtk/WPd_CdNwOoI/AAAAAAAAEn0/iYoBqhrSHWgSGDOiEvvEzTYa-khhJt9NACLcB/s1600/v8TniL3.png"
              width="50"
            />
          </PpsBtnImg>
        </PhoneringAloPhImgCircle>
      </PhoneringAloPhone>
    </HotLineWrapperV2>
  );
}
