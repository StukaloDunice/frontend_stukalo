import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestNewsSuccess, requestNewsError } from '../actions/actionsNews';

function* newsWorker() {
  try {
    const { data } = yield call(api.get, '/news');
    yield put(requestNewsSuccess(data));
  } catch (error) {
    yield put(requestNewsError(error));
  }
}

function* newsSaga() {
  yield takeLatest(actionsTypes.GET_NEWS_REQUEST, newsWorker);
}

export default newsSaga;
