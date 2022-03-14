import actionsTypes from '../actionsTypes/actionsTypes';

const initialState = {
  news: [],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionsTypes.GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionsTypes.GET_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionsTypes.GET_NEWS_RESPONSE:
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default newsReducer;
