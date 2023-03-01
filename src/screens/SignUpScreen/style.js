import { StyleSheet } from "react-native";
import { Color } from "../../config/color";
import { StyleVariables } from "../../config/style-variables";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flex: 1,
    textAlign: "left",
  },
  titleNormal: {
    fontSize: wp("15%"),
    color: Color.textShadowWhite,
    fontFamily: "Poppins-SemiBold",
    letterSpacing: -1,
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titleOutline: {
    fontSize: wp("14%"),
    fontFamily: "Poppins-Bold",
    color: Color.backgroundColorGradientUp,
    letterSpacing: -1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    lineHeight: wp("14%"),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    overflow: "scroll",
  },
  inputArea: {
    // flex:1
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: StyleVariables.width * 0.1,
    marginTop: StyleVariables.width * 0.03,
  },
  checkbox: {
    width: StyleVariables.width * 0.05,
    height: StyleVariables.width * 0.05,
    marginRight: StyleVariables.width * 0.012,
  },
  checkboxTextArea: {
    marginLeft: StyleVariables.width * 0.012,
    color: Color.textShadowWhite,
    marginRight: StyleVariables.width * 0.15,
  },
  checkboxText: {
    fontSize: wp("3.7%"),
    color: Color.textShadowWhite,
    opacity: 0.7,
    width: wp("78%"),
  },
  checkBoxTextBlue: {
    color: Color.textShadowBlue,
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flex: 1,
    marginTop: wp("5%"),
  },
  signUpButtonValidate: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp("10%"),
  },
  otherSignUpArea: {
    alignItems: "center",
    marginBottom: wp("8%"),
  },
  platformIcons: {
    flexDirection: "row",
  },
  SignUpInputIcon: {
    color: Color.textColor,
    opacity: 0.5,
    padding: StyleVariables.width * 0.02,
    marginHorizontal: StyleVariables.width * 0.03,
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  signUpText: {
    fontSize: wp("4%"),
    color: Color.textColor,
    opacity: 0.4,
    fontFamily: "Poppins-Medium",
  },
  signUpTextArea: {
    flexDirection: "row",
  },
  signUpTextBlue: {
    color: Color.textShadowBlue,
  },
  verifyTextArea: {
    marginHorizontal: StyleVariables.width * 0.11,
    marginTop: StyleVariables.width * 0.05,
  },
  verifyText: {
    fontSize: wp("4%"),
    color: Color.textColor,
    fontFamily: "Poppins-Medium",
  },
  verifyTextBlue: {
    color: Color.textShadowBlue,
  },
  finishArea: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  finishAreaComponent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: hp("10%"),
  },

  finishTitle: {
    color: Color.textColor,
    fontSize: wp("5%"),
    fontFamily: "Poppins-Bold",
    marginTop: wp("5%"),
  },
  finishDesc: {
    fontSize: wp("4%"),
    marginHorizontal: StyleVariables.width * 0.1,
    marginTop: StyleVariables.width * 0.01,
    color: Color.textColor,
    textAlign: "center",
    opacity: 0.4,
  },
  finishIcon: {
    width: StyleVariables.width * 0.75,
    height: StyleVariables.width * 0.78,
    resizeMode: "stretch",
  },
  errorText: {
    color: Color.error,
    marginLeft: StyleVariables.width * 0.1,
    marginTop: StyleVariables.height * 0.01,
  },
  datePickerInfo: {
    marginLeft: wp("10%"),
    color: Color.textColor,
    opacity: 0.2,
  },
  helpArea: {
    marginBottom: wp("10%"),
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
  },
  phoneInput: {
    color: Color.textColor,
  },
  phoneInputContainer: {
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: Color.inputBackground,
    color: Color.textColor,
  },
  phoneInputTextContainer: {
    backgroundColor: Color.inputBackground,
    borderRadius: 10,
    color: Color.textColor,
  },
  phoneInputButton: {
    color: Color.textColor,
  },
  phoneInputCodeText: {
    color: Color.textColor,
  },
  phoneInputFlagButton: {
    color: Color.textColor,
    width: wp("18%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
