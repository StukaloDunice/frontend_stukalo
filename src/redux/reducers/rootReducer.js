import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({ allNews: newsReducer });
export default rootReducer;
