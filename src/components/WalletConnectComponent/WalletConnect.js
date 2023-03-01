import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Clipboard,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useWalletConnect } from "react-native-walletconnect";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Color } from "../../config/color";

import DinoxSad from "../../assets/dinox/dinox_uzgun.png";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { API_URL } from "../../../config";

import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import Svg, { Circle, Rect } from "react-native-svg";

const currencyFormat = (value) =>
  "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export default function WalletConnect() {
  const { t } = useTranslation();

  const { createSession, killSession, session, signTransaction } =
    useWalletConnect();

  const hasWallet = !!session.length;

  const BaseURL = API_URL + "api/Wallets/";

  const [totalPrice, setTotalPrice] = useState(0);
  const [wallet, setWallet] = useState(null);

  console.log(session)

  useEffect(() => {
    if (hasWallet) {
      axios({
        method: "GET",
        params: {
          address: session[0].accounts[0],
        },
        url: `${BaseURL}GetAccountInfo`,
      }).then((res) => {
        setWallet(res.data.walletInfo);
        setTotalPrice(res.data.totaPrice);
      });
    }
  }, []);

  return (
    <View style={styles.walletScreen}>
      {hasWallet ? (
        <View>
          <View style={styles.portfolioEarnArea}>
            <Text style={styles.portfolioCurrentBalanceText}>
              {t("CURRENTBALANCE")}
            </Text>

            <Text style={[styles.portfolioBalanceText, {}]}>
              {totalPrice != 0
                ? currencyFormat(totalPrice)
                : t("HOMEPAGELOADING")}
            </Text>
          </View>

          {totalPrice != 0 ? (
            <FlatList
              style={styles.walletList}
              data={wallet}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.walletItem}
                  onLongPress={() => {
                    Clipboard.setString(item.token_Address);
                  }}
                >
                  <View style={styles.walletItemLeft}>
                    <View style={styles.walletItemIcon}>
                      <Text style={styles.walletIconText}>
                        {item.name.substring(0, 3).toUpperCase()}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.walletItemNameText}>{item.name}</Text>
                    </View>
                  </View>
                  <View style={styles.walletItemRight}>
                    <Text style={styles.walletItemText} numberOfLines={1}>
                      {currencyFormat(item.balance)}
                    </Text>
                    <Text style={styles.walletItemAdress} numberOfLines={1}>
                      {item.token_Address}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.address}
            />
          ) : (
            <View>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
              <SvgAnimatedLinearGradient
                width={wp("100%")}
                height={hp("10%")}
                secondaryColor={Color.textShadowBlue}
                primaryColor={Color.backgroundColor}
              >
                <Circle cx={wp("10%")} cy={hp("5%")} r="30" />
                <Rect
                  x={wp("20%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("30%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("20%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("3%")}
                  rx="4"
                  ry="4"
                  width={wp("20%")}
                  height={hp("2%")}
                />
                <Rect
                  x={wp("78%")}
                  y={hp("5.8%")}
                  ry="4"
                  width={wp("20%")}
                  height={hp("1.3%")}
                />
              </SvgAnimatedLinearGradient>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.emptyPortfolioScreen}>
          <Image style={styles.dinoxImg} source={DinoxSad} />
          <Text style={styles.emptyPortfolioText}>{t("WALLETEMPTY")}</Text>
          <TouchableOpacity onPress={createSession} style={styles.addButton}>
            <Text style={styles.addButtonText}>
              {t("DRAWEROPENPORTFOLIONWALLETCONNECT")}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  walletScreen: {
    flex: 1,
    marginTop: hp("2.5%"),
  },
  dinoxImg: {
    width: wp("100%"),
    height: hp("40%"),
    resizeMode: "contain",
    marginVertical: hp("5%"),
  },
  emptyPortfolioText: {
    textAlign: "center",
    color: Color.textColor,
    fontFamily: "Poppins-SemiBold",
    fontSize: wp("5%"),
    marginVertical: wp("5%"),
    width: wp("70%"),
    alignSelf: "center",
    marginTop: hp("-3%"),
  },
  addButton: {
    backgroundColor: Color.textShadowBlue,
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("5%"),
    marginHorizontal: wp("25%"),
    borderRadius: 10,
  },
  addButtonText: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  portfolioCurrentBalanceText: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: Color.textShadowBlue,
  },
  portfolioBalanceText: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: Color.textColor,
  },
  portfolioEarnBalanceText: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: Color.green,
  },
  portfolioEarnArea: {
    marginLeft: wp("5%"),
  },
  walletItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("5%"),
    marginVertical: hp("0.8%"),
  },
  walletItemIcon: {
    width: wp("12%"),
    height: wp("12%"),
    resizeMode: "contain",
    marginRight: wp("2%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.textShadowBlue,
    borderRadius: wp("12%"),
  },
  walletIconText: {
    color: Color.textColor,
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
  walletItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  walletItemText: {
    fontSize: wp("4%"),
    fontWeight: "700",
    color: Color.textColor,
    width: wp("50%"),
    maxWidth: wp("35%"),
  },
  walletItemNameText: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    color: Color.textColor,
    width: wp("50%"),
    maxWidth: wp("35%"),
  },
  walletItemAdress: {
    fontSize: wp("3%"),
    color: Color.textColor,
    width: wp("30%"),
  },
  separator: {
    height: hp("0.1%"),
    backgroundColor: Color.textShadowBlue,
    marginHorizontal: wp("5%"),
  },
  walletList: {
    marginVertical: wp("5%"),
    marginBottom: hp("20%"),
  },
});
