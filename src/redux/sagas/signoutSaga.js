import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import {
  requestSignOutSuccess,
  requestSignOutError,
} from '../actions/actionsAuthorization';
import { deleteToken } from '../../lib/localstorage';

function* signOutWorker() {
  try {
    yield deleteToken();
    yield put(requestSignOutSuccess());
  } catch (error) {
    yield put(requestSignOutError(error));
  }
}

function* signOutSaga() {
  yield takeLatest(actionsTypes.SIGN_OUT_REQUEST, signOutWorker);
}

export default signOutSaga;
