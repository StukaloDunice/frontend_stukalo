import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../api/api';
import actionsTypes from '../actionsTypes/actionsTypes';
import { requestAddNewsSuccess, requestAddNewsError } from '../actions/actionsNews';

function* addNewsWorker(action) {
  try {
    const form = yield new FormData();
    yield form.append('image', action.payload.file);
    yield form.append('title', action.payload.title);
    yield form.append('content', action.payload.content);
    yield form.append('tags', action.payload.tags);
    const { data } = yield call(api.post, '/news', form);
    yield put(requestAddNewsSuccess(data));
  } catch (error) {
    yield put(requestAddNewsError(error));
  }
}

function* addNewsSaga() {
  yield takeLatest(actionsTypes.ADD_NEWS_REQUEST, addNewsWorker);
}

export default addNewsSaga;
