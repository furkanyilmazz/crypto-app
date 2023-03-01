import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import { Color } from "../../../../config/color";

const { width } = Dimensions.get("window");
const itemWidth = Math.round(width * 0.8);

export default function DiscoveryScreen() {
  const { t } = useTranslation();
  const [Auctions, setAuctions] = useState([]);

  useEffect(() => {
    getAuctions();
  }, []);

  const getAuctions = async () => {
    const response = await axios.get(
      "https://api.opensea.io/api/v1/collections?offset=0&limit=50"
    );
    await setAuctions(response.data.collections);
  };

  return (
    <View
      style={{
        marginTop: hp("2%"),
      }}
    >
      <View style={styles.titleWrapStyle}>
        <Text style={styles.liveAuctions}>{t("LIVEAUCTIONS")}</Text>
      </View>
      <FlatList
        data={Auctions}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: wp("3.5%"),
        }}
      />
    </View>
  );
}

const renderItem = ({ item }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => {
      // navigation.push("LiveAuctionsDetail", { item: item })
      console.log(item);
    }}
    style={{
      marginBottom: hp("2%"),
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.05)",
      display: item.image_url && item.description ? "flex" : "none",
    }}
  >
    <ImageBackground
      source={{
        uri: item.image_url,
      }}
      style={styles.auctionImageStyle}
      borderTopLeftRadius={12}
      borderTopRightRadius={12}
    >
      <View style={styles.timeLeftAndFavoriteShareIconWrapStyle}>
        <View
          style={{
            backgroundColor: Color.textShadowBlue,
            ...styles.timeLeftWrapStyle,
          }}
        >
          <Text
            style={{
              color: Color.textColor,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {item.timeLeft}
            {/* {t("TIMELEFT")} */}
          </Text>
        </View>
      </View>
    </ImageBackground>
    <View
      style={{
        paddingHorizontal: wp("3.5%"),
        paddingVertical: hp("1.5%"),
      }}
    >
      <Text
        numberOfLines={1}
        style={{
          color: Color.textShadowBlue,
          fontWeight: "bold",
          fontFamily: "Poppins-SemiBold",
        }}
      >
        {item.name}
      </Text>
      <View style={styles.auctionDetailWrapStyle}>
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            color: Color.textColor,
            fontFamily: "Poppins-Regular",
          }}
        >
          {item.description}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginLeft: wp("1.5%"),
              color: Color.textColor,
              fontWeight: "bold",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {item.coinValue}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  notificationIconWrapStyle: {
    width: 40.0,
    height: 40.0,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  userImageStyle: {
    width: 50.0,
    height: 50.0,
    borderRadius: 25.0,
    borderColor: Color.textShadowBlue,
    borderWidth: 1.5,
  },
  userInfoWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: wp("3.5%"),
  },
  bannerImageStyle: {
    width: itemWidth,
    height: 150,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bannerCategoryWrapStyle: {
    backgroundColor: Color.textShadowBlue,
    paddingHorizontal: wp("5.5%"),
    paddingVertical: hp("0.5%"),
    borderRadius: 7,
    marginBottom: hp("2%"),
  },
  auctionImageStyle: {
    height: 200.0,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  auctionDetailWrapStyle: {
    marginTop: hp("0.5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeLeftWrapStyle: {
    alignSelf: "center",
    marginTop: hp("0.5%"),
    borderColor: Color.textShadowBlue,
    borderWidth: 1.0,
    paddingHorizontal: wp("4%"),
    borderRadius: 12,
    paddingVertical: hp("0.5%"),
    width: wp("40%"),
    alignItems: "center",
  },
  titleWrapStyle: {
    marginBottom: hp("1%"),
    marginHorizontal: wp("3.5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoriteAndShareIconWrapStyle: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  timeLeftAndFavoriteShareIconWrapStyle: {
    marginHorizontal: wp("3.5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomSheetWrapStyle: {
    paddingHorizontal: 20.0,
    paddingTop: hp("2%"),
    paddingBottom: hp("3%"),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 13,
    backgroundColor: Color.textColor,
  },
  createNewButtonWrapStyle: {
    backgroundColor: Color.textShadowBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingVertical: hp("1.5%"),
    marginVertical: hp("2%"),
  },
  dialogWrapStyle: {
    borderRadius: 15,
    width: width - 40,
    padding: 0.0,
  },
  collectionNameFieldStyle: {
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingHorizontal: wp("3.5%"),
    paddingVertical: hp("1.5%"),
    borderRadius: 15,
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
  },
  createCollectionButtonStyle: {
    borderRadius: 15,
    paddingVertical: hp("1.5%"),
    backgroundColor: Color.textShadowBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  dialogContentWrapStyle: {
    paddingTop: hp("2%"),
    paddingBottom: hp("3%"),
    paddingHorizontal: wp("3.5%"),
    backgroundColor: Color.textShadowBlue,
  },
  favoriteAndShareIconContainStyle: {
    backgroundColor: "rgba(255,255,255,0.07)",
    width: 30.0,
    height: 30.0,
    borderRadius: 15.0,
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    backgroundColor: "#333333",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    borderRadius: 14,
    paddingHorizontal: wp("3.5%"),
    paddingVertical: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  liveAuctions: {
    color: Color.textColor,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    fonts: wp("5%"),
  },
});
