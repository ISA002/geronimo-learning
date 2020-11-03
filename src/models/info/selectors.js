import { createSelector } from 'reselect';

export const infoSelector = createSelector(
  state => state,
  state => state.info
);

export const collectionSelector = createSelector(
  infoSelector,
  ({ collection }) => collection
);

export const filmPageDataSelector = createSelector(
  infoSelector,
  ({ filmCollection }) => filmCollection
);

export const pubPageDataSelector = createSelector(
  infoSelector,
  ({ pubCollection }) => pubCollection
);
