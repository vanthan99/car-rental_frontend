/**
 *
 * Asynchronously loads the component for SlideShow
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SlideShow = lazyLoad(
  () => import('./index'),
  module => module.SlideShow,
);
