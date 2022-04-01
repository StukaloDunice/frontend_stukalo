import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { editingUserSuccess, editingUserError, requestCurrentUser } from '../actions/actionsUser';

function* editingUserWorker(action) {
  try {
    const form = yield new FormData();
    yield form.append('avatar', action.payload.file);
    yield form.append('username', action.payload.username);
    yield form.append('id', action.payload.id);
    const { data } = yield call(api.patch, `/users/${action.payload.id}`, form);
    yield put(editingUserSuccess(data));
    yield put(requestCurrentUser(action.payload.id));
  } catch (error) {
    yield put(editingUserError(error.response.data.message));
  }
}

function* editingUserSaga() {
  yield takeLatest(actionsTypes.EDITING_USER_REQUEST, editingUserWorker);
}

export default editingUserSaga;
