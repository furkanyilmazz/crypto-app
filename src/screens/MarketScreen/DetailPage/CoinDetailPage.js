import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Color } from "../../../config/color";

import { LineChart } from "react-native-wagmi-charts";
import ImageColors from "react-native-image-colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import SwitchSelector from "react-native-switch-selector";
import CoinDetailGeneral from "../../../components/CoinDetailGeneral/CoinDetailGeneral";
import axios from "axios";
import CoinDetailNews from "../../../components/CoinDetailGeneral/CoinDetailNews";

export default function CoinDetailPage(props) {
  const { t } = useTranslation();
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [prevCoinData, setPrevCoinData] = useState([]);

  const [coinColor, setCoinColor] = useState(Color.textShadowBlue);

  const [isLoadingChart, setIsLoadingChart] = useState(false);

  const socket = useSelector((state) => state.market);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedIndexBottom, SetSelectedIndexBottom] = useState(0);

  const options = [
    { label: t("COINDETAILLABEL1"), value: "0" },
    { label: t("COINDETAILLABEL2"), value: "1" },
  ];

  const optionsChart = [
    { label: t("COINDETAILLABEL3"), value: "0" },
    { label: t("COINDETAILLABEL4"), value: "1" },
    { label: t("COINDETAILLABEL5"), value: "24" },
    { label: t("COINDETAILLABEL6"), value: "168" },
    { label: t("COINDETAILLABEL7"), value: "720" },
    { label: t("COINDETAILLABEL8"), value: "4320" },
    { label: t("COINDETAILLABEL9"), value: "8760" },
  ];

  useEffect(() => {
    getChart();
    setCoinData(socket.marketSocketData.token);
  }, [socket.marketSocketData]);

  useEffect(() => {
    getColor();

    setTimeout(() => {
      setIsLoadingChart(true);
    }, 1000);
    const interval = setInterval(() => {
      setPrevCoinData(coinData);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  async function getColor() {
    try {
      const source = await props.route.params.imgUri;
      const colors = await ImageColors.getColors(
        `https://assets.coincap.io/assets/icons/${source}@2x.png`,
        {
          fallback: "#858CFF",
          key: "unique_key",
        }
      );
      setCoinColor(colors.secondary);
    } catch (e) {
      console.log(e);
    }
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  async function getChart() {
    try {
      if (selectedIndex == 0) {
        setChartData(socket.marketSocketData.chart);
      } else {
        axios
          .get(
            "https://fhx.idealdata.com.tr/api/BinanceChart/GetHistoryByChartTypeAndSymbol",
            {
              params: {
                chartType: selectedIndex,
                symbol: props.route.params.symbol,
              },
            }
          )
          .then((res) => {
            setChartData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (e) {
      console.log(e);
    }
  }

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.topCont}>
          <View styles={styles.topContItems}>
            <Text style={styles.headerText}>{t("COINDETAILOPENPRICE")}</Text>
            <Text style={styles.text}>
              {isLoadingChart ? coinData.openPrice : "***"}
            </Text>
          </View>
          <View style={styles.topContItems}>
            <Text style={styles.headerText}>{t("COINDETAILCLOSEPRICE")}</Text>
            <Text style={styles.text}>
              {isLoadingChart ? coinData.prevDayClosePrice : "***"}
            </Text>
          </View>
          <View style={styles.topContItems}>
            <Text style={styles.headerText}>{t("COINDETAILSUPPLY")}</Text>
            <Text style={styles.text}>
              {isLoadingChart ? kFormatter(coinData.circulatingSupply) : "***"}
            </Text>
          </View>
        </View>
        <View style={styles.instantValueCont}>
          <View style={{ flex: 2 }}>
            <Text
              style={[
                styles.instantPrice,
                {
                  color: coinColor,
                },
              ]}
              numberOfLines={1}
              lineBreakMode="tail"
            >
              {isLoadingChart ? coinData.baseAssetName : t("HOMEPAGELOADING")}
            </Text>
            <Text style={styles.usdtText}>USDT</Text>
            <Text style={styles.instantHeader}>{t("COINDETAILLASTPRICE")}</Text>
            <Text
              style={[
                styles.instantPrice,
                {
                  color: isLoadingChart
                    ? coinData.lastPrice > prevCoinData.lastPrice
                      ? Color.green
                      : Color.error
                    : Color.textShadowBlue,
                },
              ]}
            >
              {isLoadingChart
                ? formatter.format(coinData.lastPrice)
                : t("HOMEPAGELOADING")}
            </Text>
            <Text style={styles.instantHeader}>
              =1 {isLoadingChart ? coinData.baseAssetName : "..."}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <View>
              <Text style={styles.instantHeader}>
                {t("COINDETAIL24LASTPRICE")}
              </Text>
              <Text style={styles.instantValue}>
                {isLoadingChart
                  ? formatter.format(coinData.highPrice)
                  : t("HOMEPAGELOADING")}
              </Text>
            </View>
            <View>
              <Text style={styles.instantHeader}>
                {t("COINDETAIL24LOWPRICE")}
              </Text>
              <Text style={styles.instantValue}>
                {isLoadingChart
                  ? formatter.format(coinData.lowPrice)
                  : "********"}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              marginVertical: wp("5%"),
              // marginBottom: wp('15%'),
            }}
          >
            <SwitchSelector
              style={{
                width: wp("90%"),
                alignSelf: "center",
                marginTop: hp("1%"),
                marginBottom: hp("1.5%"),
              }}
              height={hp("3.5%")}
              options={optionsChart}
              initial={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
              }}
              selectedColor={coinColor}
              buttonColor={coinColor}
              borderColor={Color.backgroundColor}
              backgroundColor={Color.backgroundColor}
              textStyle={{
                fontFamily: "Poppins-SemiBold",
                fontSize: wp("3%"),
                color: coinColor,
              }}
              selectedTextStyle={{
                fontFamily: "Poppins-SemiBold",
                fontSize: wp("4%"),
                color: Color.backgroundColor,
              }}
              hasPadding
            />
            {isLoadingChart ? (
              <LineChart.Provider
                data={chartData.map((item) => {
                  return {
                    timestamp: Date.parse(item.timeStamp),
                    value: item.lastPrice.toString(),
                  };
                })}
              >
                <LineChart width={wp("99%")} height={hp("35%")}>
                  <LineChart.Path
                    color={coinColor}
                    mountAnimationDuration={1000}
                  >
                    <LineChart.Gradient color={coinColor} />
                  </LineChart.Path>
                </LineChart>
              </LineChart.Provider>
            ) : (
              <View style={{ height: hp("50.3%") }}>
                <ActivityIndicator
                  size="large"
                  color={Color.textShadowBlue}
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    // display: "flex",
                    flex: 1,
                  }}
                />
              </View>
            )}
            <View>
              <SwitchSelector
                style={{
                  width: wp("90%"),
                  alignSelf: "center",
                  marginTop: hp("1%"),
                }}
                height={hp("3.5%")}
                options={options}
                initial={selectedIndexBottom}
                onPress={(value) => {
                  SetSelectedIndexBottom(value);
                }}
                selectedColor={coinColor}
                buttonColor={coinColor}
                borderColor={coinColor}
                backgroundColor={Color.backgroundColor}
                textStyle={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: wp("3%"),
                  color: coinColor,
                }}
                selectedTextStyle={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: wp("4%"),
                  color: Color.backgroundColor,
                }}
                hasPadding
              />
              {selectedIndexBottom == 0 ? (
                coinData && (
                  <CoinDetailGeneral
                    coinColor={coinColor}
                    circulatingSupply={coinData.circulatingSupply}
                    closePrice={coinData.closePrice}
                    highPrice={coinData.highPrice}
                    lowPrice={coinData.lowPrice}
                    openPrice={coinData.openPrice}
                    prevDayClosePrice={coinData.prevDayClosePrice}
                    priceChangePercent={coinData.priceChangePercent}
                    stopLevel={coinData.stopLevel}
                    targetLevel={coinData.targetLevel}
                    totalTrades={coinData.totalTrades}
                    volume={coinData.volume}
                    weightedAveragePrice={coinData.weightedAveragePrice}
                  />
                )
              ) : selectedIndexBottom == 1 ? (
                <CoinDetailNews
                  baseAsset={coinData.baseAsset}
                  coinColor={coinColor}
                />
              ) : null}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.backgroundColorGradientUp,
  },
  topCont: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    // display: "flex",
    marginTop: wp("3%"),
    alignItems: "center",
  },
  topContItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "bold",
    opacity: 0.25,
    textAlign: "center",
    width: wp("30%"),
  },
  text: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  instantValueCont: {
    flexDirection: "row",
    margin: "5%",
  },
  instantHeader: {
    color: Color.opacityWhite,
    fontWeight: "bold",
    fontSize: wp("3.5%"),
    marginTop: wp("1%"),
  },
  instantPrice: {
    color: Color.textColor,
    fontSize: wp("7%"),
    fontWeight: "bold",
    letterSpacing: -1,
  },
  instantValue: {
    color: Color.textColor,
    fontSize: wp("4.5%"),
    fontWeight: "400",
    //margin: "3%"
  },
  usdtText: {
    color: Color.textColor,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: wp("3.5%"),
    marginTop: wp("-1.2%"),
  },
});
