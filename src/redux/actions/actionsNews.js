import actionsTypes from '../actionsTypes/actionsTypes';

const requestNews = () => ({ type: actionsTypes.GET_NEWS_REQUEST });

const requestNewsSuccess = (payload) => ({ type: actionsTypes.GET_NEWS_RESPONSE, payload });

const requestNewsError = (error) => ({ type: actionsTypes.GET_NEWS_ERROR, error });

const requestAddNews = (payload) => ({ type: actionsTypes.ADD_NEWS_REQUEST, payload });

const requestAddNewsSuccess = (payload) => ({ type: actionsTypes.ADD_NEWS_SUCCESS, payload });

const requestAddNewsError = (error) => ({ type: actionsTypes.ADD_NEWS_ERROR, error });

export {
  requestNews, requestNewsSuccess, requestNewsError,
  requestAddNews, requestAddNewsSuccess, requestAddNewsError,
};
