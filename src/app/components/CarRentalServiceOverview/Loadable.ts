/**
 *
 * Asynchronously loads the component for CarRentalServiceOverview
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CarRentalServiceOverview = lazyLoad(
  () => import('./index'),
  module => module.CarRentalServiceOverview,
);
