import {
  ALL_PORTFOLIOS_FAIL,
  ALL_PORTFOLIOS_SUCCESS,
  PORTFOLIO_ADD_FAIL,
  PORTFOLIO_ADD_START,
  PORTFOLIO_ADD_SUCCESS,
  SIGNALR_CONNECT_FAILED,
  SIGNALR_CONNECT_START,
  SIGNALR_CONNECT_SUCCESS,
  SIGNALR_CONNECT_SUCCESS_COIN_DETAIL,
  SIGNALR_CONNECT_SUCCESS_COIN_DETAIL_CHART,
  SIGNALR_CONNECT_SUCCESS_COIN_DETAIL_FAILED,
  SIGNALR_DISCONNECTED,
  SIGNALR_RECONNECTED,
} from "../Types/portfolioTypes";

const INITIAL_STATE = {
  portfolioData: [],
  coinList: [],
  chartData: [],
  portfolioId: [],
  portfolioAllData: [],
  allPortfolios: [],
  currentPortfolioId: 0,
  currentPortfolioName: null,
  isLoading: false,
  isDetail: false,
  isConnected: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNALR_CONNECT_START:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNALR_CONNECT_SUCCESS:
      return {
        ...state,
        portfolioData: action.payload,
        chartData: action.payload.chart,
        coinList: action.payload.portfolio.portfolioTokens,
        portfolioId: action.payload.portfolio.id,
        portfolioAllData: action.payload.portfolio,
        currentPortfolioName: action.payload.portfolio.name,
        currentPortfolioId: action.payload.portfolio.id,
        isConnected: true,
      };

    case SIGNALR_CONNECT_FAILED:
      return {
        ...state,
        isConnected: false,
      };

    case PORTFOLIO_ADD_START:
      return {
        ...state,
        isLoading: true,
      };
    case PORTFOLIO_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case PORTFOLIO_ADD_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case ALL_PORTFOLIOS_SUCCESS:
      return {
        ...state,
        allPortfolios: action.payload,
      };

    case ALL_PORTFOLIOS_FAIL:
      return {
        ...state,
      };

    case SIGNALR_DISCONNECTED:
      return {
        ...state,
        isDetail: true,
        isConnected: false,
      };
    case SIGNALR_RECONNECTED:
      return {
        ...state,
        isDetail: false,
      };

    default:
      return state;
  }
};
