import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";

import { styles } from "./style";
import SignUpInputComponent from "../../components/SignUpInputComponent/SignUpInputComponent";
import NextButtonComponent from "../../components/NextButtonComponent/NextButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch, useSelector } from "react-redux";

import { loginWithUserName } from "../../redux/Actions/authActions";
import { Color } from "../../config/color";

import storage from "../../config/storage";

import { useTranslation } from "react-i18next";
import CheckBox from "@react-native-community/checkbox";

import TouchID from "react-native-touch-id";
import { setFaceId } from "../../redux/Actions/userActions";

const optionalConfigObject = {
  title: "Authentication Required", // Android
  imageColor: "#e00606", // Android
  imageErrorColor: "#ff0000", // Android
  sensorDescription: "Touch sensor", // Android
  sensorErrorDescription: "Failed", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

function SignInUsername() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  const [errors, setErrors] = useState({});

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setChecked] = useState(false);

  const loginEvent = async () => {
    dispatch(loginWithUserName(username, password, navigation));
  };

  useEffect(() => {
    storage
      .load({
        key: "localSignInUsername",
        autoSync: true,
        syncInBackground: true,
        syncParams: {
          extraFetchOptions: {},
          someFlag: true,
        },
      })
      .then((res) => {
        TouchID.authenticate(
          "to demo this react-native component",
          optionalConfigObject
        )
          .then((success) => {
            dispatch(loginWithUserName(res.username, res.password, navigation));
            dispatch(setFaceId(true));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        return false;
      });
  }, []);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!username) {
      handleError(t("ERRORINPUTUSERNAME1"), "username");
      isValid = false;
    } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
      handleError(t("ERRORINPUTUSERNAME2"), "username");
      isValid = false;
    }

    if (!password) {
      handleError(t("ERRORINPUTPASSWORD1"), "password");
      isValid = false;
    } else if (password.length < 8) {
      handleError(t("ERRORINPUTPASSWORD2"), "password");
      isValid = false;
    }

    if (isValid) {
      loginEvent();
      if (isChecked === true) {
        storage.save({
          key: "localSignInUsername",
          data: {
            autoSignIn: true,
            username: username,
            password: password,
          },
          expires: 10000 * 3600,
        });
      }
    }
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View style={styles.signInBackground}>
      <View style={styles.inputArea}>
        <SignUpInputComponent
          input
          placeHolder={"Kullanıcı adınız"}
          keyboardType="default"
          icon="happy-outline"
          onChangeText={(username) => setUsername(username)}
          onFocus={() => handleError(null, "username")}
          error={errors.username}
          value={username}
        />

        <SignUpInputComponent
          ponent
          input
          icon="lock"
          placeHolder={"Şifreniz"}
          keyboardType="default"
          isPassword={true}
          onChangeText={(password) => setPassword(password)}
          onFocus={() => handleError(null, "password")}
          error={errors.password}
          value={password}
        />

        <View style={styles.forgotPasswordArea}>
          <TouchableOpacity
            style={styles.forgotPasswordText}
            onPress={() => {
              navigation.navigate("ForgotPasswordScreen");
            }}
          >
            <Text style={styles.forgotPasswordText}>
              {t("LOGINFORGOTPASSWORD")}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.checkboxTextArea}
          onPress={() => {
            setChecked(!isChecked);
          }}
        >
          <View style={styles.section}>
            <CheckBox
              style={styles.checkbox}
              value={isChecked}
              tintColor={isChecked ? "#858CFF" : Color.inputIcon}
              onCheckColor={"#858CFF"}
              tintColors={["#858CFF", "#858CFF"]}
              onTintColor={"#858CFF"}
            />
            <Text style={styles.checkboxText}>
              Beni{" "}
              <Text style={[styles.checkboxText, styles.checkBoxTextBlue]}>
                hatırla
              </Text>{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.signInButton}>
        <NextButtonComponent
          text={t("LOGINBUTTON")}
          onPress={validate}
          disabled={auth.isLoading ? true : false}
        />
      </View>

      <View style={styles.otherSignUpArea}>
        {/* <Text style={styles.signUpText}>Birlikte giriş yap;</Text>
        <View style={styles.platformIcons}>
          <Ionicons
            name="logo-google"
            size={35}
            style={styles.SignUpInputIcon}
          />
          <Ionicons
            name="logo-apple"
            size={35}
            style={styles.SignUpInputIcon}
          />
        </View> */}
        <View style={styles.signUpTextArea}>
          <Text style={styles.signUpText}>{t("LOGINHAVENTACCOUNT1")} </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUpStepOne");
            }}
          >
            <Text style={[styles.signUpText, styles.signUpTextBlue]}>
              {" "}
              {t("LOGINHAVENTACCOUNT2")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { loginWithUserName })(SignInUsername);
