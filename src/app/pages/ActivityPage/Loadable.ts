/**
 *
 * Asynchronously loads the component for ActivityPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ActivityPage = lazyLoad(
  () => import('./index'),
  module => module.ActivityPage,
);
