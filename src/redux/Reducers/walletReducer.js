import {
  SESSION_SUCCESS,
  WALLET_ITEMS_FAILED,
  WALLET_ITEMS_SUCCESS,
} from "../Types/walletTypes";

const INITIAL_STATE = {
  isLoading: true,
  walletInfo: [],
  session: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WALLET_ITEMS_SUCCESS:
      return {
        ...state,
        walletInfo: action.payload,
        isLoading: false,
      };
    case WALLET_ITEMS_FAILED:
      return {
        ...state,
        isLoading: true,
      };
    case SESSION_SUCCESS:
      return {
        ...state,
        session: action.payload,
        isLoading: true,
      };

    default:
      return state;
  }
};
