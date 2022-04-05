import { takeLatest, put } from 'redux-saga/effects';

import { setToken } from '../../lib/localstorage';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestUser } from '../actions/actionsUser';

function* googleAuthWorker(action) {
  yield setToken(action.payload);
  yield put(requestUser());
}

function* googleAuthSaga() {
  yield takeLatest(actionsTypes.GOOGLE_AUTH_REQUEST, googleAuthWorker);
}

export default googleAuthSaga;
