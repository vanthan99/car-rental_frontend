/**
 *
 * Footer
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function Footer(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FooterWrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      this is footer avd
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: yellow;
`;
