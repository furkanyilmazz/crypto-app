import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import React from "react";
import { styles } from "../style";
import { Color } from "../../../config/color";

import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SignUpInputVerifyComponent from "../../../components/SignUpInputComponent/SignUpInputVerifyComponent";
import NextButtonComponent from "../../../components/NextButtonComponent/NextButtonComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import {
  verifyCodeMail,
  registerUser,
} from "../../../redux/Actions/authActions";

import { useTranslation } from "react-i18next";

export default function SignUpStepThree(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const navigation = useNavigation();
  const navParams = props.route.params;

  const [inputs, setInputs] = React.useState({
    user: {
      firstName: navParams.name,
      lastName: navParams.surname,
      phoneNumber: navParams.phoneNumber,
      birth: navParams.splittedDatePicker,
      password: navParams.password,
      userName: navParams.username,
      emailAddress: navParams.emailAddress,
    },
    mailVerify: "",
    phoneVerify: "",
  });
  console.log("tel no 4: ", navParams.phoneNumber);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.mailVerify) {
      handleError(t("ERRORINPUTMAILCODE1"), "mailVerify");
      isValid = false;
    } else if (!inputs.mailVerify.match(/^[0-9]+$/)) {
      handleError(t("ERRORINPUTMAILCODE2"), "mailVerify");
      isValid = false;
    } else if (inputs.mailVerify.length != 6) {
      handleError(t("ERRORINPUTMAILCODE3"), "mailVerify");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const registerEvent = () => {
    dispatch(registerUser(inputs.user, navigation));
  };

  const register = () => {
    setLoading(true);
    dispatch(verifyCodeMail(inputs.user.emailAddress, inputs.mailVerify)).then(
      (res) => {
        res ? registerEvent() : Alert.alert(t("ERRORINPUTPHONECODE4"));
      }
    );
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
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
      {loading ? <LoadingComponent /> : null}

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView>
          <View style={[styles.titleContainer]}>
            <Text style={styles.titleNormal}>
              {" "}
              {t("REGISTERINPUTENDTITLE1")} {"\n"}
              <Text style={styles.titleOutline}>
                {" "}
                {t("REGISTERINPUTENDTITLE2")}{" "}
              </Text>
            </Text>

            <View style={styles.verifyTextArea}>
              <Text style={styles.verifyText}>
                {t("REGISTERINPUTENDINPUTTITLE1")}{" "}
                <Text style={styles.verifyTextBlue}>
                  {`${inputs.user.emailAddress.slice(0, 3)}****@****.com`}
                </Text>{" "}
                {t("REGISTERINPUTENDINPUTTITLE2")}
              </Text>
              
            </View>
            <SignUpInputVerifyComponent
              icon="person"
              onChangeText={(text) => {
                handleOnchange(text, "mailVerify");
              }}
              onFocus={() => handleError(null, "mailVerify")}
              error={errors.mailVerify}
              isMail={true}
              email={inputs.user.emailAddress}
            />

            <View style={[styles.signUpButtonValidate]}>
              <NextButtonComponent
                text={t("REGISTERINPUTENDBUTTON")}
                onPress={validate}
              />
            </View>

            <View style={[styles.helpArea]}>
              <View style={{ height: 10 }} />
              <Text style={styles.signUpText}>
                {t("REGISTERINPUTENDHELP1")}
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={[styles.signUpText, styles.signUpTextBlue]}>
                  {t("REGISTERINPUTENDHELP2")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

//export default connect(mapStateToProps, { register })(SignUpStepThree);
