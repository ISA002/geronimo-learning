import { createSelector } from 'reselect';

export const infoSelector = createSelector(
  state => state,
  state => state.info
);

export const collectionSelector = createSelector(
  infoSelector,
  ({ collection }) => collection
);
