import {
  GET_PORTFOLIO_ALL_ITEMS_SUCCESS,
  GET_PORTFOLIO_ID_SUCCESS,
  PORTFOLIO_ADD_FAIL,
  PORTFOLIO_ADD_START,
  PORTFOLIO_ADD_SUCCESS,
  PORTFOLIO_COIN_ADD_FAIL,
  PORTFOLIO_COIN_DELETE_FAIL,
  PORTFOLIO_COIN_DELETE_SUCCESS,
  SET_CURRENT_PORTFOLIO_ID,
  SIGNALR_CONNECT_FAILED,
  SIGNALR_CONNECT_SUCCESS_CDATA,
  SIGNALR_CONNECT_SUCCESS_CLİST,
  SIGNALR_CONNECT_SUCCESS_PDATA,
  SIGNALR_DISCONNECTED,
  SIGNALR_RECONNECTED,
  SET_CURRENT_PORTFOLIO_NAME,
  ALL_PORTFOLIOS_SUCCESS,
  SIGNALR_CONNECT_SUCCESS,
  SIGNALR_CONNECT_START,
} from "../Types/portfolioTypes";

//config variables
import { API_URL } from "../../../config";
import { signalRMarketDisconnect } from "./marketActions";

const baseURL = API_URL + "api/Portfolios/";

let userTokenG;
let userPortfolioId;
var signalR = require("@microsoft/signalr");

const connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Information)
  .withUrl(API_URL + "portfolio", {
    accessTokenFactory: () => userTokenG,
  })
  .build();

export const signalRportfolio = (userToken, portfolioId) => {
  userTokenG = userToken;
  userPortfolioId = portfolioId;
  return async (dispatch) => {
    try {
      dispatch({ type: SIGNALR_CONNECT_START });
      await connection.start().then(() => {
        connection.stream("DataStream", portfolioId).subscribe({
          next: (item) => {
            dispatch({
              type: SIGNALR_CONNECT_SUCCESS,
              payload: item,
            });
          },
          error: (err) => {
            console.log(err);
            console.log(connection.state);
            dispatch({ type: SIGNALR_CONNECT_FAILED });
          },
        });
      });
    } catch (err) {
      dispatch({ type: SIGNALR_CONNECT_FAILED });
      console.log(err);
    }
  };
};

export const signalRDisconnect = () => {
  return async (dispatch) => {
    dispatch({ type: SIGNALR_DISCONNECTED });
    connection.stop();
  };
};

export const signalRReconnect = () => {
  return async (dispatch) => {
    dispatch({ type: SIGNALR_RECONNECTED });
    signalRportfolio(userTokenG, userPortfolioId);
  };
};

export const getPortfoliosByUserId = (portfolioId) => {
  return async (dispatch) => {
    dispatch({
      type: GET_PORTFOLIO_ID_SUCCESS,
      payload: portfolioId,
    });
  };
};

export const reConnectPortfolio = () => {
  return async (dispatch) => {
    dispatch({ type: SIGNALR_RECONNECTED });
    dispatch(signalRportfolio(userTokenG, userPortfolioId));
  };
};

export const createPortfolio = (
  userToken,
  userId,
  portfolioName,
  navigation
) => {
  return async (dispatch) => {
    await dispatch({ type: PORTFOLIO_ADD_START });
    await fetch(
      baseURL +
        `CreatePortfolio?userId=${userId}&portfolioName=${portfolioName}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `bearer ${userToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json["resultStatus"] === 0) {
          dispatch({
            type: PORTFOLIO_ADD_SUCCESS,
          });
          dispatch(getAllPortfolios(userId, userToken)).then(() => {
            dispatch(getAllPortfolios(userId, userToken)).then(() => {
              navigation.goBack();
            });
          });
        } else {
          dispatch({ type: PORTFOLIO_ADD_FAILED });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: PORTFOLIO_ADD_FAIL });
      });
  };
};

export const getPortfolioById = (portfolioItems, navigation) => {
  return async (dispatch) => {
    // dispatch({
    //   type: GET_PORTFOLIO_ID_SUCCESS,
    //   payload: portfolioId,
    // });
    dispatch({
      type: GET_PORTFOLIO_ALL_ITEMS_SUCCESS,
      payload: portfolioItems,
    });
    navigation.navigate("HomeScreen");
  };
};

export const portfolioCoinDelete = (portfolioId, symbol) => {
  return async (dispatch) => {
    console.log(portfolioId, symbol);
    try {
      connection
        .invoke("DeletePortfolioTokenBySymbol", portfolioId, symbol)
        .then(() => {
          console.log("Coin deleted");
          dispatch({
            type: PORTFOLIO_COIN_DELETE_SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      dispatch({
        type: PORTFOLIO_COIN_DELETE_FAIL,
      });
    }
  };
};
export const portfolioCoinAdd = (
  swap,
  portfolioId,
  symbol,
  addOrUpdate,
  price,
  navigation
) => {
  return async () => {
    console.log(connection.state);
    try {
      await connection
        .invoke(
          swap ? "AddOrUpdatePrice" : "AddOrUpdateAmount",
          portfolioId,
          symbol,
          addOrUpdate ? parseFloat(price) : parseFloat(-price)
        )
        .then(() => {
          console.log("eklendi");
          navigation.navigate("PortfolioScreen");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllPortfolios = (userId, userToken) => {
  const bearer = "Bearer " + userToken;
  return async (dispatch) => {
    await fetch(
      `https://fhx.idealdata.com.tr/api/Portfolios/GetPortfoliosByUserId?userId=${userId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: bearer,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return dispatch({
          type: ALL_PORTFOLIOS_SUCCESS,
          payload: json.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAllPortfolio(false));
        return;
      });
  };
};

export const setCurrentPortfolioId = (portfolioId, portfolioName) => {
  return async (dispatch) => {
    dispatch({
      type: SET_CURRENT_PORTFOLIO_ID,
      payload: portfolioId,
    });
    dispatch({
      type: SET_CURRENT_PORTFOLIO_NAME,
      payload: portfolioName,
    });
    signalRDisconnect();
    setTimeout(() => {
      signalRportfolio(userTokenG, portfolioId);
    }, 1000);
  };
};
