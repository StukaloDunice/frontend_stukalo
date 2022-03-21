import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestAuthSuccess, requestAuthError } from '../actions/actionsAuthorization';

function* authWorker(action) {
  try {
    const { data } = yield call(api.post, '/auth/register', action.payload);
    yield put(requestAuthSuccess(data));
  } catch (error) {
    yield put(requestAuthError(error));
  }
}

function* authSaga() {
  yield takeLatest(actionsTypes.AUTH_REQUEST, authWorker);
}

export default authSaga;
