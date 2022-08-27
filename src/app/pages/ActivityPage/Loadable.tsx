/**
 *
 * Asynchronously loads the component for ActivityPage
 *
 */

import { lazyLoad } from 'utils/loadable';
import React from 'react';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
export const ActivityPage = lazyLoad(
  () => import('./index'),
  module => module.ActivityPage,
  {
    fallback: <LoadingIndicator />,
  },
);
