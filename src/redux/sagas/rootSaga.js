import { all } from 'redux-saga/effects';
import newsSaga from './newsSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
  ]);
}
