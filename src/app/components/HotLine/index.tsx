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
    &::before {
      position: absolute;
      left: 4px;
      top: 4px;
      content: '';
      width: 40px;
      height: 40px;

      background: #fff url(http://xetulaitritin.com/assets/images/dt2.png)
        no-repeat;
      animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
      -webkit-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
      border-radius: 50%;
    }
    @-moz-keyframes coccoc-alo-circle-img-anim {
      0% {
        transform: rotate(0) scale(1) skew(1deg);
      }
      10%,
      30% {
        -moz-transform: rotate(-25deg) scale(1) skew(1deg);
      }
      20%,
      40% {
        -moz-transform: rotate(25deg) scale(1) skew(1deg);
      }
      100%,
      50% {
        -moz-transform: rotate(0) scale(1) skew(1deg);
      }
    }
    @-webkit-keyframes coccoc-alo-circle-img-anim {
      0%,
      100%,
      50% {
        -webkit-transform: rotate(0) scale(1) skew(1deg);
      }
      10%,
      30% {
        -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
      }
      20%,
      40% {
        -webkit-transform: rotate(25deg) scale(1) skew(1deg);
      }
    }
    @-o-keyframes coccoc-alo-circle-img-anim {
      0%,
      100%,
      50% {
        -o-transform: rotate(0) scale(1) skew(1deg);
      }
      10%,
      30% {
        -o-transform: rotate(-25deg) scale(1) skew(1deg);
      }
      20%,
      40% {
        -o-transform: rotate(25deg) scale(1) skew(1deg);
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
  return (
    <HotLineWrapper>
      <_A href={`tel:${CompanyInfo.PHONE_NUMBER}`}>
        HOTLINE
        <span>{CompanyInfo.PHONE_NUMBER}</span>
      </_A>
    </HotLineWrapper>
  );
}
