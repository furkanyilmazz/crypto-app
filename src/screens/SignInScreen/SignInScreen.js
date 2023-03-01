import { Text, View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import React from "react";

import { styles } from "./style";
import { Color } from "../../config/color";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignInUsername from "./SignInUsername";
import SignInEmail from "./SignInEmail";
import SignInPhone from "./SignInPhone";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

import { useSelector } from "react-redux";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useTranslation } from "react-i18next";

export default function SignInScreen(props) {
  const { t } = useTranslation();
  const Tab = createMaterialTopTabNavigator();
  const { auth } = useSelector((state) => state);

  return (
    <View style={styles.mainContainer}>
      {auth.isLoading ? <LoadingComponent /> : null}

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} enabled={false}>
          <View style={[styles.titleContainer]}>
            <Text style={styles.titleNormal}>
              {" "}
              {t("LOGINTITLE1")}
              {" \n"}
              <Text style={styles.titleOutline}> {t("LOGINTITLE2")} </Text>
            </Text>
          </View>
          <Tab.Navigator
            style={styles.tabNavigator}
            screenOptions={{
              swipeEnabled: false,
              tabBarActiveTintColor: Color.textShadowBlue,
              tabBarInactiveTintColor: Color.textColor,
              tabBarItemStyle: {
                backgroundColor: Color.backgroundColorGradientUp,
              },
              tabBarPressColor: Color.textShadowBlue,
              tabBarBounces: false,
              tabBarAllowFontScaling: false,
              tabBarLabelStyle: {
                fontSize: wp("3.5%"),
                width: "100%",
              },
              lazy: false,
            }}
          >
            <Tab.Screen
              options={{
                tabBarLabel: t("LOGINWITHUSERNAME"),
                tabBarBounces: false,
              }}
              name={t("LOGINWITHUSERNAME")}
              component={SignInUsername}
            />
            <Tab.Screen
              options={{
                tabBarLabel: t("LOGINWITHEMAIL"),
                tabBarBounces: false,
              }}
              name={t("LOGINWITHEMAIL")}
              component={SignInEmail}
            />
            {/* <Tab.Screen
              options={{
                tabBarLabel: t("LOGINWITHPHONE"),
                tabBarBounces: false,
              }}
              name={t("LOGINWITHPHONE")}
              component={SignInPhone}
            /> */}
          </Tab.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
