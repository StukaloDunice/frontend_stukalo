import actionsTypes from '../actionsTypes/actionsTypes';

const requestAuth = () => ({ type: actionsTypes.GET_NEWS_REQUEST });

const requestAuthSuccess = (payload) => ({ type: actionsTypes.GET_NEWS_RESPONSE, payload });

const requestAuthError = (error) => ({ type: actionsTypes.GET_NEWS_ERROR, error });

export { requestAuth, requestAuthSuccess, requestAuthError };
