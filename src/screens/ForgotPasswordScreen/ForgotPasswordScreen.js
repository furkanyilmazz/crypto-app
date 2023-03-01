import { View, Keyboard, Image } from "react-native";
import React, { useState, useEffect } from "react";

import { styles } from "./style";
import SignUpInputComponent from "../../components/SignUpInputComponent/SignUpInputComponent";
import NextButtonComponent from "../../components/NextButtonComponent/NextButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { forgotPassword } from "../../redux/Actions/authActions";

function ForgotPasswordScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const loginEvent = async () => {
    dispatch(forgotPassword(email, password, rePassword, navigation));
  };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!email) {
      handleError(t("ERRORINPUTMAIL1"), "email");
      isValid = false;
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      handleError(t("ERRORINPUTMAIL2"), "email");
      isValid = false;
    }

    if (!password) {
      handleError(t("ERRORINPUTPASSWORD1"), "password");
      isValid = false;
    } else if (password.length < 8) {
      handleError(t("ERRORINPUTPASSWORD2"), "password");
      isValid = false;
    }

    if (!rePassword) {
      handleError(t("ERRORINPUTPASSWORD1"), "repassword");
      isValid = false;
    } else if (rePassword.length < 8) {
      handleError(t("ERRORINPUTPASSWORD2"), "repassword");
      isValid = false;
    }

    if (password !== rePassword) {
      handleError(t("ERRORINPUTPASSWORD3"), "repassword");
      isValid = false;
    }

    if (isValid) {
      loginEvent();
    }
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  const { auth } = useSelector((state) => state);

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
      style={styles.signInBackground}
    >
      <Image
        source={require("../../assets/dinox/dinox_mutlu.png")}
        style={styles.dinoxImg}
      />
      <View style={styles.inputArea}>
        <SignUpInputComponent
          input
          placeHolder={t("LOGINPLACEHOLDEREMAIL")}
          keyboardType="email-address"
          icon="happy-outline"
          onChangeText={(email) => setEmail(email)}
          onFocus={() => handleError(null, "email")}
          error={errors.email}
          value={email}
        />

        <SignUpInputComponent
          ponent
          input
          icon="lock"
          isPassword={true}
          placeHolder={t("LOGINPLACEHOLDERPASSWORD")}
          keyboardType="default"
          onChangeText={(password) => setPassword(password)}
          onFocus={() => handleError(null, "password")}
          error={errors.password}
          value={password}
        />

        <SignUpInputComponent
          ponent
          input
          icon="lock"
          isPassword={true}
          placeHolder={t("LOGINPLACEHOLDERPASSWORDAGAIN")}
          keyboardType="default"
          onChangeText={(password) => setRePassword(password)}
          onFocus={() => handleError(null, "repassword")}
          error={errors.repassword}
          value={rePassword}
        />
      </View>

      <View style={styles.signInButton}>
        <NextButtonComponent
          text={t("LOGINBUTTON")}
          onPress={validate}
          disabled={auth.isLoading ? true : false}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, {})(ForgotPasswordScreen);
