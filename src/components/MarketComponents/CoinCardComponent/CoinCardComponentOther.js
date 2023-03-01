import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../style";

import { Color } from "../../../config/color";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { signalRDisconnect } from "../../../redux/Actions/portfolioActions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useTranslation } from "react-i18next";

import { LineChart } from "react-native-wagmi-charts";

export default function CoinCardComponent(props) {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const imgUri = props.ticker.baseAsset.toLowerCase();

  const price = parseFloat(props.ticker.lastPrice2);
  const [changePrice, setChangePrice] = useState(0);

  const [prevPrice, setPrevPrice] = useState();

  const [isLoadingChart, setIsLoadingChart] = useState(false);

  const currencyFormat = (value) =>
    "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevPrice(props.ticker.lastPrice);
    }, 3000);
    return () => clearInterval(interval);
  }, [props.ticker.lastPrice2]);

  useEffect(() => {
    if (props.chart) {
      return setIsLoadingChart(true);
    }
  }, [props.chart]);

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  const CoinDetail = () => {
    dispatch(signalRDisconnect());
    navigation.navigate("CoinDetailScreen", {
      symbol: props.ticker.symbol,
    });
  };
  return (
    <View key={props.id} style={[styles.CoinCard]}>
      <TouchableOpacity
        style={{ height: hp("5%"), flexDirection: "row", flex: 1 }}
        onPress={() => {
          CoinDetail();
        }}
      >
        <Image
          style={styles.coinLogo}
          source={{
            uri: `https://assets.coincap.io/assets/icons/${imgUri}@2x.png`,
          }}
        />
        <View style={styles.coinNameArea}>
          <Text
            style={[styles.symbolLong]}
            lineBreakMode={"tail"}
            numberOfLines={1}
          >
            {props.ticker.baseAssetName}
          </Text>
          <Text
            style={styles.symbolText}
            lineBreakMode={"tail"}
            numberOfLines={1}
          >
            {props.ticker.baseAsset}
          </Text>
        </View>
        <View style={styles.chartKit}>
          {isLoadingChart && props.ticker != null ? (
            <View style={{}}>
              <LineChart.Provider
                data={props.chart.map((item) => {
                  return {
                    timestamp: item.timeStamp,
                    value: item.lastPrice,
                  };
                })}
              >
                <LineChart
                  width={wp("22%")}
                  height={hp("8.5%")}
                  style={{
                    marginTop: hp("-2%"),
                  }}
                >
                  <LineChart.Path
                    color={
                      prevPrice < props.ticker.lastPrice2
                        ? `rgba(163, 3, 6, 1)`
                        : `rgba(3, 163, 41, 1)`
                    }
                    width={2}
                  />
                </LineChart>
              </LineChart.Provider>
            </View>
          ) : (
            <View style={{ height: hp("3%") }}>
              <ActivityIndicator
                size="large"
                color={Color.textShadowBlue}
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  display: "flex",
                  flex: 1,
                  marginTop: hp("3%"),
                  marginLeft: wp("15%"),
                }}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.coinPriceArea}>
        <TouchableOpacity
          style={styles.priceDetailArea}
          onPress={() => {
            changePrice === 0
              ? setChangePrice(1)
              : changePrice === 1
              ? setChangePrice(2)
              : setChangePrice(0);
          }}
        >
          <Text
            style={styles.priceText}
            ellipsizeMode={"tail"}
            lineBreakMode={"tail"}
            numberOfLines={1}
          >
            {currencyFormat(price)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            changePrice === 0
              ? setChangePrice(1)
              : changePrice === 1
              ? setChangePrice(2)
              : setChangePrice(0);
          }}
        >
          <Text
            style={styles.priceChangeText}
            ellipsizeMode={"tail"}
            lineBreakMode={"tail"}
            numberOfLines={1}
          >
            {changePrice === 0
              ? `${t("MARKETCOMPONENTCHANGE")}: ${numFormatter(
                  props.ticker.priceChange
                )}`
              : changePrice == 1
              ? `${t("MARKETCOMPONENTSUPPLY")}: ${numFormatter(
                  props.ticker.circulatingSupply
                )}`
              : `${t("MARKETCOMPONENTVOLUME")}: ${numFormatter(
                  props.ticker.volume
                )}`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
