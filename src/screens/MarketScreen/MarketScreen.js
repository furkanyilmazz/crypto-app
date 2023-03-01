import { View } from "react-native";
import React, { useEffect } from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { styles } from "./style";
import { Color } from "../../config/color";

import { useTranslation } from "react-i18next";

import BinanceMarket from "./Markets/BinanceMarket";
import CoincapMarket from "./Markets/CoincapMarket";
import OtherMarket from "./Markets/OtherMarket";
import { useDispatch } from "react-redux";
import { getAllMarketValues } from "../../redux/Actions/marketActions";
import PancakeswapMarket from "./Markets/PancakeswapMarket";
import PolygonMarket from "./Markets/PolygonMarket";

export default function MarketScreen() {
  const { t } = useTranslation();
  const Tab = createMaterialTopTabNavigator();

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getAllMarketValues());
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        pagerStyle={{ backgroundColor: Color.backgroundColor }}
        sceneContainerStyle={{ backgroundColor: Color.backgroundColor }}
        style={styles.tabNavigator}
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: Color.textShadowBlue,
          tabBarInactiveTintColor: Color.textColor,
          tabBarItemStyle: {
            backgroundColor: Color.backgroundColorGradientUp,
          },
          tabBarPressColor: Color.textShadowBlue,
          tabBarBounces: false,
          tabBarAllowFontScaling: false,
          tabBarLabelStyle: {
            fontSize: wp("3.5%"),
          },

          lazy: true,
        }}
      >
        <Tab.Screen
          options={{
            // tabBarLabel: t("MARKETTITLEBINANCE"),
            tabBarBounces: false,
          }}
          name={t("MARKETTITLEBINANCE")}
          component={BinanceMarket}
        />
        {/* <Tab.Screen
          options={{
            tabBarLabel: t("MARKETTITLEPANCAKESWAP"),
            tabBarBounces: false,
          }}
          name={t("MARKETTITLEPANCAKESWAP")}
          component={PancakeswapMarket}
        /> */}
         {/* <Tab.Screen
          options={{
            tabBarLabel: t("MARKETTITLEPOLYGON"),
            tabBarBounces: false,
          }}
          name={t("MARKETTITLEPOLYGON")}
          component={PolygonMarket}
        /> */}
        {/* <Tab.Screen
          options={{
            tabBarLabel: t("MARKETTITLECOINCAP"),
            tabBarBounces: false,
          }}
          name={t("MARKETTITLECOINCAP")}
          component={CoincapMarket}
        />
        <Tab.Screen
          options={{
            tabBarLabel: t("MARKETTITLECOINMARKETCAP"),
            tabBarBounces: false,
          }}
          name={t("MARKETTITLECOINMARKETCAP")}
          component={OtherMarket}
        /> */}
      </Tab.Navigator>
    </View>
  );
}
