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
import { loginWithPhone } from "../../redux/Actions/authActions";

import { useTranslation } from "react-i18next";
import CheckBox from "@react-native-community/checkbox";
import { Color } from "../../config/color";

function SignInPhone() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [splittedPhoneNumber, setSplittedPhoneNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");

  const [isChecked, setChecked] = useState(false);

  const loginEvent = async () => {
    dispatch(loginWithPhone(splittedPhoneNumber, password, navigation));
  };

  // useEffect(() => {
  //   storage
  //     .load({
  //       key: "localSignInPhone",
  //       autoSync: true,
  //       syncInBackground: true,
  //       syncParams: {
  //         extraFetchOptions: {},
  //         someFlag: true,
  //       },
  //     })
  //     .then((res) => {
  //       dispatch(loginWithPhone(res.username, res.password, navigation));
  //     })
  //     .catch((err) => {
  //       return false;
  //     });
  // }, []);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!splittedPhoneNumber) {
      handleError(t("ERRORINPUTPHONE1"), "phone");
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
          key: "localSignInPhone",
          data: {
            autoSignIn: true,
            phoneNumber: phoneNumber,
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

  const handleOnchange = (text, input) => {
    //setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const splitPhoneNumber = (phoneNumber) => {
    setSplittedPhoneNumber(
      phoneNumber
        .split("(")
        .join("")
        .split(")")
        .join("")
        .split(" ")
        .join("")
        .split("-")
        .join("")
    );
  };

  const formatPhoneNumber = (phoneNumber) => {
    let newText = ``;
    let cleaned = (`` + phoneNumber).replace(/\D/g, ``);
    for (var i = 0; i < cleaned.length; i++) {
      if (i === 0) {
        newText = `(`;
      } else if (i === 3) {
        newText = newText + `) `;
      } else if (i === 6) {
        newText = newText + `-`;
      }
      newText = newText + cleaned[i];
    }
    setPhoneNumber(newText);
  };
  const { auth } = useSelector((state) => state);

  return (
    <View style={styles.signInBackground}>
      <View style={styles.inputArea}>
        <SignUpInputComponent
          input
          icon="phone"
          placeHolder={t("LOGINPLACEHOLDERPHONE")}
          keyboardType="numbers-and-punctuation"
          onChangeText={(text) => {
            handleOnchange(text, "phone");
            formatPhoneNumber(text);
            splitPhoneNumber(text);
          }}
          maxLength={14}
          onFocus={() => handleError(null, "phone")}
          error={errors.splittedPhoneNumber}
          value={phoneNumber}
        />

        <SignUpInputComponent
          ponent
          input
          icon="lock"
          placeHolder={t("LOGINPLACEHOLDERPASSWORD")}
          keyboardType="default"
          isPassword={true}
          onChangeText={(password) => setPassword(password)}
          onFocus={() => handleError(null, "password")}
          error={errors.password}
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

export default connect(mapStateToProps, { loginWithPhone })(SignInPhone);
