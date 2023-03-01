import React from "react";
import { View } from "react-native";

import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import Svg, { Circle, Rect } from "react-native-svg";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Color } from "../../config/color";

export default function HomePageCardLoading() {
  return (
    <View>
      <SvgAnimatedLinearGradient
        width={wp("100%")}
        height={hp("25%")}
        secondaryColor={Color.textShadowBlue}
        primaryColor={Color.backgroundColor}
      >
        <Rect
          x={wp("5%")}
          y={hp("4%")}
          rx="4"
          ry="4"
          width={wp("50%")}
          height={hp("2%")}
        />
        <Rect
          x={wp("5%")}
          y={hp("8%")}
          ry="4"
          width={wp("30%")}
          height={hp("1.5%")}
        />

        <Rect
          x={wp("5%")}
          y={hp("15%")}
          ry="10"
          width={wp("90%")}
          height={hp("7%")}
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
  );
}
