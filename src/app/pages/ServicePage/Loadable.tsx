import { LoadingIndicator } from 'app/components/LoadingIndicator';
/**
 *
 * Asynchronously loads the component for ServicePage
 *
 */

import { lazyLoad } from 'utils/loadable';
import React from 'react';
export const ServicePage = lazyLoad(
  () => import('./index'),
  module => module.ServicePage,
  {
    fallback: <LoadingIndicator />,
  },
);
