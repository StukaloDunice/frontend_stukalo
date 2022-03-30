import actionsTypes from '../actionsTypes/actionsTypes';

const requestUser = () => ({ type: actionsTypes.USER_REQUEST });

const requestUserSuccess = (payload) => ({ type: actionsTypes.USER_SUCCESS, payload });

const requestUserError = (error) => ({ type: actionsTypes.USER_ERROR, error });

const requestCurrentUser = (payload) => ({ type: actionsTypes.CURRENT_USER_REQUEST, payload });

const requestCurrentUserSuccess = (payload) => ({
  type: actionsTypes.CURRENT_USER_SUCCESS, payload,
});

const requestCurrentUserError = (error) => ({ type: actionsTypes.CURRENT_USER_ERROR, error });

const resetCurrentUser = () => ({ type: actionsTypes.RESET_CURRENT_USER });

const requestEditingUser = (payload) => ({ type: actionsTypes.EDITING_USER_REQUEST, payload });

const editingUserSuccess = (payload) => ({ type: actionsTypes.EDITING_USER_SUCCESS, payload });

const editingUserError = (payload) => ({ type: actionsTypes.EDITING_USER_ERROR, payload });

export {
  requestUser, requestUserSuccess, requestUserError,
  requestCurrentUser, requestCurrentUserSuccess, requestCurrentUserError,
  resetCurrentUser, requestEditingUser, editingUserSuccess,
  editingUserError,
};
