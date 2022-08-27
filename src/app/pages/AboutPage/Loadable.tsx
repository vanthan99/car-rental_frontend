/**
 *
 * Asynchronously loads the component for AboutPage
 *
 */

import { lazyLoad } from 'utils/loadable';
import React from 'react';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
export const AboutPage = lazyLoad(
  () => import('./index'),
  module => module.AboutPage,
  {
    fallback: <LoadingIndicator />,
  },
);
