import {
  GET_COINLIST_START,
  GET_COINLIST_SUCCESS,
  GET_COINLIST_FAIL,
} from "../Types/tokenTypes";
//config variables
import { API_URL } from "../../../config";
import { Alert } from "react-native";
const baseURL = API_URL + "api/Tokens/";

export const getCoinList = (token) => {
  return async (dispatch) => {
    await dispatch({ type: GET_COINLIST_START });
    await fetch(baseURL + "GetAll", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json["resultStatus"] === 0) {
          console.log("Coinler Listelendi...");
          dispatch({
            type: GET_COINLIST_SUCCESS,
            payload: json.data,
          });
        } else {
          dispatch({ type: GET_COINLIST_FAIL });
          console.log("HATA!!" + json);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_COINLIST_FAIL });
      });
  };
};
