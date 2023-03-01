import {
  SET_CURRENT_LANGUAGE_FAILED,
  SET_CURRENT_LANGUAGE_SUCCESS,
} from "../Types/languageTypes";

export const changeLanguageLocalize = (language) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_LANGUAGE_SUCCESS,
    payload: language,
  });
};
