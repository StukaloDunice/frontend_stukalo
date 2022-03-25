import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import { setToken } from '../../lib/localstorage';
import actionsTypes from '../actionsTypes/actionsTypes';
import {
  requestAuthSuccess,
  requestAuthError,
} from '../actions/actionsAuthorization';

function* authWorker(action) {
  try {
    const { data } = yield call(api.post, '/auth/login', action.payload);
    yield setToken(data);
    yield put(requestAuthSuccess(action.payload.email));
  } catch (error) {
    yield put(requestAuthError(error.response.data.message));
  }
}

function* authSaga() {
  yield takeLatest(actionsTypes.AUTH_REQUEST, authWorker);
}

export default authSaga;
