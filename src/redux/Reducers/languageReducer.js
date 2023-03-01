import {
  SET_CURRENT_LANGUAGE,
  SET_CURRENT_LANGUAGE_FAILED,
  SET_CURRENT_LANGUAGE_SUCCESS,
} from "../Types/languageTypes";

const INITIAL_STATE = {
  isLoading: true,
  currentLanguage: "tr",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE_SUCCESS:
      return {
        ...state,
        currentLanguage: action.payload,
        isLoading: false,
      };
    case SET_CURRENT_LANGUAGE_FAILED:
      return {
        ...state,
        currentLanguage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
