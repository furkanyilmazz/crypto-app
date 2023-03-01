import { StyleSheet, Platform } from "react-native";
import { Color } from "../../config/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  welcomeText: {
    fontSize: wp("6%"),
    color: Color.textShadowWhite,
  },
  newsComponent: {
    flex: 1,
  },
  newsItemComponent: {},
  newsComponentTitle: {
    marginHorizontal: wp("3%"),
    marginTop: hp("2%"),
    height: hp("3.5%"),
  },
  newsComponentTitleText: {
    fontSize: wp("4%"),
    color: Color.textColor,
    fontWeight: "600",
  },
  separatorComponent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  seperator: {
    fontSize: wp("4%"),
    fontWeight: "700",
    color: Color.textColor,
  },
  flatListNews: {
    maxHeight: hp("6%"),
  },
  suggestItemComponent: {
    marginHorizontal: wp("3%"),
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("1%"),
  },
  suggestItemGradient: {
    width: wp("100%"),
    padding: wp("3%"),
    alignItems: "center",
    borderRadius: 12,
    marginBottom: hp("1%"),
  },
  suggestItemTitle: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: Color.textColor,
  },
  newsCont: {
    backgroundColor: Color.backgroundColor,
    width: "100%",
    height: wp("35%"),
    borderRadius: 20,
    padding: wp("3%"),
    marginTop: wp("3%"),
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  sliderNewsCont: {
    width: wp("80%"),
    height: wp("50%"),
    borderRadius: 20,
    marginTop: wp("3%"),
    marginRight: wp("3%"),
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    flex: 6,
    color: Color.textColor,
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    marginTop: wp("3%"),
  },
  dateText: {
    flex: 1,
    color: Color.opacityWhite,
    fontSize: wp("3%"),
  },
  newsImg: {
    width: wp("30%"),
    height: wp("30%"),
    borderRadius: 20,
  },
  sliderNewsImg: {
    width: wp("80%"),
    height: wp("50%"),
    borderRadius: 20,
    opacity: 0.2,
  },
  textCont: {
    flex: 2,
    marginLeft: wp("2%"),
  },
  flatListNewsComponent: {
    flex: 1,
    marginHorizontal: wp("3%"),
  },
});
