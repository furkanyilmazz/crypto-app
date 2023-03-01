import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { Color } from "../../config/color";
import { StyleVariables } from "../../config/style-variables";

import CountDown from "react-native-countdown-component";

import { verifyEmail, verifyPhone } from "../../redux/Actions/authActions";

import { useDispatch } from "react-redux";

import Person from "../../assets/icons/person";
import { useTranslation } from "react-i18next";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SignUpInputVerifyComponent(props) {
  const { t } = useTranslation();
  const [focused, setFocused] = useState(false);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [send, setSend] = useState(t("REGISTERCODESENDBUTTON"));

  useEffect(() => {
    setShow(true);
    props.isMail
      ? dispatch(verifyEmail(props.email))
      : dispatch(verifyPhone(props.phoneNumber));
  }, []);

  return (
    <View>
      <View style={styles.inputBackground}>
        {props.icon === "person" ? (
          <Person
            width={wp("7%")}
            height={wp("7%")}
            style={styles.SignUpInputIcon}
            fill={focused ? Color.textShadowWhite : Color.inputPlaceholder}
          />
        ) : null}
        <TextInput
          focusable={true}
          autoFocus={true}
          ref={props.ref}
          style={styles.SignUpInputComponent}
          onChangeText={props.onChangeText}
          placeholder={t("REGISTERINPUTENDINPUT")}
          keyboardType="numbers-and-punctuation"
          keyboardAppearance="dark"
          disableFullscreenUI={true}
          placeholderTextColor={Color.inputPlaceholder}
          onFocus={() => {
            setFocused(true), props.onFocus;
          }}
          maxLength={6}
          onEndEditing={() => setFocused(false)}
          error={props.error}
        />
        {/* {show ? (
          <CountDown
            size={30}
            until={60}
            onFinish={() => {
              setShow(false);
              setSend(t("REGISTERCODERESENDBUTTON"));
            }}
            digitStyle={styles.digitStyle}
            digitTxtStyle={styles.digitTxtStyle}
            timeLabelStyle={styles.timeLabelStyle}
            timeToShow={["S"]}
            timeLabels={{ m: null, s: null }}
          />
        ) : (
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              setShow(true);
              props.isMail
                ? dispatch(verifyEmail(props.email))
                : dispatch(verifyPhone(props.phoneNumber));
            }}
          >
            <Text style={styles.sendButtonText}>{send}</Text>
          </TouchableOpacity>
        )} */}
      </View>
      {props.error && (
        <Text style={styles.errorText}>{props.error ? props.error : null}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  digitStyle: {
    backgroundColor: null,
    height: StyleVariables.width * 0.13,
  },
  digitTxtStyle: {
    fontSize: wp("3.3%"),
    color: Color.textColor,
    opacity: 0.8,
  },
  timeLabelStyle: {
    justifyContent: "center",
  },
  inputBackground: {
    backgroundColor: Color.inputBackground,
    alignSelf: "center",
    paddingLeft: StyleVariables.width * 0.02,
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: StyleVariables.height * 0.01,
    height: StyleVariables.width * 0.12,
    width: "80%",
  },
  SignUpInputComponent: {
    paddingLeft: StyleVariables.width * 0.02,
    height: StyleVariables.width * 0.12,
    color: Color.textShadowWhite,
    flex: 1,
  },
  SignUpInputIcon: {
    alignSelf: "center",
  },
  EyeIcon: {
    alignSelf: "center",
    marginRight: StyleVariables.width * 0.04,
  },
  sendButton: {
    justifyContent: "center",
    marginHorizontal: StyleVariables.width * 0.02,
    paddingHorizontal: StyleVariables.width * 0.01,
    borderRadius: 10,
  },
  sendButtonText: {
    color: Color.textShadowWhite,
    fontFamily: "Poppins-Medium",
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontSize: wp("3.3%"),
  },
  errorText: {
    color: Color.error,
    marginLeft: StyleVariables.width * 0.1,
    marginTop: StyleVariables.height * -0.01,
  },
});
