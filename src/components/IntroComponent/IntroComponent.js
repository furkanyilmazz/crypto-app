import { StyleSheet, Image, View } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import IntroGif from "../../assets/SplashScreen/intro.gif";
import { Color } from "../../config/color";

import { useNavigation } from "@react-navigation/native";
import storage from "../../config/storage";
import { useDispatch } from "react-redux";

import * as RNLocalize from "react-native-localize";

export default function IntroComponent() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      storage
        .load({
          key: "splashScreen",
          autoSync: true,
          syncInBackground: true,
          syncParams: {
            extraFetchOptions: {},
            someFlag: true,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.splashScreen) {
            return navigation.replace("SignInScreen");
          }
        })
        .catch((err) => {
          return navigation.replace("SplashScreenFirst");
        });
    }, 3500);
  }, []);

  const currentLanguage = RNLocalize.getLocales()[0].languageCode;

  useEffect(() => {
    // dispatch(changeLanguageLocalize(currentLanguage.toString()));
  }, []);

  return (
    <View style={styles.introBackground}>
      <Image source={IntroGif} style={styles.introGif} />
    </View>
  );
}

const styles = StyleSheet.create({
  introBackground: {
    backgroundColor: Color.backgroundColor,
  },
  introGif: {
    height: hp("100%"),
    alignSelf: "center",
    resizeMode: "contain",
  },
});
