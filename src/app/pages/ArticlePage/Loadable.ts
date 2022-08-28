/**
 *
 * Asynchronously loads the component for ArticlePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ArticlePage = lazyLoad(
  () => import('./index'),
  module => module.ArticlePage,
);
