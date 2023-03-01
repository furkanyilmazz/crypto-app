import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  VirtualizedList,
} from "react-native";
import React, { useEffect } from "react";
import { Color } from "../../config/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Up from "../../assets/icons/up";
import Down from "../../assets/icons/down";
import { useDispatch, useSelector } from "react-redux";

export default function HomePageCustomCardComponent(props) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const userToken = auth.user[0].token;
  useEffect(() => {
    props.cardData == [] && dispatch(getMarketList(userToken));
  }, []);

  return (
    <View style={styles.customCardComponent}>
      <View style={styles.customCardTopArea}>
        <Text style={styles.customCardTitle}>{props.cardTitle}</Text>
      </View>
      <View style={styles.customCardItemArea}>
        <VirtualizedList
          scrollEnabled={false}
          data={props.cardData}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.customCardItem} key={item.id}>
              <View style={styles.customCardItemView}>
                <Image
                  style={styles.customCardCoinLogo}
                  source={{
                    uri: `https://assets.coincap.io/assets/icons/${item.baseAsset.toLowerCase()}@2x.png`,
                  }}
                />
                <View style={styles.customCardCoinTextArea}>
                  <Text
                    style={styles.customCardCoinLongName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.baseAssetName}
                  </Text>
                  <Text style={styles.customCardCoinShortName}>
                    {item.baseAsset}
                  </Text>
                </View>
              </View>
              <View style={styles.graphicArea}></View>
              <View style={styles.priceArea}>
                <Text style={styles.priceText}>{`${item.lastPrice
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} $`}</Text>
                <View style={styles.volumeArea}>
                  <Text
                    style={[
                      styles.volumeText,
                      {
                        color:
                          item.priceChangePercent < 0
                            ? "#C90303"
                            : "#27AE60",
                      },
                    ]}
                  >
                    {item.priceChangePercent < 0
                      ? item.priceChangePercent
                      : `+${item.priceChangePercent}`}
                  </Text>

                  {item.priceChangePercent < 0 ? (
                    <Down
                      width={wp("5%")}
                      height={wp("5%")}
                      style={styles.volumeIcon}
                      fill={"#C90303"}
                    />
                  ) : (
                    <Up
                      width={wp("5%")}
                      height={wp("5%")}
                      style={styles.volumeIcon}
                      fill={"#27AE60"}
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
          estimatedItemSize={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customCardTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: wp("5%"),
    color: Color.textColor,
    marginTop: hp("3%"),
    marginBottom: hp("0.5%"),
    marginLeft: wp("6%"),
  },
  customCardItemArea: {
    backgroundColor: Color.backgroundColor,
    marginHorizontal: wp("5%"),
    padding: wp("4%"),
    borderRadius: 20,
  },
  customCardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("1%"),
  },
  customCardItemView: {
    flexDirection: "row",
  },
  customCardCoinLogo: {
    width: wp("11%"),
    height: wp("11%"),
    borderRadius: wp("15%"),
  },
  customCardCoinTextArea: {
    marginLeft: wp("2%"),
    width: wp("40%"),
  },
  customCardCoinLongName: {
    fontSize: wp("4%"),
    fontFamily: "Poppins-Medium",
    color: Color.textColor,
  },
  customCardCoinShortName: {
    fontSize: wp("3.5%"),
    fontFamily: "Poppins-Bold",
    color: Color.textColor,
    opacity: 0.5,
  },
  priceArea: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  priceText: {
    fontFamily: "Poppins-Bold",
    color: Color.textColor,
  },
  volumeArea: {
    flexDirection: "row",
  },
  volumeText: {
    fontFamily: "Poppins-Medium",
  },
  loadingComponent: {
    flex: 1,
    flexDirection: "row",
  },
});
