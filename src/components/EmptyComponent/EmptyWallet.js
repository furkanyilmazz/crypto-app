import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import DinoxSad from "../../assets/dinox/dinox_uzgun.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Color } from "../../config/color";
import { useTranslation } from "react-i18next";

export default function EmptyWallet() {
  const { t } = useTranslation();

  return (
    <View style={styles.emptyPortfolioScreen}>
      <Image style={styles.dinoxImg} source={DinoxSad} />
      <Text style={styles.emptyPortfolioText}>{t("WALLETEMPTY")}</Text>
      <TouchableOpacity onPress={createSession} style={styles.addButton}>
        <Text style={styles.addButtonText}>
          {t("DRAWEROPENPORTFOLIONWALLETCONNECT")}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dinoxImg: {
    width: wp("100%"),
    height: hp("40%"),
    resizeMode: "contain",
    marginVertical: hp("5%"),
  },
  emptyPortfolioText: {
    textAlign: "center",
    color: Color.textColor,
    fontFamily: "Poppins-SemiBold",
    fontSize: wp("5%"),
    marginVertical: wp("5%"),
    width: wp("70%"),
    alignSelf: "center",
    marginTop: hp("-3%"),
  },
  addButton: {
    backgroundColor: Color.textShadowBlue,
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("5%"),
    marginHorizontal: wp("25%"),
    borderRadius: 10,
  },
  addButtonText: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
});
