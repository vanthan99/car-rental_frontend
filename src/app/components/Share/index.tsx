/**
 *
 * Share
 *
 */
import { Space } from 'antd';
import { CompanyInfo } from 'app/models';
import * as React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
} from 'react-share';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

interface Props {}

export function Share(props: Props) {
  return (
    <ShareWrapper>
      <Title>Chia sẻ:</Title>
      <SocialWrapper>
        <Space>
          <ItemWrapper>
            <FacebookShareButton url={CompanyInfo.FACEBOOK_HOMEPAGE}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </ItemWrapper>
          <ItemWrapper>
            <FacebookMessengerShareButton
              appId=""
              url={CompanyInfo.FACEBOOK_HOMEPAGE}
            >
              <FacebookMessengerIcon size={32} round={true} />
            </FacebookMessengerShareButton>
          </ItemWrapper>
          <ItemWrapper>
            <TelegramShareButton url="">
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </ItemWrapper>
          <ItemWrapper>
            <TwitterShareButton url={CompanyInfo.FACEBOOK_HOMEPAGE}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </ItemWrapper>
          <ItemWrapper>
            <EmailShareButton url={CompanyInfo.FACEBOOK_HOMEPAGE}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </ItemWrapper>
          <ItemWrapper>
            <LinkedinShareButton url={CompanyInfo.FACEBOOK_HOMEPAGE}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </ItemWrapper>
          <ItemWrapper>
            <ViberShareButton url={CompanyInfo.FACEBOOK_HOMEPAGE}>
              <ViberIcon size={32} round={true} />
            </ViberShareButton>
          </ItemWrapper>
        </Space>
      </SocialWrapper>
    </ShareWrapper>
  );
}

const ItemWrapper = styled.div`
  transition: ${styleVariables.TRANSITION};
  padding-top: 5px;
  padding-bottom: 0;

  &:hover {
    padding-top: 0;
    padding-bottom: 5px;
  }
`;

const ShareWrapper = styled.div`
  padding: 17px 15px 10px 15px;
  line-height: normal;
  background-color: rgba(128, 128, 128, 0.15);
  margin-top: 15px;
  border-radius: 5px;
`;

const Title = styled.p`
  display: block;
  margin-bottom: 5px;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
