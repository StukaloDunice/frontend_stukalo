import actionsTypes from '../actionsTypes/actionsTypes';

const requestReg = (payload) => ({ type: actionsTypes.REG_REQUEST, payload });

const requestRegSuccess = () => ({ type: actionsTypes.REG_REQUEST_SUCCESS });

const requestRegError = (error) => ({
  type: actionsTypes.REG_REQUEST_ERROR,
  error,
});

export { requestReg, requestRegSuccess, requestRegError };
