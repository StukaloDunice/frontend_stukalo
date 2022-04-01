import actionsTypes from '../actionsTypes/actionsTypes';

export const requestReg = (payload) => ({ type: actionsTypes.REG_REQUEST, payload });

export const requestRegSuccess = (payload) => ({ type: actionsTypes.REG_REQUEST_SUCCESS, payload });

export const requestRegError = (error) => ({ type: actionsTypes.REG_REQUEST_ERROR, error });
