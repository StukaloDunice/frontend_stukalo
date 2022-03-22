import { all } from 'redux-saga/effects';
import newsSaga from './newsSaga';
import regSaga from './regSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    regSaga(),
    authSaga(),
  ]);
}
