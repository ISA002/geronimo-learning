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
      // TODO Почему !state.loading? можноже просто написать 
      // state.loadingFinished = true;
      state.loadingFinished = !state.loading;
    },
  },
});

export const actions = actionTypes(preloaderSlice.actions);

export default preloaderSlice.reducer;
