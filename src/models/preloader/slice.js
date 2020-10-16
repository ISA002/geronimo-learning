/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

const preloaderSlice = createSlice({
  name: 'preloader',
  initialState: {
    loadingFinished: false,
  },
  reducers: {
    setLoading: state => {
      state.loadingFinished = true;
    },
  },
});

export const actions = actionTypes(preloaderSlice.actions);

export default preloaderSlice.reducer;
