import { applyMiddleware, combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import portfolioReducer from "./portfolioReducer";
import tokenReducer from "./tokenReducer";
import newsReducer from "./newsReducer";
import walletReducer from "./walletReducer";
import marketReducer from "./marketReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  portfolio: portfolioReducer,
  token: tokenReducer,
  news: newsReducer,
  wallet: walletReducer,
  market: marketReducer,
  language: languageReducer,
});
