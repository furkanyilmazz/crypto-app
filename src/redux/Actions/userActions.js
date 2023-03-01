import {
  SET_BOTTOMBAR,
  SET_BOTTOMBAR_FALSE,
  SET_BOTTOMBAR_TRUE,
  SET_DARK_MODE,
  SET_FACE_ID,
  SET_WELCOME_SCREEN,
} from "../Types/userTypes";

//config variables
import { API_URL } from "../../../config";
const baseURL = API_URL + "api/Users/";

export const setWelcomeScreen = () => {
  return {
    type: SET_WELCOME_SCREEN,
    payload: true,
  };
};

export const setFaceId = (value) => {
  return {
    type: SET_FACE_ID,
    payload: value,
  };
};

export const setDarkMode = (value) => {
  return {
    type: SET_DARK_MODE,
    payload: value,
  };
};

export const setBottomBarTrue = () => {
  return {
    type: SET_BOTTOMBAR_TRUE,
  };
};

export const setBottomBarFalse = () => {
  return {
    type: SET_BOTTOMBAR_FALSE,
  };
};
