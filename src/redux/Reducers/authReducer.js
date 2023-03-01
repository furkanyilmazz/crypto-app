import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FORGOT_PASSWORD_MAIL,
  FORGOT_PASSWORD_PHONE,
  LOG_OUT,
  SEND_CODE_FOR_MAIL,
  SEND_CODE_FOR_PHONE,
  VERIFICATION_CODE_MATCH_START,
  VERIFICATION_CODE_MATCH_SUCCESS,
  VERIFICATION_CODE_MATCH_FAIL,
  VERIFICATION_CODE_MAIL_MATCH_START,
  VERIFICATION_CODE_MAIL_MATCH_SUCCESS,
  VERIFICATION_CODE_MAIL_MATCH_FAIL,
  VERIFICATION_CODE_PHONE_MATCH_START,
  VERIFICATION_CODE_PHONE_MATCH_SUCCESS,
  VERIFICATION_CODE_PHONE_MATCH_FAIL,
  FORGOT_PASSWORD_MAIL_START,
  FORGOT_PASSWORD_MAIL_SUCCESS,
  FORGOT_PASSWORD_MAIL_FAILED,
} from "../Types/authTypes";

const INITIAL_STATE = {
  isAuth: false,
  isLoading: false,
  user: {
    token: {},
    user: {},
  },
  verifyMailCode: false,
  verifyPhoneCode: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
      };
    case VERIFICATION_CODE_MATCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case VERIFICATION_CODE_MATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case VERIFICATION_CODE_MATCH_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case VERIFICATION_CODE_MAIL_MATCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case VERIFICATION_CODE_MAIL_MATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        verifyMailCode: true,
      };
    case VERIFICATION_CODE_MAIL_MATCH_FAIL:
      return {
        ...state,
        isLoading: false,
        verifyMailCode: false,
      };

    case VERIFICATION_CODE_PHONE_MATCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case VERIFICATION_CODE_PHONE_MATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        verifyPhoneCode: true,
      };
    case VERIFICATION_CODE_PHONE_MATCH_FAIL:
      return {
        ...state,
        isLoading: false,
        verifyPhoneCode: false,
      };

    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: action.isAuth,
        user: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
      };

    case FORGOT_PASSWORD_MAIL_START:
      return {
        ...state,
        isLoading: true,
      };
    case FORGOT_PASSWORD_MAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FORGOT_PASSWORD_MAIL_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case FORGOT_PASSWORD_PHONE:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SEND_CODE_FOR_MAIL:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SEND_CODE_FOR_PHONE:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case LOG_OUT:
      return {
        isAuth: false,
        isLoading: false,
        user: {
          toker: {},
          user: {},
        },
      };
    default:
      return state;
  }
};
