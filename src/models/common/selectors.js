import { createSelector } from 'reselect';

import { DESKTOP, MEDIUM_DESKTOP, LARGE_DESKTOP, TABLET } from 'constants';

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

export const isDesktopSelector = createSelector(
  viewportSelector,
  viewport => viewport === DESKTOP
);

export const isMediumDesktopSelector = createSelector(
  viewportSelector,
  viewport => viewport === MEDIUM_DESKTOP
);

export const isLargeDesktopSelector = createSelector(
  viewportSelector,
  viewport => viewport === LARGE_DESKTOP
);

export const changeAnimationSelector = createSelector(
  commonSelector,
  ({ changeAnimation }) => changeAnimation
);

export const toDetailSelector = createSelector(
  commonSelector,
  ({ toDetail }) => toDetail
);

export const sliderActiveSelector = createSelector(
  commonSelector,
  ({ sliderActiveSlide }) => sliderActiveSlide
);
