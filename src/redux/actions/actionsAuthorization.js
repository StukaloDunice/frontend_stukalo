import actionsTypes from '../actionsTypes/actionsTypes';

export const requestAuth = (payload) => ({
  type: actionsTypes.AUTH_REQUEST,
  payload,
});

export const requestAuthSuccess = (payload) => ({
  type: actionsTypes.AUTH_REQUEST_SUCCESS,
  payload,
});

export const requestAuthError = (error) => ({
  type: actionsTypes.AUTH_REQUEST_ERROR,
  error,
});

export const requestSignOut = () => ({ type: actionsTypes.SIGN_OUT_REQUEST });

export const requestSignOutSuccess = () => ({
  type: actionsTypes.SIGN_OUT_SUCCESS,
});

export const requestSignOutError = (error) => ({
  type: actionsTypes.SIGN_OUT_ERROR,
  error,
});

export const requestGoogleAuthrization = () => ({
  type: actionsTypes.GOOGLE_AUTH_REQUEST,
});

export const requestGoogleAuthrizationError = (error) => ({
  type: actionsTypes.GOOGLE_AUTH_ERROR,
  error,
});

export const requestGoogleAuthrizationSuccess = (payload) => ({
  type: actionsTypes.GOOGLE_AUTH_SUCCESS,
  payload,
});
