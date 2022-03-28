import actionsTypes from '../actionsTypes/actionsTypes';

const initialState = {
  auth: null,
  current: null,
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
        auth: { email: action.payload },
        loading: false,
        error: null,
      };
    case actionsTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionsTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        auth: null,
        loading: false,
        error: null,
      };
    case actionsTypes.USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionsTypes.USER_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: false,
      };
    case actionsTypes.CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.CURRENT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionsTypes.CURRENT_USER_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default authReducer;
