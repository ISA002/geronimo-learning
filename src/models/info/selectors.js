import { createSelector } from 'reselect';

// import { denormalize } from 'utils/normalizeById';

export const infoSelector = createSelector(
  state => state,
  state => state.info
);

export const collectionSelector = createSelector(
  infoSelector,
  ({ collection }) => collection
);

// export const isCollectionFetchedSelector = createSelector(
//   usersSelector,
//   ({ collectionFetched }) => collectionFetched
// );

// export const collectionSelector = createSelector(
//   usersSelector,
//   users => denormalize(users.collection)
// );

// export const itemSelector = createSelector(
//   usersSelector,
//   (_, id) => id,
//   ({ collection }, id) => collection[id] || { fetched: false }
// );
