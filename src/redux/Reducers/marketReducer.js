import {
  GET_MARKET_FAILED,
  GET_MARKET_START,
  GET_MARKET_SUCCESS,
  SIGNALR_MARKET_CONNECT_START,
  SIGNALR_MARKET_CONNECT_FAILED,
  SIGNALR_MARKET_CONNECT_SUCCESS,
  SIGNALR_MARKET_DISCONNECTED,
  SIGNALR_MARKET_RECONNECTED,
} from "../Types/marketTypes";

const INITIAL_STATE = {
  binance: [],
  coincap: [],
  pancakeswap: [],
  polygon: [],
  marketSocketData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MARKET_START:
      return {
        ...state,
      };
    case GET_MARKET_SUCCESS:
      return {
        ...state,
        binance: action.payload.binance,
        coincap: action.payload.coinCap,
        pancakeswap: action.payload.pancakeSwap,
        polygon: action.payload.polygon,
      };

    case GET_MARKET_FAILED:
      return {
        ...state,
      };

    case SIGNALR_MARKET_CONNECT_START:
      return {
        ...state,
      };

    case SIGNALR_MARKET_CONNECT_SUCCESS:
      return {
        ...state,
        marketSocketData: action.payload,
      };

    case SIGNALR_MARKET_CONNECT_FAILED:
      return {
        ...state,
      };

    case SIGNALR_MARKET_DISCONNECTED:
      return {
        ...state,
      };

    case SIGNALR_MARKET_RECONNECTED:
      return {
        ...state,
      };

    default:
      return state;
  }
};
