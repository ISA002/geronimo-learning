import { createSelector } from 'reselect';

import { DESKTOP, MOBILE, TABLET } from 'constants';

const rootSelector = state => state;

export const commonSelector = createSelector(
  rootSelector,
  ({ common }) => common
);

export const viewportSelector = createSelector(
  commonSelector,
  ({ viewport }) => viewport
);

export const isTabletSelector = createSelector(
  viewportSelector,
  viewport => viewport === TABLET
);

export const isMobileSelector = createSelector(
  viewportSelector,
  viewport => viewport === MOBILE
);

export const isDesktopSelector = createSelector(
  viewportSelector,
  viewport => viewport === DESKTOP
);
