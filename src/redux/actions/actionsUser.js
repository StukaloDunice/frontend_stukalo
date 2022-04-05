import actionsTypes from '../actionsTypes/actionsTypes';

export const requestUser = (payload) => ({ type: actionsTypes.USER_REQUEST, payload });

export const requestUserSuccess = (payload) => ({ type: actionsTypes.USER_SUCCESS, payload });

export const requestUserError = (error) => ({ type: actionsTypes.USER_ERROR, error });

export const requestCurrentUser = (payload) => ({
  type: actionsTypes.CURRENT_USER_REQUEST, payload,
});

export const requestCurrentUserSuccess = (payload) => ({
  type: actionsTypes.CURRENT_USER_SUCCESS, payload,
});

export const requestCurrentUserError = (error) => ({
  type: actionsTypes.CURRENT_USER_ERROR, error,
});

export const requestEditingUser = (payload) => ({
  type: actionsTypes.EDITING_USER_REQUEST, payload,
});

export const editingUserSuccess = (payload) => ({
  type: actionsTypes.EDITING_USER_SUCCESS, payload,
});

export const editingUserError = (payload) => ({ type: actionsTypes.EDITING_USER_ERROR, payload });
