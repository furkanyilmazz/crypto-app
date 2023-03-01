import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { Color } from "../../config/color";
import Carousel from "react-native-snap-carousel-v4";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { t } from "i18next";
import axios from "axios";
import DiscoveryScreen from "./NftAltScreens/DiscoveryScreen/DiscoveryScreen";

const { width } = Dimensions.get("window");

const itemWidth = Math.round(width * 0.8);

const bannerList = [
  {
    image: require("../../assets/banners/banner1.png"),
    category: "Art",
  },
  {
    image: require("../../assets/banners/banner2.png"),
    category: "Music",
  },
  {
    image: require("../../assets/banners/banner3.png"),
    category: "Cyber",
  },
];

const liveAuctionsList = [
  {
    id: "1",
    auctionImage: require("../../assets/nft/bery1.jpg"),
    auctionName: "Cute Kedy",
    auctionOwner: "@beryque",
    coinValue: "2.24254 ETH",
    timeLeft: "14h 16m",
  },
  {
    id: "2",
    auctionImage: require("../../assets/nft/bery2.jpg"),
    auctionName: "Chef Kedy",
    auctionOwner: "@beryque",
    coinValue: "3 ETH",
    timeLeft: "15h 16m",
  },
  {
    id: "3",
    auctionImage: require("../../assets/nft/bery3.jpg"),
    auctionName: "Skater Kedy",
    auctionOwner: "@beryque",
    coinValue: "1.2423 ETH",
    timeLeft: "1h 16m",
  },
  {
    id: "4",
    auctionImage: require("../../assets/nft/bery4.jpg"),
    auctionName: "Well-Groomed Kedy",
    auctionOwner: "@beryque",
    coinValue: "0.445 ETH",
    timeLeft: "33h 16m",
  },
  {
    id: "5",
    auctionImage: require("../../assets/nft/bery5.jpg"),
    auctionName: "SuperKedy",
    auctionOwner: "@beryque",
    coinValue: "5.1 ETH",
    timeLeft: "97h 16m",
  },
  {
    id: "6",
    auctionImage: require("../../assets/nft/bery6.jpg"),
    auctionName: "Uncle Kedy",
    auctionOwner: "@beryque",
    coinValue: "0.0002 ETH",
    timeLeft: "43h 16m",
  },
  {
    id: "7",
    auctionImage: require("../../assets/nft/bery7.jpg"),
    auctionName: "Zombie Kedy",
    auctionOwner: "@beryque",
    coinValue: "0.00009 ETH",
    timeLeft: "2h 16m",
  },
];

const topCreatorsList = [
  {
    id: "1",
    creatorImage: require("../../assets/dinox/tatli_dinox.png"),
    creatorName: "Beryque",
    coinValue: "24.596 ETH",
  },
  {
    id: "2",
    creatorImage: require("../../assets/dinox/sapkali_dinox.png"),
    creatorName: "AS4LEX",
    coinValue: "2.0 ETH",
  },
  {
    id: "1",
    creatorImage: require("../../assets/dinox/tatli_dinox.png"),
    creatorName: "Beryque",
    coinValue: "24.596 ETH",
  },
  {
    id: "2",
    creatorImage: require("../../assets/dinox/sapkali_dinox.png"),
    creatorName: "AS4LEX",
    coinValue: "2.0 ETH",
  },
];

const followingList = [
  {
    id: "1",
    auctionImage: require("../../assets/nft/bery1.jpg"),
    auctionName: "Butterfly Kedy",
    auctionOwner: "@beryque",
    coinValue: "1.20 ETH",
    timeLeft: "1h 9m",
  },
  {
    id: "2",
    auctionImage: require("../../assets/nft/bery3.jpg"),
    auctionName: "Skater Kedy",
    auctionOwner: "@AS4LEX",
    coinValue: "0.31 ETH",
    timeLeft: "10h 6m",
  },
  {
    id: "3",
    auctionImage: require("../../assets/nft/bery2.jpg"),
    auctionName: "Chef Kedy",
    auctionOwner: "@beryque",
    coinValue: "0.94 ETH",
    timeLeft: "15h 23m",
  },
];

const NftScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.backgroundColor }}>
      <StatusBar translucent={false} backgroundColor={Color.textShadowBlue} />
      <DiscoveryScreen />
      {/* <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <>
              {banners()}
              {liveAuctionsInfo()}
              {topCreatorInfo()}
              {followingInfo()}
            </>
          }
          showsVerticalScrollIndicator={false}
        />
      </View> */}
    </View>
  );

  function followingInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={() => navigation.push("LiveAuctionsDetail", { item: item })}
        style={{
          marginBottom: hp("2%"),
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      >
        <ImageBackground
          source={item.auctionImage}
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
                {item.timeLeft} {t("TIMELEFT")}
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
            {item.auctionName}
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
              {item.auctionOwner}
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
    return (
      <View
        style={{
          marginTop: hp("2%"),
          marginHorizontal: wp("3.5%"),
        }}
      >
        <Text
          style={{
            marginBottom: hp("1.5%"),
            color: Color.textColor,
            fontFamily: "Poppins-Regular",
            fontSize: wp("3.5%"),
            marginTop: hp("1%"),
          }}
        >
          {t("FOLLOWINGLIST")}
        </Text>
        <FlatList
          data={followingList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    );
  }

  function topCreatorInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={() => navigation.push("CreatorProfile")}
        style={{
          marginRight: wp("3.5%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={item.creatorImage}
          style={{ width: 55.0, height: 55.0, borderRadius: 27.5 }}
        />
        <View style={{ color: Color.textColor }}>
          <Text
            style={{
              color: Color.textShadowBlue,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {item.creatorName}
          </Text>
          <Text
            style={{
              marginTop: hp("0.5%"),
              lineHeight: 15.0,
              color: Color.textColor,
            }}
          >
            {item.coinValue}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View
        style={{
          marginTop: hp("2%"),
        }}
      >
        <View style={styles.titleWrapStyle}>
          <Text
            style={{
              color: Color.textColor,
              fontFamily: "Poppins-SemiBold",
              fontWeight: "500",
              fontsize: wp("4.5%"),
            }}
          >
            {t("TOPCREATOR")}
          </Text>
        </View>
        <FlatList
          data={topCreatorsList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: wp("3.5%"),
          }}
        />
      </View>
    );
  }

  function liveAuctionsInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={() => {
        //   navigation.push("LiveAuctionsDetail", { item: item });
        // }}
        style={{
          marginRight: wp("3.5%"),
          borderRadius: 15,
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      >
        <ImageBackground
          source={item.auctionImage}
          style={{ ...styles.auctionImageStyle, width: 200.0 }}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        ></ImageBackground>
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
              fontFamily: "Poppins-SemiBold",
              fontSize: wp("3.5%"),
            }}
          >
            {item.auctionName}
          </Text>
          <View style={styles.auctionDetailWrapStyle}>
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                color: Color.textColor,
                fontFamily: "Poppins-Regular",
                fontSize: wp("2.8%"),
              }}
            >
              {item.auctionOwner}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  marginLeft: wp("2%"),
                  color: Color.textColor,
                  fontSize: wp("3.5%"),
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                {item.coinValue}
              </Text>
            </View>
          </View>
          <View style={styles.timeLeftWrapStyle}>
            <Text style={{ color: Color.textColor }}>
              {item.timeLeft} {t("TIMELEFT")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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
          data={liveAuctionsList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: wp("3.5%"),
          }}
        />
      </View>
    );
  }

  function banners() {
    const renderItem = ({ item }) => (
      <ImageBackground
        source={item.image}
        style={styles.bannerImageStyle}
        resizeMode="cover"
        borderRadius={15}
      >
        <View style={styles.bannerCategoryWrapStyle}>
          <Text
            style={{
              color: Color.textColor,
              fontSize: wp("3.5%"),
              fontFamily: "Poppins-Bold",
            }}
          >
            {item.category}
          </Text>
        </View>
      </ImageBackground>
    );
    return (
      <View
        style={{
          marginTop: hp("2%"),
        }}
      >
        <Carousel
          data={bannerList}
          sliderWidth={width}
          itemWidth={itemWidth}
          renderItem={renderItem}
          autoplay={true}
          loop={true}
          autoplayInterval={4000}
        />
      </View>
    );
  }
};

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

export default NftScreen;
