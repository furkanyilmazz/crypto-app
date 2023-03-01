import { NEWS_AUTHOR, GET_ALL_NEWS_SUCCESS } from "../Types/newsTypes";

import { API_URL } from "../../../config";
const baseURL = API_URL + "api/GoogleNews/";

export const getAllNews = () => {
  return async (dispatch) => {
    await fetch(baseURL + "GetAllByAuthorName", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_ALL_NEWS_SUCCESS,
          payload: json,
        });
      });
  };
};
