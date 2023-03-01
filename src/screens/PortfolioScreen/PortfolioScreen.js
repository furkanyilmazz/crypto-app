import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";

import { LineChart } from "react-native-wagmi-charts";
import { SwipeListView } from "react-native-swipe-list-view";
import { styles } from "./style";
import { Color } from "../../config/color";
import { StyleVariables } from "../../config/style-variables";

import { useNavigation } from "@react-navigation/native";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { portfolioCoinDelete } from "../../redux/Actions/portfolioActions";
import PortfolioList from "./PortfolioList";

import Trash from "../../assets/icons/trash";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useTranslation } from "react-i18next";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import EmptyPortfolioScreen from "../../components/EmptyComponent/EmptyPortfolio";
import EmptyWallet from "../../components/EmptyComponent/EmptyWallet";
import WalletConnect from "../../components/WalletConnectComponent/WalletConnect";

const currencyFormat = (value) =>
  "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const PortfolioScreen = (props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [chart, setChart] = useState(1);

  const portfolio = useSelector((state) => state.portfolio, shallowEqual);

  const [portfolioControl, setPortfolioControl] = useState(false);

  useEffect(() => {
    if (portfolio.coinList.length > 0) {
      setPortfolioControl(true);
    }
  }, [portfolio]);

  const options = [
    { label: "Portfolyo", value: "0" },
    { label: "Wallet", value: "1" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [focus, setFocus] = useState(false);

  const optionsHaptics = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  function invokeHaptic() {
    ReactNativeHapticFeedback.trigger("impactLight", optionsHaptics);
    // ReactNativeHapticFeedback.trigger('impactLight', optionsTaptic);
  }
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <SwitchSelector
          style={{
            width: wp("70%"),
            alignSelf: "center",
            marginTop: hp("1%"),
            marginBottom: hp("-1%"),
          }}
          height={hp("3.5%")}
          options={options}
          initial={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          selectedColor={Color.textShadowBlue}
          buttonColor={Color.backgroundColor}
          borderColor={Color.textShadowBlue}
          backgroundColor={Color.textShadowBlue}
          textStyle={{
            fontFamily: "Poppins-SemiBold",
            fontSize: wp("3%"),
          }}
          selectedTextStyle={{
            fontFamily: "Poppins-SemiBold",
            fontSize: wp("4%"),
            color: Color.textShadowBlue,
          }}
          hasPadding
        />
        {selectedIndex == 0 ? (
          portfolioControl ? (
            <LineChart.Provider
              data={portfolio.chartData.map((item) => {
                return {
                  timestamp: Date.parse(item.timeStamp),
                  value: item.lastPrice.toString(),
                };
              })}
            >
              <View style={styles.portfolioScreenComponent}>
                <View style={styles.portfolioEarnArea}>
                  <Text style={styles.portfolioCurrentBalanceText}>
                    {t("CURRENTBALANCE")}
                  </Text>

                  {/* {focus ? (
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.portfolioBalanceText}>$</Text>
                        <LineChart.PriceText
                          style={styles.portfolioBalanceText}
                        />
                      </View>
                    ) : ( */}
                  <Text style={[styles.portfolioBalanceText, {}]}>
                    {portfolioControl === false
                      ? "Hesaplanıyor..."
                      : hide === true
                      ? "*******"
                      : currencyFormat(portfolio.portfolioAllData.totalPrice)}
                  </Text>

                  {/* )} */}
                  <Text style={styles.portfolioEarnBalanceText}>
                    {hide === true || portfolioControl === false
                      ? "********"
                      : currencyFormat(
                          portfolio.portfolioAllData.totalPriceUser24Hour
                        ) + "  (24 saat)"}
                  </Text>
                </View>
                <View style={[styles.portfolioEarnArea]}>
                  <View
                    style={[
                      styles.portfolioEarningView,
                      {
                        backgroundColor:
                          portfolio.portfolioAllData.totalPriceChangePercent > 0
                            ? Color.green
                            : Color.error,
                      },
                    ]}
                  >
                    <Text
                      style={styles.portfolioEarnAreaText}
                      numberOfLines={1}
                    >
                      {/* {hide === true || isLoadingChart === false
                    ? '******'
                    : `%${portfolioData.totalPriceChangePercent.toFixed(2)}`} */}
                      {hide === true || portfolioControl === false
                        ? "******"
                        : `%${portfolio.portfolioAllData.totalPriceChangePercent.toFixed(
                            2
                          )}`}
                    </Text>
                  </View>
                  <View style={styles.portfolioEarnButtonArea}>
                    <TouchableOpacity
                      onPress={() => {
                        setChart(1);
                      }}
                    >
                      {/* <Ionicons
                    name={"bar-chart-outline"}
                    size={25}
                    color={Color.buttonColor}
                    style={styles.portfolioChangeChartIcon}
                  /> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={true}
                      onPress={() => {
                        setChart(2);
                      }}
                    >
                      {/* <Ionicons
                    name={"pie-chart-outline"}
                    size={25}
                    color={Color.buttonColor}
                    style={styles.portfolioChangeChartIcon}
                  /> */}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.portfolioChartArea}>
                {portfolioControl ? (
                  <LineChart width={wp("99%")} height={hp("35%")}>
                    <LineChart.Path
                      color={Color.textShadowBlue}
                      mountAnimationDuration={1000}
                    >
                      <LineChart.Gradient color={Color.textShadowBlue} />
                    </LineChart.Path>
                  </LineChart>
                ) : (
                  <View style={{ height: hp("41.8%") }}>
                    <ActivityIndicator
                      size="large"
                      color={Color.textShadowBlue}
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        display: "flex",
                        flex: 1,
                      }}
                    />
                  </View>
                )}

                {/* <PortfolioDateComponent
              isSelected={period}
              clicked={e => {
                setPeriod(e);
              }}
            /> */}
              </View>

              <View
                style={[
                  styles.portfolioLine,
                  { marginTop: StyleVariables.width * 0.05 },
                ]}
              />

              <View style={styles.portfolioAssets}>
                <Text style={styles.portfolioAssetsText}>
                  {t("URPRESENCE")}
                </Text>
                <View>
                  <View style={styles.portfolioAssetsTitleArea}>
                    <Text
                      style={[
                        styles.portfolioAssetsTitle,
                        { textAlign: "left" },
                      ]}
                    >
                      {t("PRESENCE")}
                    </Text>
                    <Text style={styles.portfolioAssetsTitle}>
                      {" "}
                      {t("PRICE")}
                    </Text>
                    <Text style={styles.portfolioAssetsTitle}>{t("OWN")}</Text>
                  </View>
                  <View style={styles.portfolioLine} />
                </View>
              </View>

              <SwipeListView
                style={styles.listContainer}
                data={portfolio.coinList}
                key={(item) => item.id}
                renderItem={({ item }) => (
                  <PortfolioList
                    {...item}
                    // {...portfolio.portfolioData[0]}
                    hide={hide}
                  />
                )}
                // keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                rightOpenValue={-100}
                leftOpenValue={-100}
                disableVirtualization={true}
                previewOpenDelay={100}
                renderHiddenItem={(data) => (
                  <TouchableOpacity
                    style={styles.rowBack}
                    onPress={(bagla) => {
                      Alert.alert(
                        t("DELETEASSET"),
                        t("DELETEASSETQUESTION"),
                        [
                          {
                            text:         t("DELETEASSET"),
                            onPress: () => {
                              const symbol = data.item.symbol;
                              dispatch(
                                portfolioCoinDelete(
                                  portfolio.portfolioId,
                                  symbol
                                )
                              );
                            },
                          },
                          {
                            text: t("CANCEL"),
                            onPress: () => {},
                          },
                        ],
                        { cancelable: false }
                      );
                    }}
                  >
                    <View style={styles.backRightBtn}>
                      {/* <Ionicons
                    name="ios-trash"
                    size={25}
                    color={Color.textColor}
                    style={styles.backTextWhite}
                  /> */}
                      <Trash
                        width={wp("7%")}
                        height={wp("7%")}
                        fill={Color.textColor}
                        style={styles.backTextWhite}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                directionalDistanceChangeThreshold={20}
              />

              <TouchableOpacity
                style={styles.portfolioItemAddButton}
                onPress={() => {
                  navigation.navigate("PortfolioCoinAddScreen");
                  // navigation.navigate('WalletConnectScreen');
                }}
              >
                <Text style={styles.portfolioItemAddButtonText}>
                  {t("ROUTERTITLECOINADD")}
                </Text>
              </TouchableOpacity>

              <View style={{ height: 130 }} />
            </LineChart.Provider>
          ) : (
            <EmptyPortfolioScreen />
          )
        ) : (
          <WalletConnect />
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { portfolio: state.portfolio };
};

export default connect(mapStateToProps)(PortfolioScreen);
