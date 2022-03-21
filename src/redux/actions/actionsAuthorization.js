import actionsTypes from '../actionsTypes/actionsTypes';

const requestAuth = (payload) => ({ type: actionsTypes.AUTH_REQUEST, payload });

const requestAuthSuccess = (payload) => ({ type: actionsTypes.AUTH_REQUEST_SUCCESS, payload });

const requestAuthError = (error) => ({ type: actionsTypes.AUTH_REQUEST_ERROR, error });

export { requestAuth, requestAuthSuccess, requestAuthError };
