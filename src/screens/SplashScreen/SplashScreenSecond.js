import { Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { styles } from "./style";

import StartButton from "../../components/StartButtonComponent/StartButtonComponent";
import LinearGradient from "react-native-linear-gradient";

import NFT from "../../assets/SplashScreen/nft.png";
import { useNavigation } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Color } from "../../config/color";
import { useTranslation } from "react-i18next";

import storage from "../../config/storage";

export default function SplashScreen() {
  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.splashScreen}
    >
      <SafeAreaView style={[{ flex: 1 }]}>
        <View style={[styles.titleContainer]}>
          <Text style={styles.titleNormal}>
            {t("SPLASHSCREENTITLE3")} {`\n`}
            <Text style={styles.titleOutline}> {t("SPLASHSCREENTITLE4")} </Text>
          </Text>
        </View>
        <View style={styles.iconsArea}>
          <Image source={NFT} style={styles.hoverNFT} />
          <Text style={[styles.description]}>{t("SPLASHSCREENNFTDESC")}</Text>
          <StartButton
            text={t("LETSGO")}
            FontFamily="Poppins-Bold"
            FontSize={wp("5%")}
            onPress={() => {
              // setWelcomeScreen();
              navigation.navigate("SignUpStepOne");
              storage.save({
                key: "splashScreen",
                data: {
                  splashScreen: true,
                },
                expires: null,
              });
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
