import {
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  View,
  FlatList,
  VirtualizedList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Color } from "../../config/color";

import LoopImages from "react-native-loop-image";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { API_URL } from "../../../config";

export default function HomePageAdsComponent({ ads }) {
  return (
    <VirtualizedList
      children={
        <LoopImages
          imageStyle={{
            width: wp("90%"),
            height: hp("9%"),
            borderRadius: 10,
            borderWidth: 2,
            borderColor: Color.textShadowBlue,
          }}
          containerStyle={{
            paddingHorizontal: wp("2%"),
          }}
          photos={ads.map((item) => {
            return { uri: API_URL + item.path, url: item.url };
          })}
          isNativePhoto={true}
          width={wp("100%")}
          height={hp("10%")}
          selectedIndicatorColor={Color.textShadowBlue}
          normalIndicatorColor={Color.textColor}
          delay={5000}
          onPress={(item) => {
            const supported = Linking.canOpenURL(item.url);
            if (supported) {
              Linking.openURL(item.url);
            } else {
              console.log(`Don't know how to open this URL: ${item.url}`);
            }
          }}
        />
      }
    />
  );
}
