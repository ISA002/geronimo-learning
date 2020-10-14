/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    collection: {},
    fetching: true,
    collectionFetched: false,
  },
  reducers: {
    fetchInfo: state => {
      state.fetching = true;
    },
    fetchInfoSuccess(state, { payload }) {
      const { info } = payload;
      state.fetching = false;
      state.collectionFetched = true;
      console.log(info);
    },
    fetchInfoFailed(state) {
      state.fetching = false;
      state.collectionFetched = true;
    },
  },
});

export const actions = actionTypes(infoSlice.actions);

export default infoSlice.reducer;
