/**
 *
 * Asynchronously loads the component for SlideShow
 *
 */

import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from '../LoadingIndicator';
import React from 'react';

export const SlideShow = lazyLoad(
  () => import('./index'),
  module => module.SlideShow,
  {
    fallback: <LoadingIndicator />,
  },
);
