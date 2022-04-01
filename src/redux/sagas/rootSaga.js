import { all } from 'redux-saga/effects';
import newsSaga from './newsSaga';
import regSaga from './regSaga';
import authSaga from './authSaga';
import signOutSaga from './signoutSaga';
import userSaga from './requestUserSaga';
import currentUserSaga from './currentUserSaga';
import editingUserSaga from './editingUserSaga';
import addNewsSaga from './addNewsSaga';

export default function* rootSaga() {
  yield all([newsSaga(), regSaga(), authSaga(),
    signOutSaga(), userSaga(), currentUserSaga(),
    editingUserSaga(), addNewsSaga()]);
}
