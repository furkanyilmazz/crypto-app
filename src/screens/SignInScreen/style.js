import { StyleSheet, Platform } from "react-native";
import { Color } from "../../config/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    overflow: "scroll",
  },
  inputArea: {
    flex: 1,
    marginTop: hp("3%"),
  },
  titleContainer: {
    flex: 1,
    zIndex: 2,
    textAlign: "left",
    marginBottom: hp("3%"),
    marginTop: hp("3%"),
  },
  tabNavigator: {
    flex: 3.5,
  },
  titleNormal: {
    fontSize: hp("6%"),
    color: Color.textShadowWhite,
    fontFamily: "Poppins-Bold",
    letterSpacing: -1,
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
    marginBottom: wp("2%"),
    height: hp("20%"),
  },
  titleOutline: {
    fontSize: hp("6%"),
    fontFamily: "Poppins-Bold",
    color: Color.backgroundColorGradientUp,
    letterSpacing: -1,
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
    lineHeight: hp("6%"),
    zIndex: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: wp("10%"),
    marginTop: wp("2%"),
  },
  checkbox: {
    width: wp("5%"),
    height: wp("5%"),
  },
  checkboxTextArea: {
    marginLeft: wp("2%"),
    color: Color.textShadowWhite,
    marginRight: wp("2%"),
  },
  checkboxText: {
    fontSize: wp("3.5%"),
    color: Color.textShadowWhite,
    marginLeft: wp("2%"),
  },
  checkBoxTextBlue: {
    color: Color.textShadowBlue,
  },
  signInButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp("5%"),
    flex: 1,
  },
  otherSignUpArea: {
    alignItems: "center",
    flex: 1,
  },
  SignUpInputIcon: {
    color: Color.textColor,
    opacity: 0.5,
    padding: wp("1%"),
    marginHorizontal: wp("2%"),
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
    fontSize: wp("3.5%"),
    color: Color.textColor,
    opacity: 0.3,
    fontFamily: "Poppins-Medium",
  },
  signUpTextArea: {
    flexDirection: "row",
  },
  signUpTextBlue: {
    color: Color.textShadowBlue,
  },
  errorText: {
    color: Color.error,
    marginLeft: wp("2%"),
    marginTop: wp("1%"),
  },
  signUpButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp("5%"),
  },
  platformIcons: {
    flexDirection: "row",
  },
  chooseLoginArea: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: wp("5%"),
  },
  chooseLoginText: {
    color: Color.textColor,
    opacity: 0.5,
    marginHorizontal: wp("2%"),
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
    width: wp("30%"),
    textAlign: "center",
  },
  choosedLine: {
    height: wp("1%"),
    backgroundColor: Color.textColor,
    borderRadius: 10,
    marginTop: wp("1%"),
  },
  forgotPasswordArea: {
    alignItems: "flex-end",
    marginRight: wp("10%"),
  },
  forgotPasswordText: {
    color: Color.textColor,
    opacity: 0.5,
    fontFamily: "Poppins-Regular",
    fontSize: wp("3.5%"),
  },
  signInBackground: {
    flex: 1,
    backgroundColor: Color.backgroundColorGradientUp,
  },
});
