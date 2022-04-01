import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestCurrentUserSuccess, requestCurrentUserError } from '../actions/actionsUser';

function* currentUserWorker(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload}`);
    yield put(requestCurrentUserSuccess(data));
  } catch (error) {
    yield put(requestCurrentUserError(error.response.data.message));
  }
}

function* currentUserSaga() {
  yield takeLatest(actionsTypes.CURRENT_USER_REQUEST, currentUserWorker);
}

export default currentUserSaga;
