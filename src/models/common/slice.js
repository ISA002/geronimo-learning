/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

import { DESKTOP } from 'constants';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    viewport: DESKTOP,
    url: '',
    changeAnimation: false,
    toDetail: false,
    sliderActiveSlide: 0,
  },
  reducers: {
    setViewport: (state, payload) => {
      state.viewport = payload.payload;
    },
    setChangeAnimation: (state, payload) => {
      state.changeAnimation = payload.changeAnimation;
      state.toDetail = payload.toDetail;
    },
    setActiveSliderSlide: (state, payload) => {
      state.sliderActiveSlide = payload.active;
    },
  },
});

export const actions = actionTypes(commonSlice.actions);

export default commonSlice.reducer;
