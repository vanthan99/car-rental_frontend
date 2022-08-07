/**
 *
 * Asynchronously loads the component for ServicePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ServicePage = lazyLoad(
  () => import('./index'),
  module => module.ServicePage,
);
