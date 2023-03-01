import React, { useEffect } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Color } from "../../config/color";

import Home from "../../assets/customBottomBar/home-logo";
import Market from "../../assets/customBottomBar/market-logo";
import Portfolio from "../../assets/customBottomBar/portfolio-logo";
import News from "../../assets/customBottomBar/news-logo";
import Nft from "../../assets/customBottomBar/nft-logo";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  signalRDisconnect,
  signalRportfolio,
} from "../../redux/Actions/portfolioActions";

export default function CustomBottomBar({
  state,
  descriptors,
  navigation,
  isShow,
}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user, shallowEqual);
  const auth = useSelector((state) => state.auth, shallowEqual);
  const portfolio = useSelector((state) => state.portfolio, shallowEqual);

  // useEffect(() => {
  //   if (state.index === 2) {
  //     dispatch(signalRDisconnect());
  //   } else {
  //     dispatch(
  //       signalRportfolio(auth.user[0].token, auth.user[1].currentPortfolioId)
  //     );
  //   }
  // }, [state.index]);

  useEffect(() => {
    if (user.bottomHide) {
      offset.value = 1;
    } else {
      offset.value = 0;
    }
  }, [user.bottomHide]);

  const offset = useSharedValue(0);

  const customSpringStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(offset.value * 255, {
          damping: 1000,
          stiffness: 500,
        }),
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.box,
        customSpringStyles,
        styles.bottomBarComponent,
        { flexDirection: "row", display: isShow ? "flex" : "none" },
      ]}
    >
      <Image
        source={require("../../assets/customBottomBar/bottombarback.png")}
        blurRadius={20}
        style={styles.bottomBarComponentImage}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
          if (route.name === "PortfolioScreen") {
            //      dispatch(getAllByUserId(userId, userToken));
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="tab"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              // display: state.routes[0].params.tabBarVisible ? "flex" : "none",
            }}
            key={route.key}
          >
            {route.name === "HomeScreen" ? (
              <Home
                style={styles.tabbarIcon}
                width={wp("12%")}
                height={wp("12%")}
                fill={isFocused ? "#9EA3FF" : "#696969"}
              />
            ) : route.name === "MarketScreen" ? (
              <Market
                style={styles.tabbarIcon}
                width={wp("12%")}
                height={wp("12%")}
                fill={isFocused ? "#9EA3FF" : "#696969"}
              />
            ) : route.name === "PortfolioScreen" ? (
              <Portfolio
                style={styles.tabbarIcon}
                width={wp("12%")}
                height={wp("12%")}
                fill={isFocused ? "#9EA3FF" : "#696969"}
              />
            ) : route.name === "NewsScreen" ? (
              <News
                style={styles.tabbarIcon}
                width={wp("12%")}
                height={wp("12%")}
                fill={isFocused ? "#9EA3FF" : "#696969"}
              />
            ) : route.name === "NftScreen" ? (
              <Nft
                style={styles.tabbarIcon}
                width={wp("12%")}
                height={wp("12%")}
                fill={isFocused ? "#9EA3FF" : "#696969"}
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bottomBarComponent: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: hp("10%"),
    width: wp("80%"),
    bottom: hp("5%"),
    borderRadius: 20,
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 10,
    shadowOpacity: 0.06,
    elevation: 10,
    zIndex: 1,
  },
  tabbarIcon: {
    justifyContent: "center",
    alignSelf: "center",
    width: wp("15%"),
    height: wp("15%"),
  },
  bottomBarComponentImage: {
    position: "absolute",
    width: wp("80%"),
    height: wp("18%"),
    borderRadius: 20,
    opacity: 0.95,
  },
  animatedView: {},
});
