/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

const commonSlice = createSlice({
  name: 'slider',
  initialState: {
    sliderActiveSlide: 0,
  },
  reducers: {
    setActiveSliderSlide: (state, payload) => {
      state.sliderActiveSlide = payload.active;
    },
  },
});

export const actions = actionTypes(commonSlice.actions);

export default commonSlice.reducer;
