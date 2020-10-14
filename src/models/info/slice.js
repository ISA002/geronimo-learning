/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    collection: [
      {
        title: 'TV',
        subtitle: '',
        id: 5,
        preview: {
          video_url:
            'https://geronimo.be/system/uploads/case/preview_video/000/000/110/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_TV_V1_1.mov',
          image_urls: {
            original:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/case_image.jpg',
            preview:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/version_case_image.jpg',
            preview_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/version_x2_case_image.jpg',
            mobile:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/mobile_case_image.jpg',
            mobile_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/mobile_x2_case_image.jpg',
          },
          gif_url:
            'https://geronimo.be/system/uploads/case/preview_gif/000/000/110/Reel%20video%201%20TV.gif',
        },
        slug: 'tv',
      },
      {
        title: 'FILM',
        subtitle: '',
        id: 6,
        preview: {
          video_url:
            'https://geronimo.be/system/uploads/case/preview_video/000/000/111/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_FILM_V1_1.mov',
          image_urls: {
            original:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/case_image.jpg',
            preview:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/version_case_image.jpg',
            preview_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/version_x2_case_image.jpg',
            mobile:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/mobile_case_image.jpg',
            mobile_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/mobile_x2_case_image.jpg',
          },
          gif_url:
            'https://geronimo.be/system/uploads/case/preview_gif/000/000/111/Reel%20video%202%20Film.gif',
        },
        slug: 'film',
      },
      {
        title: 'PUB',
        subtitle: '',
        id: 7,
        preview: {
          video_url:
            'https://geronimo.be/system/uploads/case/preview_video/000/000/112/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_PUB_V1_1.mov',
          image_urls: {
            original:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/case_image.jpg',
            preview:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/version_case_image.jpg',
            preview_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/version_x2_case_image.jpg',
            mobile:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/mobile_case_image.jpg',
            mobile_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/mobile_x2_case_image.jpg',
          },
          gif_url:
            'https://geronimo.be/system/uploads/case/preview_gif/000/000/136/Radio%201.gif',
        },
        slug: 'pub',
      },
    ],
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
      state.collection = info.categories;
    },
    fetchInfoFailed(state) {
      state.fetching = false;
      state.collectionFetched = true;
    },
  },
});

export const actions = actionTypes(infoSlice.actions);

export default infoSlice.reducer;
