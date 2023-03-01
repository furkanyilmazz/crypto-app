import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useSelector } from "react-redux";
import { Color } from "../../config/color";

import DinoxSad from "../../assets/dinox/dinox_uzgun.png";

export default function EmptyPortfolio() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const auth = useSelector((state) => state.auth, shallowEqual);

  return (
    <View style={styles.emptyComponent}>
      <View style={styles.gifArea}>
        <Text style={styles.shortPortfolioUserNameText} numberOfLines={1}>
          {t("HOMEPAGEISPORTFOLIOEMPTYTITLE")}
          <Text> </Text>
          <Text style={[styles.shortPortfolioUserNameTextThin]}>
            {""}
            {auth.user[1].firstName}
          </Text>
        </Text>
        <Text style={[styles.emptyPortfolioTitle]}>
          {t("HOMEPAGEISPORTFOLIOEMPTYDESC")}
        </Text>
        <TouchableOpacity
          style={styles.emptyPortfolioButton}
          onPress={() => {
            navigation.navigate("PortfolioCoinAddScreen");
          }}
        >
          <Text style={[styles.emptyPortfolioButtonText]}>
            {t("HOMEPAGEISPORTFOLIOEMPTYBUTTON")}
          </Text>
        </TouchableOpacity>
      </View>

      <Image source={DinoxSad} style={styles.dinoxSad} />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyComponent: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  gifArea: {
    display: "flex",
  },
  shortPortfolioUserNameText: {
    fontSize: wp("6.2%"),
    fontWeight: "bold",
    color: Color.textShadowBlue,
  },
  shortPortfolioUserNameTextThin: {
    fontWeight: "400",
  },
  dinoxSad: {
    width: wp("33%"),
    height: wp("33%"),
    resizeMode: "cover",
  },
  emptyPortfolioTitle: {
    color: Color.textColor,
    fontFamily: "Poppins-Regular",
    opacity: 0.7,
    fontSize: wp("5%"),
    marginTop: hp("0.5%"),
  },
  emptyPortfolioButton: {
    borderRadius: 7,
    width: wp("60%"),
    marginTop: hp("1%"),
  },
  emptyPortfolioButtonText: {
    color: Color.textColor,
    fontFamily: "Poppins-Bold",
    opacity: 0.9,
    fontSize: wp("4.5%"),
  },
});
