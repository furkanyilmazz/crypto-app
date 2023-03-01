import {
  SET_WELCOME_SCREEN,
  SET_DARK_MODE,
  SET_FACE_ID,
  SET_BOTTOMBAR,
  SET_BOTTOMBAR_TRUE,
  SET_BOTTOMBAR_FALSE,
} from "../Types/userTypes";

const INITIAL_STATE = {
  isWelcomeScreen: false,
  faceId: false,
  darkMode: true,
  bottomHide: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WELCOME_SCREEN:
      return {
        ...state,
        isWelcomeScreen: action.payload,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case SET_FACE_ID:
      return {
        ...state,
        faceId: action.payload,
      };
    case SET_BOTTOMBAR_TRUE:
      return {
        ...state,
        bottomHide: true,
      };
    case SET_BOTTOMBAR_FALSE:
      return {
        ...state,
        bottomHide: false,
      };
    default:
      return state;
  }
};
