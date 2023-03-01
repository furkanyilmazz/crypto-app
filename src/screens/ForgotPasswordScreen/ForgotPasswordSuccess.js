import { Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { styles } from "./style";
import { Color } from "../../config/color";
import NextButtonComponent from "../../components/NextButtonComponent/NextButtonComponent";

import finishIcon from "../../assets/SplashScreen/finish.png";

import { useNavigation } from "@react-navigation/native";

import { useTranslation } from "react-i18next";

export default function ForgotPasswordSuccess() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.finishAreaComponent}>
          <Image source={finishIcon} style={styles.finishIcon} />
          <Text style={styles.finishTitle}>{t("REGISTERFINISHTITLE")}</Text>
          <Text style={styles.finishDesc}>{t("FORGOTPASSWORDSUCCESS")}</Text>
        </View>
        <View style={[styles.signUpButton]}>
          <NextButtonComponent
            text={t("REGISTERFINISHBUTTON")}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
