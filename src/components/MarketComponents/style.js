import { StyleSheet, Platform } from "react-native";
import { Color } from "../../config/color";
import { StyleVariables } from "../../config/style-variables";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  CoinCard: {
    backgroundColor: Color.coinCardBackground,
    marginHorizontal: wp("3%"),
    marginVertical: hp("0.7%"),
    padding: wp("3%"),
    flexDirection: "row",
    borderRadius: 14,
  },
  coinLogo: {
    width: wp("11%"),
    height: wp("11%"),
    borderRadius: 40,
    alignSelf: "center",
  },
  coinNameArea: {
    width: wp("10%"),
    marginLeft: wp("2%"),
    justifyContent: "center",
  },
  coinPriceArea: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: wp("30%"),
  },
  symbolLong: {
    color: Color.textColor,
    fontSize: wp("4.5%"),
    width: wp("23%"),
    fontWeight: "bold",
  },
  symbolLongWithoutChart: {
    color: Color.textColor,
    fontSize: wp("4.5%"),
    width: wp("50%"),
    fontWeight: "bold",
  },
  symbolText: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "300",
    opacity: 0.5,
    width: wp("20%"),
  },
  chartKit: {
    width: wp("35%"),
    marginLeft: wp("13%"),
  },
  priceDetailArea: {
    justifyContent: "flex-end",
  },
  priceText: {
    color: Color.textColor,
    width: StyleVariables.width * 0.3,
    fontWeight: "bold",
    fontSize: wp("4%"),
    marginLeft: StyleVariables.width * 0.3,
    textAlign: "right",
  },
  priceChangeText: {
    color: Color.textColor,
    fontSize: wp("3.5%"),
    width: wp("27%"),
    textAlign: "right",
  },
  coinDetailIcon: {
    alignSelf: "center",
  },
  detailButton: {
    justifyContent: "center",
  },
});
