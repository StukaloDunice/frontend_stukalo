import actionsTypes from '../actionsTypes/actionsTypes';

const requestAuth = (payload) => ({ type: actionsTypes.AUTH_REQUEST, payload });

const requestAuthSuccess = (payload) => ({ type: actionsTypes.AUTH_REQUEST_SUCCESS, payload });

const requestAuthError = (error) => ({
  type: actionsTypes.AUTH_REQUEST_ERROR,
  error,
});

const requestSignOut = (payload) => ({ type: actionsTypes.SIGN_OUT_REQUEST, payload });
const requestSignOutSuccess = (payload) => ({ type: actionsTypes.SIGN_OUT_SUCCESS, payload });
const requestSignOutError = (payload) => ({ type: actionsTypes.SIGN_OUT_ERROR, payload });

export {
  requestAuth, requestAuthSuccess, requestAuthError,
  requestSignOut, requestSignOutSuccess, requestSignOutError,
};
