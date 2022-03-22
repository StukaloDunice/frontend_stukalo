import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestRegSuccess, requestRegError } from '../actions/actionsRegistration';

function* regWorker(action) {
  try {
    const { data } = yield call(api.post, '/auth/register', action.payload);
    yield put(requestRegSuccess(data));
  } catch (error) {
    yield put(requestRegError(error));
  }
}

function* regSaga() {
  yield takeLatest(actionsTypes.REG_REQUEST, regWorker);
}

export default regSaga;
