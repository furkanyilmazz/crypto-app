import { Text, View, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";

import { styles } from "./style";
import { Color } from "../../config/color";
import HomePageCustomCardComponent from "../../components/HomePageCustomCardComponent/HomePageCustomCardComponent";
import HomePageAdsComponent from "../../components/HomePageAdsComponent/HomePageAdsComponent";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { shallowEqual, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { LineChart } from "react-native-wagmi-charts";
import HomePageCardLoading from "../../components/HomePageLoading/HomePageLoading";
import { API_URL } from "../../../config";
import axios from "axios";
import EmptyPortfolio from "../../components/EmptyComponent/EmptyPortfolioHomeScreen";

export default function HomeScreen() {
  const baseURL = API_URL + "api/Binance/";
  const { t } = useTranslation();

  const auth = useSelector((state) => state.auth, shallowEqual);
  const portfolio = useSelector((state) => state.portfolio, shallowEqual);

  const [portfolioData, setPortfolioData] = useState([]);

  const [marketList, setMarketList] = useState([]);

  const [ads, setAds] = useState([]);

  const [marketControl, setMarketControl] = useState(false);
  const [portfolioControl, setPortfolioControl] = useState(false);

  useEffect(() => {
    setPortfolioData(portfolio);

    if (portfolio.coinList.length > 0) {
      setPortfolioControl(true);
    }
  }, [portfolio]);

  const dateTimeUser = () => {
    const date = new Date();
    const hour = date.getHours();

    switch (true) {
      case hour <= 5 || hour > 22:
        return t("HOMEPAGEDATETIME5");
      case hour <= 10:
        return t("HOMEPAGEDATETIME1");
      case hour <= 14:
        return t("HOMEPAGEDATETIME2");
      case hour <= 18:
        return t("HOMEPAGEDATETIME3");
      case hour <= 22:
        return t("HOMEPAGEDATETIME4");
      default:
        return t("HOMEPAGEDATETIME2");
    }
  };

  const currencyFormat = (value) =>
    "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  function fetchMarketList() {
    return axios
      .get(baseURL + "GetMainMarketList")
      .then((res) => {
        setMarketList(res.data);
        setTimeout(() => {
          setMarketControl(true);
        }, 500);
      })
      .catch((err) => {
        setMarketControl(false);
        fetchReMarketList();
      });
  }

  function fetchReMarketList() {
    return axios.get(baseURL + "GetMainMarketList").then((res) => {
      setMarketList(res.data);
      setMarketControl(true);
    });
  }

  function fetchAds() {
    return axios
      .get(API_URL + "api/Admin/GetAllPathInAdvertisement")
      .then((response) => {
        return setAds(response.data.data);
      });
  }

  useEffect(() => {
    fetchMarketList();
  }, [portfolioData]);

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      {marketControl ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              tintColor={Color.textColor}
              refreshing={false}
              onRefresh={() => {
                fetchMarketList();
              }}
            />
          }
          scrollEventThrottle={16}
        >
          <View style={styles.shortPortfolioArea}>
            <View style={styles.shortPortfolioAreaInfo}>
              {portfolioControl ? (
                <View>
                  <Text
                    style={styles.shortPortfolioUserNameText}
                    numberOfLines={1}
                  >
                    {dateTimeUser()}
                    <Text
                      style={[
                        styles.shortPortfolioUserNameText,
                        styles.shortPortfolioUserNameTextThin,
                      ]}
                    >
                      {""}
                      {auth.user[1].firstName}
                    </Text>
                  </Text>

                  <View style={styles.shortPortfolioUserEarnArea}>
                    <Text
                      style={[
                        styles.shortPortfolioUserEarnAreaText,
                        {
                          maxWidth: wp("70%"),
                        },
                      ]}
                      numberOfLines={1}
                    >
                      {portfolioControl
                        ? `${currencyFormat(
                            portfolio.portfolioAllData.totalPrice
                          )}`
                        : t("HOMEPAGELOADING")}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.shortPortfolioUserEarn}>
                        <Text
                          style={[
                            styles.shortPortfolioUserEarnText,
                            styles.shortPortfolioUserEarnTextChange,
                          ]}
                        >
                          {t("HOMEPAGECHANGE")}
                        </Text>
                        <Text
                          style={[
                            styles.shortPortfolioUserEarnText,
                            styles.shortPortfolioUserEarnTextPrice,
                          ]}
                        >
                          {portfolioControl
                            ? `${currencyFormat(
                                portfolio.portfolioAllData.totalPriceUser24Hour
                              )}`
                            : "**********"}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ height: 20 }} />
                </View>
              ) : (
                <EmptyPortfolio />
              )}

              <View style={{ height: 20 }} />
            </View>
            {portfolioControl && (
              <View style={styles.chartKitHome}>
                <LineChart.Provider
                  xLength={wp("10%")}
                  data={portfolio.chartData.map((item) => {
                    return {
                      timestamp: item.timeStamp,
                      value: item.lastPrice,
                    };
                  })}
                >
                  <LineChart width={wp("40%")} height={hp("15%")}>
                    <LineChart.Path color={Color.textShadowBlue} width={2} />
                  </LineChart>
                </LineChart.Provider>
              </View>
            )}
          </View>

          <HomePageAdsComponent ads={ads} />

          <HomePageCustomCardComponent
            cardTitle={t("HOMEPAGEWIDGETGROW")}
            cardData={marketList.grow}
          />

          <HomePageCustomCardComponent
            cardTitle={t("HOMEPAGEWIDGETUP")}
            cardData={marketList.volume}
          />

          <HomePageCustomCardComponent
            cardTitle={t("HOMEPAGEWIDGETDOWN")}
            cardData={marketList.low}
          />

          <View style={{ height: 150 }} />

          {/* <View style={styles.helpPanelComponent}>
            <Text style={styles.helpPanelTextTitle}> Yardım paneli</Text>
            <View style={styles.helpPanelRow}>
              <TouchableOpacity style={styles.helpPanelArea}>
                <Text style={styles.helpPanelText}>Haberler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.helpPanelArea}>
                <Text style={styles.helpPanelText}>Kripto</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.helpPanelRow}>
              <TouchableOpacity style={styles.helpPanelArea}>
                <Text style={styles.helpPanelText}>Borsa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.helpPanelArea}>
                <Text style={styles.helpPanelText}>NFT</Text>
              </TouchableOpacity>
            </View>
          </View>
          */}
        </ScrollView>
      ) : (
        <HomePageCardLoading />
      )}
    </LinearGradient>
  );
}
