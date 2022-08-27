/**
 *
 * Asynchronously loads the component for CarTypePage
 *
 */

import { lazyLoad } from 'utils/loadable';
import React from 'react';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
export const CarTypePage = lazyLoad(
  () => import('./index'),
  module => module.CarTypePage,
  {
    fallback: <LoadingIndicator />,
  },
);
