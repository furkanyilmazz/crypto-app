import { StyleSheet, Platform } from "react-native";
import { Color } from "../../config/color";
import { StyleVariables } from "../../config/style-variables";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  loadingBackgroundStyle: {
    flex: 1,
  },
  shortPortfolioArea: {
    flexDirection: "row",
    flex: 1,
    marginTop: hp("2%"),
    marginHorizontal: wp("5%"),
  },
  shortPortfolioAreaInfo: {
    flex: 2,
  },
  shortPortfolioUserNameText: {
    marginBottom: hp("1%"),
    fontSize: wp("6.2%"),
    fontWeight: "bold",
    color: Color.textShadowBlue,
  },
  shortPortfolioUserNameTextThin: {
    fontWeight: "400",
  },
  shortPortfolioUserEarnArea: {
    width: wp("60%"),
  },
  shortPortfolioUserEarn: {
    flexDirection: "row",
    marginTop: hp("1%"),
  },
  shortPortfolioUserEarnText: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
  shortPortfolioUserEarnTextChange: {
    color: Color.textShadowBlue,
  },
  shortPortfolioUserEarnAreaText: {
    color: Color.textShadowWhite,
    fontSize: wp("6.5%"),
    fontWeight: "bold",
  },
  shortPortfolioUserEarnTextPrice: {
    color: Color.green,
  },
  shortPortfolioUserEarnTextPriceGraph: {
    marginLeft: wp("2%"),
    color: Color.textColor,
    backgroundColor: Color.green,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp("2%"),
    height: hp("2.5%"),
  },
  shortPortfolioUserEarnTextPriceGraphText: {
    color: Color.textColor,
    fontSize: wp("3%"),
    justifyContent: "center",
  },
  chartKitHome: {
    flex: 1,
  },
  shortPortfolioTimeArea: {
    flexDirection: "row",
    justifyContent: "center",
  },
  homePageWidgetAddButton: {
    alignSelf: "center",
    backgroundColor: Color.customCardItemBackground,
    paddingHorizontal: StyleVariables.width * 0.15,
    paddingVertical: StyleVariables.width * 0.04,
    borderRadius: 12,
    display: "none",
  },
  homePageWidgetAddButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: Color.textColor,
    opacity: 0.4,
    fontSize: wp("4%"),
  },
  shortPortfolioChart: {
    marginTop: StyleVariables.height * -0.1,
    marginLeft: StyleVariables.width * -0.1,
    flex: 1,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  bottomSheetContainer: {
    backgroundColor: Color.backgroundColorGradientUp,
    flex: 1,
    marginTop: StyleVariables.width * -0.05,
  },
  bottomSheetIndicator: {
    width: StyleVariables.width * 0.3,
    height: StyleVariables.width * 0.015,
    borderRadius: 12,
    backgroundColor: Color.textShadowBlue,
    alignSelf: "center",
    marginVertical: StyleVariables.width * 0.03,
  },
  bottomSheetItemArea: {},
  listContainer: {},
  rowBack: {
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: Color.green,
    marginRight: StyleVariables.width * 0.05,
  },
  backRightBtn: {},
  backTextWhite: {
    color: Color.textColor,
    marginRight: StyleVariables.width * 0.065,
  },
  separator: {
    height: 1,
    backgroundColor: Color.textColor,
    opacity: 0.3,
  },
  helpPanelComponent: {
    marginTop: hp("4%"),
  },
  helpPanelTextTitle: {
    color: Color.textColor,
    opacity: 0.6,
    fontFamily: "Poppins-Medium",
    fontSize: wp("5%"),
    marginLeft: wp("9%"),
    marginBottom: hp("-1%"),
  },
  helpPanelText: {
    color: Color.textColor,
    fontFamily: "Poppins-Medium",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  helpPanelRow: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("2%"),
  },
  helpPanelArea: {
    width: wp("35%"),
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.textShadowBlue,
    borderRadius: 12,
    marginHorizontal: wp("5%"),
  },
});
