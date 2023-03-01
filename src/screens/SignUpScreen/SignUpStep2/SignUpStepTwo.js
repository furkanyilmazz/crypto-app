import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { Color } from "../../../config/color";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";
import PhoneInput from "react-native-phone-number-input";

import { useNavigation } from "@react-navigation/native";
import { verificationCodeMatch } from "../../../redux/Actions/authActions";
import { useDispatch } from "react-redux";

import SignUpInputComponent from "../../../components/SignUpInputComponent/SignUpInputComponent";
import NextButtonComponent from "../../../components/NextButtonComponent/NextButtonComponent";

import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "../../../../config";
import { AlertEvent } from "../../../components/Alert/Alert";

export default function SignUpStepTwo(props) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const navParams = props.route.params;
  const dispatch = useDispatch();

  const username = navParams.username;
  const emailAddress = navParams.email;
  const password = navParams.password;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [splittedDatePicker, setSplittedDatePicker] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [datePicker, setDatePicker] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!name) {
      handleError(t("ERRORUSERNAME1"), "name");
      isValid = false;
    } else if (
      !name.match(/^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    ) {
      handleError(t("ERRORUSERNAME2"), "name");
      isValid = false;
    }

    if (!surname) {
      handleError(t("ERRORINPUTSURNAME1"), "surname");
      isValid = false;
    } else if (
      !surname.match(/^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    ) {
      handleError(t("ERRORINPUTSURNAME2"), "surname");
      isValid = false;
    }

    if (!phoneNumber) {
      handleError(t("ERRORINPUTPHONE"), "phoneNumber");
      isValid = false;
    } else {
      axios
        .get(
          API_URL +
            "api/Users/PhoneNumberAvailabilityCheck?phoneNumber=" +
            phoneNumber
        )
        .then((res) => {
          console.log(res.data.resultStatus);
          if (res.data["resultStatus"] != 0) {
            handleError(t("ERRORINPUTPHONE"), "phoneNumber");
            isValid = false;
            AlertEvent("error", "Phone number already exists");
          }
        });
    }

    if (!datePicker) {
      handleError(t("ERRORINPUTDATE1"), "date");
      isValid = false;
    } else if (datePicker.slice(3, 6) > 12) {
      handleError(t("ERRORINPUTDATE2"), "date");
      isValid = false;
    } else if (datePicker.slice(0, 2) > 31) {
      handleError(t("ERRORINPUTDATE2"), "date");
      isValid = false;
    } else if (datePicker.slice(7, 11) < 1930) {
      handleError(t("ERRORINPUTDATE3"), "date");
      isValid = false;
    } else if (datePicker.slice(7, 11) > 2022) {
      handleError(t("ERRORINPUTDATE3"), "date");
      isValid = false;
    } else if (datePicker.slice(7, 11).length !== 4) {
      handleError(t("ERRORINPUTDATE3"), "date");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const splitDatePicker = (datePicker) => {
    setSplittedDatePicker(datePicker.split(" ").join(""));
  };

  const formatDatePicker = (date) => {
    let newText = ``;
    let cleaned = (`` + date).replace(/\D/g, ``);
    for (var i = 0; i < cleaned.length; i++) {
      if (i === 0) {
        newText = ``;
      } else if (i === 2) {
        newText = newText + `/ `;
      } else if (i === 4) {
        newText = newText + `/`;
      }
      newText = newText + cleaned[i];
    }
    setDatePicker(newText);
  };

  const register = () => {
    console.log("telefon numarası 2: ", phoneNumber);
    setLoading(true);
    dispatch(
      verificationCodeMatch(
        phoneNumber,
        emailAddress,
        name,
        surname,
        username,
        password,
        splittedDatePicker,
        navigation
      )
    );
  };

  const handleOnchange = (text, input) => {
    // setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        >
          <View style={[styles.titleContainer]}>
            <Text style={styles.titleNormal}>
              {" "}
              {t("REGISTERTITLE3")} {"\n"}
              <Text style={styles.titleOutline}> {t("REGISTERTITLE4")} </Text>
            </Text>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.inputArea}
            >
              <SignUpInputComponent
                maxLength={30}
                input
                placeHolder={t("REGISTERINPUTNAME")}
                keyboardType="default"
                icon="happy-outline"
                onChangeText={(text) => {
                  setName(text);
                }}
                onFocus={() => handleError(null, "name")}
                error={errors.name}
                value={name}
              />
              <SignUpInputComponent
                maxLength={30}
                input
                placeHolder={t("REGISTERINPUTSURNAME")}
                keyboardType="default"
                icon="happy-outline"
                onChangeText={(text) => {
                  setSurname(text);
                }}
                onFocus={() => handleError(null, "surname")}
                error={errors.surname}
                value={surname}
              />
              <PhoneInput
                defaultCode="TR"
                layout="first"
                onChangeFormattedText={(text) => {
                  setPhoneNumber(text.split("+")[1]);
                }}
                withDarkTheme
                withShadow
                textInputStyle={styles.phoneInput}
                containerStyle={styles.phoneInputContainer}
                countryPickerButtonStyle={styles.phoneInputButton}
                textContainerStyle={styles.phoneInputTextContainer}
                error={errors.phoneNumber}
                value={phoneNumber}
                codeTextStyle={styles.phoneInputCodeText}
                placeholder={t("REGISTERINPUTPHONENUMBER")}
                flagButtonStyle={styles.phoneInputFlagButton}
                onFocus={() => handleError(null, "phoneNumber")}
              />
              <SignUpInputComponent
                input
                icon="calendar"
                placeHolder={t("REGISTERINPUTDATEPICKER")}
                keyboardType="numbers-and-punctuation"
                onChangeText={(text) => {
                  handleOnchange(text, "date");
                  formatDatePicker(text);
                  splitDatePicker(text);
                }}
                maxLength={11}
                onFocus={() => handleError(null, "date")}
                error={errors.date}
                value={datePicker}
              />
              <Text style={styles.datePickerInfo}>{t("ERRORINPUTDATE2")}</Text>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.signUpButton}>
            <NextButtonComponent
              text={t("REGISTERBUTTONFIRST")}
              onPress={validate}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
