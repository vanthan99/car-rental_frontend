/**
 *
 * Asynchronously loads the component for CarTypePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CarTypePage = lazyLoad(
  () => import('./index'),
  module => module.CarTypePage,
);
