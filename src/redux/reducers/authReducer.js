import actionsTypes from '../actionsTypes/actionsTypes';

const initialState = {
  auth: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionsTypes.AUTH_REQUEST:
    case actionsTypes.REG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionsTypes.AUTH_REQUEST_ERROR:
    case actionsTypes.REG_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionsTypes.AUTH_REQUEST_SUCCESS:
    case actionsTypes.REG_REQUEST_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: null,
      };
    case actionsTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        auth: null,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
