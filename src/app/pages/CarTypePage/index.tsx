/**
 *
 * CarTypePage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function CarTypePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <CarTypeWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      this is car type page
    </CarTypeWrapper>
  );
}

const CarTypeWrapper = styled.div``;