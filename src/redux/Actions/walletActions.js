import { SESSION_SUCCESS, WALLET_ITEMS_SUCCESS } from "../Types/walletTypes";

//config variables

import { API_URL } from "../../../config";
const baseURL = API_URL + "api/Wallets/";

export const getWalletAccountInfo = (userToken, publicKey, session) => {
  return async (dispatch) => {
    await fetch(baseURL + `GetAccountInfo?address=${publicKey}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + userToken,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: WALLET_ITEMS_SUCCESS,
          payload: json,
        });
        dispatch({
          type: SESSION_SUCCESS,
          payload: session,
        });
      });
  };
};
