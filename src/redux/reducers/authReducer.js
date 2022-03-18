import actionsTypes from '../actionsTypes/actionsTypes';

const initialState = {
  auth: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionsTypes.AUTHORIZATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionsTypes.AUTHORIZATION_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionsTypes.AUTHORIZATION_REQUEST_RESPONSE:
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
