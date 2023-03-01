import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Alert,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../style";
import { Color } from "../../../config/color";
import LinearGradient from "react-native-linear-gradient";
import CheckBox from "@react-native-community/checkbox";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import SignUpInputComponent from "../../../components/SignUpInputComponent/SignUpInputComponent";
import NextButtonComponent from "../../../components/NextButtonComponent/NextButtonComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";

import { useTranslation } from "react-i18next";
import KVKKScreen from "../KVKKScreen/KVKKScreen";
import { usernameControl } from "../../../redux/Actions/authActions";
import axios from "axios";
import { API_URL } from "../../../../config";
import { AlertEvent } from "../../../components/Alert/Alert";

export default function SignUpStepOne() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    axios
      .get(API_URL + "api/Users/UserNameAvailabilityCheck?userName=" + username)
      .then((res) => {
        console.log(res.data["resultStatus"]);
        console.log(res.data);
        if (res.data["resultStatus"] === 4) {
          handleError(t("ERRORUSERNAME3"), "username");
          isValid = false;
        }
      });

    axios
      .get(API_URL + "api/Users/EmailAvailabilityCheck?email=" + email)
      .then((res) => {
        console.log("---------------------------------------------------")
        console.log(res.data["resultStatus"]);
        console.log(res.data);
        if (res.data["resultStatus"] === 4) {
          handleError(t("ERROREMAIL3"), "email");
          isValid = false;
        }
      });
      

    if (!username) {
      handleError(t("ERRORUSERNAME1"), "username");
      isValid = false;
    } else if (
      !username.match(/^[\w'\-,.][^_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    ) {
      handleError(t("ERRORUSERNAME2"), "username");
      isValid = false;
    }

    if (!email) {
      handleError(t("ERRORMAIL1"), "email");
      isValid = false;
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      handleError(t("ERRORMAIL2"), "email");
      isValid = false;
      isValid = false;
    }

    if (!password) {
      handleError(t("ERRORINPUTPASSWORD1"), "password");
      isValid = false;
    } else if (password.length < 8) {
      handleError(t("ERRORINPUTPASSWORD2"), "password");
      isValid = false;
    } else if (password.length < 1) {
      handleError(t("ERRORINPUTPASSWORD1"), "password");
      isValid = false;
    }

    if (!passwordVerify) {
      handleError(t("ERRORINPUTPASSWORD1"), "passwordVerify");
      isValid = false;
    } else if (passwordVerify.length < 8) {
      handleError(t("ERRORINPUTPASSWORD2"), "passwordVerify");
      isValid = false;
    } else if (passwordVerify.length < 1) {
      handleError(t("ERRORINPUTPASSWORD1"), "passwordVerify");
      isValid = false;
    }

    if (password !== passwordVerify) {
      handleError(t("ERRORINPUTPASSWORD3"), "password");
      handleError(t("ERRORINPUTPASSWORD3"), "passwordVerify");
      isValid = false;
    }

    if (isChecked === false) {
      handleError(t("ERRORINPUTCONTRACT"), "agreement");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        navigation.navigate("SignUpStepTwo", {
          username,
          email,
          password,
          passwordVerify,
        });
      } catch (error) {
        Alert.alert("Hata!", "Bir şeyler yanlış gitti." + error);
      }
    }, 1500);
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const [isChecked, setChecked] = React.useState(false);

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      {loading ? <LoadingComponent /> : null}

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        >
          <View style={[styles.titleContainer]}>
            <Text style={styles.titleNormal}>
              {" "}
              {t("REGISTERTITLE1")} {"\n"}
              <Text style={styles.titleOutline}> {t("REGISTERTITLE2")} </Text>
            </Text>

            <SignUpInputComponent
              input
              maxLength={15}
              placeHolder={t("REGISTERINPUTUSERNAME")}
              icon="happy-outline"
              onChangeText={(text) => {
                setUsername(text);
              }}
              onFocus={() => handleError(null, "username")}
              error={errors.username}
              value={username}
              autoCapitalize="none"
            />

            <SignUpInputComponent
              maxLength={80}
              input
              onChangeText={(text) => {
                setEmail(text);
              }}
              onFocus={() => handleError(null, "email")}
              error={errors.email}
              placeHolder={t("REGISTERINPUTEMAIL")}
              keyboardType="email-address"
              icon="person"
              value={email}
              autoCapitalize="none"
            />

            <SignUpInputComponent
              maxLength={30}
              input
              isPassword={true}
              icon="lock"
              placeHolder={t("REGISTERINPUTPASSWORD")}
              keyboardType="default"
              onChangeText={(text) => {
                setPassword(text);
              }}
              onFocus={() => handleError(null, "password")}
              error={errors.password}
              value={password}
              autoCapitalize="none"
            />

            <SignUpInputComponent
              maxLength={30}
              input
              isPassword={true}
              icon="lock"
              placeHolder={t("REGISTERINPUTREPASSWORD")}
              keyboardType="default"
              onChangeText={(text) => {
                setPasswordVerify(text);
              }}
              onFocus={() => handleError(null, "passwordVerify")}
              error={errors.passwordVerify}
              value={passwordVerify}
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={styles.section}
              onPress={() => {
                setModalVisible(true);
                isChecked ? setChecked(false) : setChecked(true);
              }}
            >
              <CheckBox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                tintColor={isChecked ? "#858CFF" : Color.inputIcon}
                onCheckColor={"#858CFF"}
                tintColors={["#858CFF", "#858CFF"]}
                onTintColor={"#858CFF"}
              />

              <Text style={styles.checkboxText}>
                {t("REGISTERINPUTCONTRACT")}
              </Text>
            </TouchableOpacity>
            {errors.agreement && (
              <Text style={styles.errorText}>
                {errors.agreement ? errors.agreement : null}
              </Text>
            )}
          </View>
          <View style={styles.signUpButton}>
            <NextButtonComponent
              text={t("REGISTERBUTTONFIRST")}
              onPress={validate}
            />
            <View style={[styles.otherSignUpArea, { marginTop: 10 }]}>
              {/* <Text style={styles.signUpText}>Birlikte kayıt ol;</Text>
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
                <Text style={styles.signUpText}>
                  {t("REGISTERBUTTONLOGIN1")}{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignInScreen");
                  }}
                >
                  <Text style={[styles.signUpText, styles.signUpTextBlue]}>
                    {" "}
                    {t("REGISTERBUTTONLOGIN2")}{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            style={{ flex: 1 }}
          >
            <KVKKScreen setModalVisible={setModalVisible} />
          </Modal>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
