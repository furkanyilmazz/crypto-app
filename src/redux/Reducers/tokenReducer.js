import {
  GET_COINLIST_FAIL,
  GET_COINLIST_START,
  GET_COINLIST_SUCCESS,
} from "../Types/tokenTypes";

const INITIAL_STATE = {
  coinList: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COINLIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COINLIST_SUCCESS:
      return {
        ...state,
        coinList: action.payload,
        isLoading: false,
      };
    case GET_COINLIST_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
