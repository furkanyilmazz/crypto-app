import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleVariables } from "../../config/style-variables";

import { Color } from "../../config/color";
import { useNavigation } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import dino from "../../assets/dinox/hawli_dinox.png";
import axios from "axios";

export default function ListPortfolioCoinComponent(props) {
  const imgUri = props.baseAsset.toLowerCase();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.ListPortfolioCoinComponent]}
      onPress={() =>
        navigation.navigate("TapToAddPortfolio", {
          id: props.id,
          baseAsset: props.baseAsset,
          baseAssetName: props.baseAssetName,
        })
      }
    >
      <View style={styles.ListPortfolioCoinArea}>
        <Image
          source={{
            uri: `https://assets.coincap.io/assets/icons/${imgUri}@2x.png`,
          }}
          style={styles.ListPortfolioCoinImage}
        />
        <Text style={styles.ListPortfolioCoinName} numberOfLines={1}>
          {props.baseAssetName}
        </Text>
        <Text style={styles.ListPortfolioCoinShortName} numberOfLines={1}>
          {props.baseAsset}
        </Text>
      </View>
      <View style={styles.ListPortfolioCoinIconArea}>
        {/* <Ionicons
          name={'chevron-forward-outline'}
          size={25}
          color={Color.textColor}
          style={styles.portfolioChangeChartIcon}
        /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ListPortfolioCoinComponent: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: StyleVariables.width * 0.05,
    marginVertical: StyleVariables.width * 0.02,
  },
  ListPortfolioCoinArea: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  ListPortfolioCoinImage: {
    width: StyleVariables.width * 0.12,
    height: StyleVariables.width * 0.12,
    borderRadius: 30,
  },
  ListPortfolioCoinName: {
    fontSize: wp("5%"),
    color: Color.textColor,
    marginLeft: StyleVariables.width * 0.02,
    fontWeight: "500",
  },
  ListPortfolioCoinShortName: {
    fontSize: wp("3%"),
    color: Color.textColor,
    marginLeft: StyleVariables.width * 0.02,
    fontWeight: "bold",
    opacity: 0.5,
  },
  ListPortfolioCoinIconArea: {
    flex: 1,
    justifyContent: "center",
  },
  portfolioChangeChartIcon: {
    alignSelf: "flex-end",
  },
});
