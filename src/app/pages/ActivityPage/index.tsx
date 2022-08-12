/**
 *
 * ActivityPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function ActivityPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <ActivityPageWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      this is activity page
    </ActivityPageWrapper>
  );
}

const ActivityPageWrapper = styled.div``;
