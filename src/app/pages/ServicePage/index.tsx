/**
 *
 * ServicePage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function ServicePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <ServicePageWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      this is service page
    </ServicePageWrapper>
  );
}

const ServicePageWrapper = styled.div``;
