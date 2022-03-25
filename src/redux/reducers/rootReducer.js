import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ allNews: newsReducer, authUser: authReducer });
export default rootReducer;
