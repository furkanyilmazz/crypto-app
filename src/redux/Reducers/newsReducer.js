import {
  GET_ALL_NEWS_SUCCESS,
  GET_ALL_NEWS_FAILED,
  NEWS_AUTHOR,
} from "../Types/newsTypes";

const INITIAL_STATE = {
  isLoading: true,
  allNews: [],
  newsAuthors: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_NEWS_SUCCESS:
      return {
        ...state,
        allNews: action.payload,
        isLoading: false,
      };
    case GET_ALL_NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case NEWS_AUTHOR:
      return {
        ...state,
        newsAuthors: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
