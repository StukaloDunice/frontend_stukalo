import actionsTypes from '../actionsTypes/actionsTypes';

const requestUser = () => ({ type: actionsTypes.USER_REQUEST });

const requestUserSuccess = (payload) => ({ type: actionsTypes.USER_SUCCESS, payload });

const requestUserError = (error) => ({ type: actionsTypes.USER_ERROR, error });

export { requestUser, requestUserSuccess, requestUserError };
