import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import { setToken } from '../../lib/localstorage';
import actionsTypes from '../actionsTypes/actionsTypes';
import {
  requestGoogleAuthrizationError,
  requestAuthError,
} from '../actions/actionsAuthorization';
import { requestUser } from '../actions/actionsUser';

function* googleAuthWorker(action) {
  try {
    const { data } = yield call(api.get, '/auth/google');
    // yield setToken(data);
    yield put(requestGoogleAuthrizationError(error));
    // yield put(requestUser());
  } catch (error) {
    // yield put(requestAuthError(error.response.data.message));
  }
}

function* googleAuthSaga() {
  yield takeLatest(actionsTypes.GOOGLE_AUTH_REQUEST, googleAuthWorker);
}

export default googleAuthSaga;
