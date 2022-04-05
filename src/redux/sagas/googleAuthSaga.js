import { takeLatest, put, call } from 'redux-saga/effects';

import { setToken } from '../../lib/localstorage';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestUser } from '../actions/actionsUser';

function* googleAuthWorker(action) {
  yield call(setToken, action.payload);
  yield put(requestUser());
}

function* googleAuthSaga() {
  yield takeLatest(actionsTypes.GOOGLE_AUTH_REQUEST, googleAuthWorker);
}

export default googleAuthSaga;
