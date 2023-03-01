import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Color } from "../../config/color";
import { useTranslation } from "react-i18next";

export default function CoinDetailGeneral({
  coinColor,
  closePrice,
  lowPrice,
  highPrice,
  openPrice,
  prevDayClosePrice,
  priceChangePercent,
  circulatingSupply,
  volume,
  weightedAveragePrice,
  targetLevel,
  totalTrades,
  stopLevel,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILCLOSEPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(closePrice)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILMINPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(lowPrice)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAIL24LASTPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(highPrice)}
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILOPENPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(openPrice)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILCLOSEPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(prevDayClosePrice)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("HOMEPAGECHANGE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(priceChangePercent)}
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILCIRCULATINGSUPPLY")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {circulatingSupply && circulatingSupply != null
              ? kFormatter(circulatingSupply)
              : "0"}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILVOLUME")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {kFormatter(volume)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILAVARAGEPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(weightedAveragePrice)}
          </Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILSTOPLEVEL")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(stopLevel)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("COINDETAILTARGETPRICE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {formatter.format(targetLevel)}
          </Text>
        </View>
        <View style={styles.coinDetailGeneralComponent}>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralTitle,
              {
                color: coinColor,
              },
            ]}
          >
            {t("TOTALTRADE")}
          </Text>
          <Text
            lineBreakMode="tail"
            numberOfLines={1}
            style={[
              styles.coinDetailGeneralDesc,
              {
                color: coinColor,
              },
            ]}
          >
            {kFormatter(totalTrades)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("2%"),
  },
  coinDetailGeneralComponent: {
    paddingVertical: wp("4%"),
    backgroundColor: Color.coinDetailGeneral,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: wp("31%"),
  },
  coinDetailGeneralTitle: {
    fontSize: wp("3%"),
    opacity: 0.5,
    fontWeight: "bold",
    paddingHorizontal: wp("2%"),
    textAlign: "center",
  },
  coinDetailGeneralDesc: {
    fontSize: wp("4.5%"),
  },
});
