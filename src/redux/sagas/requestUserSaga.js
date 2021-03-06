import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestUserSuccess, requestUserError, requestCurrentUser } from '../actions/actionsUser';

function* requestUserWorker(action) {
  try {
    const { data } = yield call(api.get, '/auth/whoiam');
    yield put(requestUserSuccess(data));
    yield put(requestCurrentUser(action.payload));
  } catch (error) {
    yield put(requestUserError(error.response.data.message));
  }
}

function* requestUserSaga() {
  yield takeLatest(actionsTypes.USER_REQUEST, requestUserWorker);
}

export default requestUserSaga;
