/**
 *
 * ContactPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Contact } from 'app/components/Contact/Loadable';
import { GoogleMapExtenstion } from 'app/components/GoogleMapExtenstion/Loadable';
import { styleVariables } from 'styles';
import { useMediaQuery } from 'react-responsive';
import { MobilScreenSize } from 'styles/commons';

interface Props {}

export const ContactPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const isMobileScreen = useMediaQuery(MobilScreenSize);
  const ContactPageWrapper = styled.div`
    background-color: ${styleVariables.BACKGROUND_COLOR3};
    padding: ${isMobileScreen ? '2rem 10px' : '2rem 0'};
  `;
  return (
    <ContactPageWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Contact />
    </ContactPageWrapper>
  );
};
