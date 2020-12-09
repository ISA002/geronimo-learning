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
    setUrl: (state, payload) => {
      if (
        (state.url === '/tv' && /\/tv\/[0-9].*/.test(payload.url)) ||
        (state.url === '/pub' && /\/pub\/[0-9].*/.test(payload.url))
      ) {
        state.changeAnimation = true;
        state.toDetail = true;
      } else if (
        (/\/tv\/[0-9].*/.test(state.url) && payload.url === '/tv') ||
        (/\/pub\/[0-9].*/.test(state.url) && payload.url === '/pub')
      ) {
        state.changeAnimation = true;
        state.toDetail = false;
      } else {
        state.changeAnimation = false;
      }
      console.log('slice', state.changeAnimation);
      state.url = payload.url;
    },
    setActiveSliderSlide: (state, payload) => {
      state.sliderActiveSlide = payload.active;
    },
  },
});

export const actions = actionTypes(commonSlice.actions);

export default commonSlice.reducer;
