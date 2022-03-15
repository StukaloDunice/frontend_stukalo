import actionsTypes from '../actionsTypes/actionsTypes';

const requestNews = () => ({ type: actionsTypes.GET_NEWS_REQUEST });

const requestNewsSuccess = (payload) => ({ type: actionsTypes.GET_NEWS_RESPONSE, payload });

const requestNewsError = (error) => ({ type: actionsTypes.GET_NEWS_ERROR, error });

export { requestNews, requestNewsSuccess, requestNewsError };
