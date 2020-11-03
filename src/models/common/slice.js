/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

import { DESKTOP } from 'constants';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    viewport: DESKTOP,
  },
  reducers: {
    setViewport: (state, payload) => {
      state.viewport = payload.payload;
    },
  },
});

export const actions = actionTypes(commonSlice.actions);

export default commonSlice.reducer;
