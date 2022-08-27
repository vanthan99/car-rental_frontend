/**
 *
 * Asynchronously loads the component for ContactPage
 *
 */

import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { lazyLoad } from 'utils/loadable';
import React from 'react';
export const ContactPage = lazyLoad(
  () => import('./index'),
  module => module.ContactPage,
  {
    fallback: <LoadingIndicator />,
  },
);
