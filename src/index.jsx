import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import rootSaga from './redux/sagas/rootSaga';

const saga = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));
/* eslint-enable */

saga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
