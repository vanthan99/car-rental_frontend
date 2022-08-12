/**
 *
 * Booking
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Booking = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <BookingWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      This is booking
    </BookingWrapper>
  );
});

const BookingWrapper = styled.div``;
