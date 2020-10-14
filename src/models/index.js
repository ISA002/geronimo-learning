import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

import infoReducer from './info/slice';
import preloaderReducer from './preloader/slice';

import infoSagas from './info/sagas';

export const createRootReducer = history => ({
  router: connectRouter(history),
  info: infoReducer,
  preloader: preloaderReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([infoSagas()]);
};
