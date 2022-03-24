import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import {
  requestAuthSuccess,
  requestAuthError,
  requestSignOutSuccess,
  requestSignOutError,
} from '../actions/actionsAuthorization';
import { setToken } from '../../lib/localstorage';

function* authWorker(action) {
  try {
    const { data } = yield call(api.post, '/auth/login', action.payload);
    yield setToken(data);
    yield put(requestAuthSuccess(action.payload));
  } catch (error) {
    yield put(requestAuthError(error));
  }
}

function* authSaga() {
  yield takeLatest(actionsTypes.AUTH_REQUEST, authWorker);
}

export default authSaga;
