import {
  Image,
  Linking,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Color } from "../../config/color";
import LinearGradient from "react-native-linear-gradient";

import { useDispatch, useSelector } from "react-redux";

import { ScrollView } from "react-native-gesture-handler";

import { useTranslation } from "react-i18next";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { setDarkMode, setFaceId } from "../../redux/Actions/userActions";

const onPressWeb = () =>
  Linking.canOpenURL("https://www.fahasoftware.com/").then(() => {
    Linking.openURL("https://www.fahasoftware.com/");
  });

function ProfileScreen() {
  const toggleSwitch = (value) => {
    dispatch(setFaceId(value));
    // AsyncStorage.setItem('faceId', value.toString());
  };

  const darkModeSwitch = (value) => {
    dispatch(setDarkMode(value));
    // AsyncStorage.setItem('darkMode', value.toString());
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      <ScrollView>
        <Text style={styles.userInfoTitleText}>
          {t("SETTINGSTITLEAPPLICATION")}
        </Text>
        <View style={styles.userInfoArea}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>
              {" "}
              {t("SETTINGSAPPLICATIONMODE")}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "black" }}
              thumbColor={user.darkMode ? "#767577" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(e) => darkModeSwitch(e)}
              value={user.darkMode}
              disabled={true}
            />
          </View>
          <View style={styles.line} />

          <TouchableOpacity
            style={styles.userInfo}
            onPress={() => {
              if (i18n.language === "en") {
                i18n.changeLanguage("tr");
              } else if (i18n.language === "tr") {
                i18n.changeLanguage("en");
              }
            }}
          >
            <Text style={styles.userInfoTextTitle}>
              {" "}
              {t("SETTINGSAPPLICATIONLANGUAGE")}
            </Text>
            <Text style={styles.userInfoText}>
              {i18n.language === "en" ? "English" : "Türkçe"}
            </Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>
              {t("SETTINGSAPPLICATIONMONEY")}
            </Text>
            <Text style={styles.userInfoText}>USD</Text>
          </View>
          {/* <View style={styles.line} /> */}
          {/* <TouchableOpacity style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>
              {' '}
              {t('SETTINGSAPPLICATIONNOTIFICATION')}
            </Text>
         <Ionicons
              name="chevron-forward"
              size={20}
              color={Color.opacityWhite}
              style={styles.drawerItemIcon}
            />
          </TouchableOpacity> */}
        </View>

        <Text style={styles.userInfoTitleText}>
          {" "}
          {t("SETTINGSTITLESECURITY")}
        </Text>
        <View style={styles.userInfoArea}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>
              {" "}
              {t("SETTINGSSECURITYFACEID")}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#858CFF" }}
              thumbColor={user.faceId ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(e) => toggleSwitch(e)}
              value={user.faceId}
            />
          </View>
        </View>

        <Text style={styles.userInfoTitleText}>
          {" "}
          {t("SETTINGSTITLEABOUTUS")}
        </Text>
        <View style={styles.userInfoArea}>
          <TouchableOpacity onPress={onPressWeb} style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>
              {" "}
              {t("SETTINGSABOUTUSTITLE")}
            </Text>
            {/* <Ionicons
              name="chevron-forward"
              size={20}
              color={Color.opacityWhite}
              style={styles.drawerItemIcon}
            /> */}
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>
              {t("SETTINGSABOUTSECURITY")}
            </Text>
            {/* <Ionicons
              name="chevron-forward"
              size={20}
              color={Color.opacityWhite}
              style={styles.drawerItemIcon}
            /> */}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* <TouchableOpacity style={styles.userInfo}>
            <Text style={styles.userInfoTextTitle}>Topluluk Kuralları</Text>
             <Ionicons
              name="chevron-forward"
              size={20}
              color={Color.opacityWhite}
              style={styles.drawerItemIcon}
            />
          </TouchableOpacity> */}
          {/* <View style={styles.line} /> */}
          <TouchableOpacity style={styles.userInfo}>
            <Text numberOfLines={1} style={styles.userInfoText}>
              {t("SETTINGSABOUTSHARE")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: wp("10%") }} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  userInfoArea: {
    marginHorizontal: wp("5%"),
    padding: wp("5%"),
    backgroundColor: Color.backgroundColor,
    borderRadius: 15,
    paddingBottom: wp("7%"),
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  userPicture: {
    width: wp("14%"),
    height: wp("14%"),
    backgroundColor: Color.textShadowBlue,
    borderRadius: 30,
    alignSelf: "center",
  },
  userInfoTextTitle: {
    fontSize: wp("4%"),
    color: Color.textColor,
    opacity: 0.7,
    alignSelf: "center",
    fontWeight: "bold",
  },
  userInfoText: {
    fontSize: wp("4%"),
    color: Color.textShadowBlue,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    height: wp("0.1%"),
    backgroundColor: Color.textShadowBlue,
    marginHorizontal: wp("-5%"),
    borderRadius: 30,
    marginVertical: wp("6%"),
    opacity: 0.3,
  },
  userInfoTitleText: {
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    color: Color.textColor,
    marginHorizontal: wp("7%"),
    marginTop: wp("5%"),
    marginVertical: wp("5%"),
  },
});

export default ProfileScreen;
