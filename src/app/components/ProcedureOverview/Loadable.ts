/**
 *
 * Asynchronously loads the component for ProcedureOverview
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProcedureOverview = lazyLoad(
  () => import('./index'),
  module => module.ProcedureOverview,
);
