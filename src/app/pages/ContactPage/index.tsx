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

interface Props {}

export function ContactPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <ContactPageWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Contact />
      <GoogleMapExtenstion />
    </ContactPageWrapper>
  );
}

const ContactPageWrapper = styled.div``;
