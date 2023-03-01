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

//config variables
let userTokenG;
var signalR = require("@microsoft/signalr");
import { API_URL } from "../../../config";
import { signalRDisconnect } from "./portfolioActions";

const baseURL = API_URL + "api/CommonMarket/";

const connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Information)
  .withUrl(API_URL + "binance", {
    accessTokenFactory: () => userTokenG,
  })
  .build();

export const signalRmarket = (userToken, symbol) => {
  userTokenG = userToken;
  return async (dispatch) => {
    try {
      dispatch(signalRDisconnect());
      dispatch({ type: SIGNALR_MARKET_CONNECT_START });
      await connection.start().then(() => {
        connection.stream("GetDetailAsync", symbol).subscribe({
          next: (item) => {
            dispatch({
              type: SIGNALR_MARKET_CONNECT_SUCCESS,
              payload: item,
            });
          },
          closed: () => {
            dispatch({ type: SIGNALR_MARKET_DISCONNECTED });
          },

          error: (err) => {
            console.log(err);
            console.log(connection.state);
            dispatch({ type: SIGNALR_MARKET_CONNECT_FAILED });
          },
        });
      });
    } catch (err) {
      dispatch({ type: SIGNALR_MARKET_CONNECT_FAILED });
      console.log(err);
    }
  };
};

export const signalRMarketDisconnect = () => {
  return async (dispatch) => {
    dispatch({ type: SIGNALR_MARKET_DISCONNECTED });
    connection.stop();
  };
};

export const getAllMarketValues = () => {
  return async (dispatch) => {
    await dispatch({ type: GET_MARKET_START });
    await fetch(baseURL + "GetAllMarketValues", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MARKET_SUCCESS, payload: json.data });
      })
      .catch((error) => {
        console.log(error);
        // AlertEvent(
        //   "HATA!",
        //   "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        // );
        dispatch({ type: GET_MARKET_FAILED });
      });
  };
};
