/**
 *
 * Asynchronously loads the component for Article
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Article = lazyLoad(
  () => import('./index'),
  module => module.Article,
);
