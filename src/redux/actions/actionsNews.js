import actionsTypes from '../actionsTypes/actionsTypes';

export const requestNews = () => ({
  type: actionsTypes.GET_NEWS_REQUEST,
});

export const requestNewsSuccess = (payload) => ({
  type: actionsTypes.GET_NEWS_RESPONSE, payload,
});

export const requestNewsError = (error) => ({
  type: actionsTypes.GET_NEWS_ERROR, error,
});

export const requestAddNews = (payload) => ({
  type: actionsTypes.ADD_NEWS_REQUEST, payload,
});

export const requestAddNewsSuccess = (payload) => ({
  type: actionsTypes.ADD_NEWS_SUCCESS, payload,
});

export const requestAddNewsError = (error) => ({
  type: actionsTypes.ADD_NEWS_ERROR, error,
});
