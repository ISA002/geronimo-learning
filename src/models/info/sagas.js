import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as api from 'api';

import { actions } from './slice';

export function* fetchInfo() {
  try {
    const response = yield call(api.getInfo);
    yield put({
      type: actions.fetchInfoSuccess,
      payload: { info: response.data },
    });
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeLatest(actions.fetchInfo, fetchInfo)]);
}
