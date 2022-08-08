/**
 *
 * AboutPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function AboutPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  console.log('ABC');

  return (
    <AboutPageWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      this is about page
    </AboutPageWrapper>
  );
}

const AboutPageWrapper = styled.div``;
