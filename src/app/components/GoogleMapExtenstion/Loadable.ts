/**
 *
 * Asynchronously loads the component for GoogleMapExtenstion
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GoogleMapExtenstion = lazyLoad(
  () => import('./index'),
  module => module.GoogleMapExtenstion,
);
