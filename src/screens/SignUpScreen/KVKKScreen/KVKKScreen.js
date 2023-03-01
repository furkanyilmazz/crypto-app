import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color } from "../../../config/color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";

export default function KVKKScreen(props) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.kvkkcomponent}>
      <ScrollView style={styles.scrollArea}>
        <Text style={styles.textTitle}>{t("KVKKTITLE")}</Text>
        <Text selectable style={styles.textDesc}></Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKKADRESS")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKKADRESS2")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKKADRESS3")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK2")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK3")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK4")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK5")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK6")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK7")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK8")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK9")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK10")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK11")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK12")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK13")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK14")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK15")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK16")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK17")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK18")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK19")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK20")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK21")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK22")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK23")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK24")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK25")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK26")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK27")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK28")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK29")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK30")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK31")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK32")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK33")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK34")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK15")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK16")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK17")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK18")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK19")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK20")}
        </Text>
        <Text selectable style={styles.textDesc}>
          {t("KVKK21")}
        </Text>

        <TouchableOpacity
          style={styles.kvkkButton}
          onPress={() => {
            props.setModalVisible(false);
          }}
        >
          <Text style={styles.kvkkButtonText}> {t("KVKKBUTTON")} </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
    marginHorizontal: wp("3%"),
  },
  kvkkcomponent: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  textTitle: {
    fontSize: wp("5.5%"),
    color: Color.textColor,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: wp("3%"),
    marginHorizontal: wp("5%"),
  },
  textDesc: {
    color: Color.textColor,
    fontSize: wp("4%"),
    marginVertical: wp("0.5%"),
  },
  kvkkButton: {
    backgroundColor: Color.textShadowBlue,
    width: wp("80%"),
    height: hp("5%"),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: wp("5%"),
    marginBottom: wp("15%"),
    borderRadius: 10,
  },
  kvkkButtonText: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
});
