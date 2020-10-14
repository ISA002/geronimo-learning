import { createSelector } from 'reselect';

export const preloaderSelector = createSelector(
  state => state,
  state => state.preloader
);

export const loadingFinishedSelector = createSelector(
  preloaderSelector,
  ({ loadingFinished }) => loadingFinished
);
