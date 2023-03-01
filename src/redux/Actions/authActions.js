import {
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_FAILED,
  FORGOT_PASSWORD_MAIL,
  FORGOT_PASSWORD_PHONE,
  LOG_OUT,
  VERIFICATION_CODE_MATCH_FAIL,
  VERIFICATION_CODE_MATCH_START,
  VERIFICATION_CODE_MATCH_SUCCESS,
  VERIFICATION_CODE_MAIL_MATCH_START,
  VERIFICATION_CODE_PHONE_MATCH_FAIL,
  VERIFICATION_CODE_PHONE_MATCH_SUCCESS,
  VERIFICATION_CODE_PHONE_MATCH_START,
  VERIFICATION_CODE_MAIL_MATCH_FAIL,
  VERIFICATION_CODE_MAIL_MATCH_SUCCESS,
  FORGOT_PASSWORD_MAIL_START,
  FORGOT_PASSWORD_MAIL_FAILED,
  FORGOT_PASSWORD_MAIL_SUCCESS,
} from "../Types/authTypes";

//config variables
import { AlertEvent } from "../../components/Alert/Alert";
import { API_URL } from "../../../config";
import { Alert } from "react-native";
import {
  signalRportfolio,
} from "../Actions/portfolioActions";


const baseURL = API_URL + "api/Auth/";

//Kayıt ol
export const registerUser = (user, navigation) => {
  return async (dispatch) => {
    await dispatch({ type: REGISTER_START });
    await fetch(baseURL + "Register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        birth: user.birth,
        password: user.password,
        userName: user.userName,
        emailAddress: user.emailAddress,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); ///register console
        if (json.resultStatus === 0) {
          dispatch({ type: REGISTER_SUCCESS });
          console.log("Kayıt başarılı");
          navigation.replace("SignUpFinishScreen", {
            actionType: "REGISTER_SUCCESS",
          });
        }
        if (json.resultStatus === 1) {
          Alert.alert("Hata", json.data);
          dispatch({ type: REGISTER_FAILED });
        }
        if (json.resultStatus === 2) {
          Alert.alert("Hata2", json.data);
          dispatch({ type: REGISTER_FAILED });
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA!",
          "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        );
        dispatch({ type: REGISTER_FAILED });
      });
  };
};

//kullanıcı adıyla giriş yapma
export const loginWithUserName = (userName, password, navigation) => {
  return async (dispatch) => {
    await dispatch({ type: LOGIN_START });
    await fetch(baseURL + "LoginWithUserName", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json["resultStatus"] === 0) {
          console.log("Giriş Başarılı");
          const user = json["data"]["user"];
          const token = json["data"]["token"];
          dispatch({
            type: LOGIN_SUCCESS,
            payload: [token, user],
            isAuth: true,
          });

          dispatch(signalRportfolio(token.token, user.portfolioGetDto.id));

          navigation.replace("HomeScreen");
        } else if (json["resultStatus"] === 1) {
          dispatch({ type: LOGIN_FAILED });
          AlertEvent("Giriş Başarısız", json["data"]);
        } else {
          dispatch({ type: LOGIN_FAILED });
          AlertEvent("Giriş Başarısız", "Kullanıcı adı veya şifre hatalı");
          console.log("Giriş yapılamadı! HATA!!");
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA!",
          "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        );
        dispatch({ type: LOGIN_FAILED });
      });
  };
};

//Telefon ile giriş yapma
export const loginWithPhone = (phoneNumber, password, navigation) => {
  return async (dispatch) => {
    await dispatch({ type: LOGIN_START });
    await fetch(baseURL + "LoginWithPhone", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json["resultStatus"] === 0) {
          console.log("Giriş Başarılı");
          const user = json["data"]["user"];
          const token = json["data"]["token"];

          dispatch({
            type: LOGIN_SUCCESS,
            payload: [token, user],
            isAuth: true,
          });

          dispatch(signalRportfolio(token.token, user.portfolioGetDto.id));

          navigation.replace("HomeScreen");
        } else if (json["resultStatus"] === 1) {
          dispatch({ type: LOGIN_FAILED });
          AlertEvent("Giriş Başarısız", json["data"]);
        } else {
          dispatch({ type: LOGIN_FAILED });
          AlertEvent("Giriş Başarısız", "Telefon numarası veya şifre hatalı");
          console.log("Giriş yapılamadı! HATA!!");
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA!",
          "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        );
        dispatch({ type: LOGIN_FAILED });
      });
  };
};

//Mail ile giriş yapma
export const loginWithEmail = (emailAddress, password, navigation) => {
  return async (dispatch) => {
    await dispatch({ type: LOGIN_START });
    await fetch(baseURL + "LoginWithEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: emailAddress,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json["resultStatus"] === 0) {
          console.log("Giriş Başarılı");
          const user = json["data"]["user"];
          const token = json["data"]["token"];

          dispatch({
            type: LOGIN_SUCCESS,
            payload: [token, user],
            isAuth: true,
          });

          dispatch(signalRportfolio(token.token, user.portfolioGetDto.id));

          navigation.replace("HomeScreen");
        } else if (json["resultStatus"] === 1) {
          dispatch({ type: LOGIN_FAILED });
          AlertEvent("Giriş Başarısız", json["data"]);
        } else {
          dispatch({ type: LOGIN_FAILED });
          AlertEvent("Giriş Başarısız", "E-mail adresiniz veya şifre hatalı");
          console.log("Giriş yapılamadı! HATA!!");
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA!",
          "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        );
        dispatch({ type: LOGIN_FAILED });
      });
  };
};

//telefon numarasını maile eşleme
export const verificationCodeMatch = (
  phoneNumber,
  emailAddress,
  name,
  surname,
  username,
  password,
  splittedDatePicker,
  navigation
) => {
  return async (dispatch) => {
    await dispatch({ type: VERIFICATION_CODE_MATCH_START });
    await fetch(
      baseURL +
        `VerificationCodeAdd?phoneNumber=${phoneNumber}&emailAddress=${emailAddress}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.resultStatus === 0) {
          dispatch({ type: VERIFICATION_CODE_MATCH_SUCCESS });
          navigation.navigate("SignUpStepFour", {
            name,
            surname,
            username,
            password,
            phoneNumber,
            emailAddress,
            splittedDatePicker,
          });
          console.log("Eşleşme başarılı");
        }
        if (json.resultStatus === 1) {
          Alert.alert("Hata", json.data);
          dispatch({ type: VERIFICATION_CODE_MATCH_FAIL });
          navigation.navigate("SignUpStepOne");
        }
        if (json.resultStatus === 2) {
          Alert.alert("Hata", json.Message);
          dispatch({ type: VERIFICATION_CODE_MATCH_FAIL });
        }
      })
      .catch((error) => {
        dispatch({ type: VERIFICATION_CODE_MATCH_FAIL });
        console.log(error);
        Alert.alert("Hata", "Sunucularımıza erişirken bir hata meydana geldi.");
      });
  };
};

export const tryLocalSignin = (navigation) => {
  return async (dispatch) => {
    const loginSuccess = async (data) => {
      await dispatch({ type: LOGIN_SUCCESS, payload: data, isAuth: true });
    };
    const data = JSON.parse(stData);
    if (data) {
      loginSuccess(data).then(() => tutorialChecker(navigation));
    } else {
      navigation.reset({ index: 0, routes: [{ name: "LogInWithPhone" }] });
    }
  };
};

//şifremi unuttum mail
export const forgotPassword = (
  emailAddress,
  password,
  reTypePassword,
  navigation
) => {
  return async (dispatch) => {
    await dispatch({ type: FORGOT_PASSWORD_MAIL_START });
    await fetch(baseURL + "ForgotPasswordEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: emailAddress,
        password: password,
        reTypePassword: reTypePassword,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.resultStatus === 0) {
        dispatch({ type: FORGOT_PASSWORD_MAIL_SUCCESS });
        navigation.navigate("ForgotPassswordSuccessScreen");
        console.log("Şifre değiştirme başarılı");
        }
        if (json.resultStatus === 1) {
        Alert.alert("Hata", json.data);
        dispatch({ type: FORGOT_PASSWORD_MAIL_FAILED });
        }
        if (json.resultStatus === 2) {
        Alert.alert("Hata", json.Message);
        dispatch({ type: FORGOT_PASSWORD_MAIL_FAILED });
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA!",
          "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        );
        dispatch({ type: FORGOT_PASSWORD_MAIL_FAILED });
      });
  };
};

export const changePasswordl = (
  id,
  token,
  password,
  newPassword,
  reTypePassword,
  setUpdateResult,
  navigation
) => {
  return async (dispatch) => {
    await fetch(baseURL + "UpdatePassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId: id,
        Password: password,
        NewPassword: newPassword,
        ReTypePassword: reTypePassword,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ResultStatus === 0) {
          const user = json.Data.User;
          setUpdateResult(user);
          navigation.navigate("SettingUpdateSelection");
        } else {
          setUpdateResult(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setUpdateResult(false);
      });
  };
};

//Sonra
export const sendCodeForEmailUpdate = async (
  token,
  id,
  setNewCode,
  navigation
) => {
  await fetch(baseURL + "ReSendActivationCode?userId=" + id.toString(), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.ResultStatus === 0) {
        setNewCode(json.Data.User.VerificationCode);
        navigation.navigate("EmailVerification");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

//Email doğrulama
export const verifyEmail = (emailAddress) => {
  return async (dispatch) => {
    await fetch(
      baseURL + "SendActivationCodeEmail?emailAddress=" + emailAddress,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: emailAddress,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json); /// console
        if (json.resultStatus === 0) {
          console.log("Maile kod gönderildi -------- " + emailAddress);
        } else if (json.resultStatus === 1) {
          console.log("Json Doğrulama kodu yanlış");
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA",
          "Bir hata oldu. Lütfen bize bildirin. email: email: info@fahax.com"
        );
      });
  };
};

//Telefon doğrulama
export const verifyPhone = (phoneNumber) => {
  return async (dispatch) => {
    await fetch(
      baseURL + "SendActivationCodePhone?phoneNumber=" + phoneNumber,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json); /// console
        if (json.resultStatus === 0) {
          console.log("Telefona kod gönderildi -------- " + phoneNumber);
        } else if (json.resultStatus === 1) {
          console.log("Json Doğrulama kodu yanlış");
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA",
          "Bir hata oldu. Lütfen bize bildirin. email: email: info@fahax.com"
        );
      });
  };
};

//Telefona gelen kodu çekme
export const verifyCodePhone = (phoneNumber, verifyCode) => {
  return async (dispatch) => {
    await dispatch({ type: VERIFICATION_CODE_PHONE_MATCH_START });
    return await fetch(baseURL + "ActivePhoneByActivationCode", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        activationCode: verifyCode,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.resultStatus === 0) {
          dispatch({
            type: VERIFICATION_CODE_PHONE_MATCH_SUCCESS,
            payload: true,
          });
          return true;
        } else if (json.resultStatus === 1) {
          dispatch({ type: VERIFICATION_CODE_PHONE_MATCH_FAIL });
          console.log(" Telefon doğrulama kodu yanlış !!! ");
          Alert.alert("HATA", json.data);
          return false;
        } else if (json.resultStatus === 2) {
          dispatch({ type: VERIFICATION_CODE_PHONE_MATCH_FAIL });
          Alert.alert("HATA", "Telefon doğrulama kodu boş olamaz !!!");
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA",
          "Bir hata oldu. Lütfen bize bildirin. email: email: info@fahax.com"
        );
      });
  };
};

//Maile gelen kodu çekme
export const verifyCodeMail = (mail, verifyCode) => {
  return async (dispatch) => {
    await dispatch({ type: VERIFICATION_CODE_MAIL_MATCH_START });
    return await fetch(baseURL + "ActiveEmailByActivationCode", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: mail,
        activationCode: verifyCode,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.resultStatus === 0) {
          dispatch({ type: VERIFICATION_CODE_MAIL_MATCH_SUCCESS });
          console.log("Mail doğrulama kodu doğru");
          return true;
        } else if (json.resultStatus === 1) {
          dispatch({ type: VERIFICATION_CODE_MAIL_MATCH_FAIL });
          console.log(" Mail doğrulama kodu yanlış !!! ");
          Alert.alert("HATA", "Mail doğrulama kodu yanlış !!!");
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA",
          "Bir hata oldu. Lütfen bize bildirin. email: email: info@fahax.com"
        );
      });
  };
};

export const signOut = (navigation) => {
  return async (dispatch) => {
    await dispatch({ type: LOG_OUT });
    navigation.reset({
      index: 1,
      routes: [{ name: "SignInScreen" }],
    });
  };
};

const tutorialChecker = async (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: tutDone === "true" ? "HomeScreen" : "IntroScreen" }],
  });
};
