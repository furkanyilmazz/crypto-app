import { View, TextInput, VirtualizedList } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../style";

import CoinCardComponent from "../../../components/MarketComponents/CoinCardComponent/CoinCardComponent";
import { useSelector } from "react-redux";
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import { Circle, Rect } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Color } from "../../../config/color";

import { t } from "i18next";

export default function PolygonMarket() {
  const polygon = useSelector((state) => state.market.polygon);

  return (
    <View style={styles.mainContainer}>
      {polygon.length > 0 ? (
          <VirtualizedList
            data={
              polygon
              // .sort((a, b) => b.ticker.highPrice - a.ticker.highPrice)
              // .filter((coin) => coin.ticker.quoteAsset === "USDT")
            }
            renderItem={({ item }) => <CoinCardComponent {...item} />}
            estimatedItemSize={50}
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
  );
}
