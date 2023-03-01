import React, { useState, useRef } from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Color } from "./config/color";

//Screens
import IntroComponent from "./components/IntroComponent/IntroComponent";
import SplashScreenFirst from "./screens/SplashScreen/SplashScreenFirst";
import SplashScreenSecond from "./screens/SplashScreen/SplashScreenSecond";
import SignUpStepOne from "./screens/SignUpScreen/SignUpStep1/SignUpStepOne";
import SignUpStepTwo from "./screens/SignUpScreen/SignUpStep2/SignUpStepTwo";
import SignUpStepThree from "./screens/SignUpScreen/SignUpStep3/SignUpStepThree";
import SignUpStepFour from "./screens/SignUpScreen/SignUpStep4/SignUpStepFour";
import SignUpFinishScreen from "./screens/SignUpScreen/SignUpFinishScreen/SignUpFinishScreen";
import SignInScreen from "./screens/SignInScreen/SignInScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MarketScreen from "./screens/MarketScreen/MarketScreen";
import PortfolioScreen from "./screens/PortfolioScreen/PortfolioScreen";
import NewsScreen from "./screens/NewsScreen/NewsScreen";
import NftScreen from "./screens/NftScreen/NftScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import PortfolioCoinAddScreen from "./screens/PortfolioScreen/PortfolioCoinAddScreen";
import TapToAddPortfolioComponent from "./components/TapToAddPortfolioComponent/TapToAddPortfolioComponent";
import CoinDetailPage from "./screens/MarketScreen/DetailPage/CoinDetailPage";
import NewsDetailsComponent from "./components/NewsDetailsComponent/NewsDetailsComponent";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import HelpCenterScreen from "./screens/HelpCenterScreen/HelpCenterScreen";

//Components
import CustomTabBar from "./components/BottomBarComponent/CustomBottomBar";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import NewPortfolioAddComponent from "./components/NewPortfolioAddComponent/NewPortfolioAddComponent";

//assets
import Person from "./assets/icons/person";
import Add from "./assets/icons/add";

import { useTranslation } from "react-i18next";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import KVKKScreen from "./screens/SignUpScreen/KVKKScreen/KVKKScreen";
import storage from "./config/storage";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen/ForgotPasswordScreen";
import ForgotPasswordSuccess from "./screens/ForgotPasswordScreen/ForgotPasswordSuccess";
import {
  reConnectPortfolio,
  signalRReconnect,
} from "./redux/Actions/portfolioActions";
import { signalRMarketDisconnect } from "./redux/Actions/marketActions";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Router(props) {
  const navigationRef = useRef();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const TabScreens = () => (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} isShow={show} />}
    >
      <Tab.Screen
        name="HomeScreen"
        component={DrawerScreens}
        options={{
          tabBarAccessibilityLabel: "Home",
          headerShown: false,
          animation: "fade",
          headerBackVisible: false,
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="MarketScreen"
        component={DrawerScreens}
        options={{
          tabBarAccessibilityLabel: "Market",
          headerShown: false,
          animation: "fade",
          headerBackVisible: false,
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="PortfolioScreen"
        component={DrawerScreens}
        options={{
          tabBarAccessibilityLabel: "Portfolio",
          headerShown: false,
          animation: "fade",
          headerBackVisible: false,
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={DrawerScreens}
        options={{
          tabBarAccessibilityLabel: "News",
          headerShown: false,
          animation: "fade",
          headerBackVisible: false,
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="NftScreen"
        component={DrawerScreens}
        options={{
          tabBarAccessibilityLabel: "NFT",
          headerShown: false,
          animation: "fade",
          headerBackVisible: false,
          tabBarVisible: true,
        }}
      />
    </Tab.Navigator>
  );

  const DrawerScreens = (props) => (
    <Drawer.Navigator
      initialRouteName={props.route.name}
      drawerContent={(props) => <DrawerComponent {...props} />}
      screenOptions={{
        animation: "fade",
        headerBackVisible: false,
        tabBarVisible: true,
        drawerActiveBackgroundColor: Color.backgroundColorGradientBottom,
        drawerInactiveBackgroundColor: Color.backgroundColor,
        drawerContentContainerStyle: {
          backgroundColor: Color.backgroundColor,
          flex: 1,
        },
        drawerInactiveTintColor: Color.textColor,
        drawerActiveTintColor: Color.textShadowBlue,
        drawerStatusBarAnimation: "slide",
        drawerType: "front",
        drawerAllowFontScaling: false,
        swipeEnabled: true,
        drawerHideStatusBarOnOpen: true,
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          animation: "fade",
          tabBarVisible: true,
          title: t("ROUTERTITLEHOMEPAGE"),
          headerStyle: {
            backgroundColor: Color.topBarBackground,
          },
          headerTitleStyle: {
            color: Color.textColor,
            fontSize: wp("6%"),
            fontWeight: "bold",
          },
          headerTintColor: Color.textColor,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <Person
                width={wp("6%")}
                height={hp("6%")}
                fill={Color.textColor}
                style={{
                  marginRight: wp("4%"),
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          animation: "fade",
          tabBarVisible: true,
          title: t("ROUTERTITLEMARKET"),
          headerStyle: {
            backgroundColor: Color.topBarBackground,
          },
          headerTitleStyle: {
            color: Color.textColor,
            fontSize: wp("6%"),
            fontWeight: "bold",
          },
          headerTintColor: Color.textColor,
        }}
      />
      <Drawer.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={({ navigation }) => ({
          animation: "fade",
          tabBarVisible: true,
          title: t("ROUTERTITLEPORTFOLIO"),
          headerStyle: {
            backgroundColor: Color.topBarBackground,
          },
          headerTitleStyle: {
            color: Color.textColor,
            fontSize: wp("6%"),
            fontWeight: "bold",
          },
          headerTintColor: Color.textColor,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PortfolioCoinAddScreen");
              }}
            >
              <Add
                width={wp("7%")}
                height={hp("7%")}
                fill={Color.textColor}
                style={{
                  marginRight: wp("4%"),
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          animation: "fade",
          tabBarVisible: true,
          title: t("ROUTERTITLENEWS"),
          headerStyle: {
            backgroundColor: Color.topBarBackground,
          },
          headerTitleStyle: {
            color: Color.textColor,
            fontSize: wp("6%"),
            fontWeight: "bold",
          },
          headerTintColor: Color.textColor,
        }}
      />
      <Drawer.Screen
        name="NftScreen"
        component={NftScreen}
        options={{
          animation: "fade",
          tabBarVisible: true,
          title: t("ROUTERTITLENFT"),
          headerStyle: {
            backgroundColor: Color.topBarBackground,
          },
          headerTitleStyle: {
            color: Color.textColor,
            fontSize: wp("6%"),
            fontWeight: "bold",
          },
          headerTintColor: Color.textColor,
        }}
      />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={"IntroComponent"}>
        <Stack.Screen
          name="IntroComponent"
          component={IntroComponent}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SplashScreenFirst"
          component={SplashScreenFirst}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SplashScreenSecond"
          component={SplashScreenSecond}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="KVKKScreen"
          component={KVKKScreen}
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="SignUpStepOne"
          component={SignUpStepOne}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SignUpStepTwo"
          component={SignUpStepTwo}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SignUpStepThree"
          component={SignUpStepThree}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SignUpStepFour"
          component={SignUpStepFour}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SignUpFinishScreen"
          component={SignUpFinishScreen}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabScreens}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            animation: "fade",
            tabBarVisible: true,
            title: t("ROUTERTITLEPROFILE"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="PortfolioCoinAddScreen"
          component={PortfolioCoinAddScreen}
          options={{
            animation: "slide_from_right",
            tabBarVisible: true,
            title: t("ROUTERTITLECOINADD"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="TapToAddPortfolio"
          component={TapToAddPortfolioComponent}
          options={{
            animation: "slide_from_right",
            tabBarVisible: true,
            title: t("ROUTERTITLECOINADD"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="CoinDetailScreen"
          component={CoinDetailPage}
          options={({ navigation }) => ({
            animation: "slide_from_right",
            tabBarVisible: true,
            title: "",
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
            headerBackTitle: t("BACK"),
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  dispatch(signalRMarketDisconnect()).then(() => {
                    dispatch(reConnectPortfolio()).then((e) => {
                      navigation.goBack();
                    });
                  });
                }}
              >
                <Text
                  style={{
                    color: Color.textColor,
                    fontSize: wp("4%"),
                    fontWeight: "bold",
                  }}
                >
                  {t("BACK")}
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="NewsDetailsPage"
          component={NewsDetailsComponent}
          options={{
            animation: "slide_from_right",
            tabBarVisible: true,
            title: "",
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            animation: "slide_from_right",
            tabBarVisible: true,
            title: t("ROUTERTITLEABOUTUS"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={{
            animation: "slide_from_right",
            tabBarVisible: true,
            title: t("ROUTERTITLEHELPCENTER"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="NewPortfolioAddComponent"
          component={NewPortfolioAddComponent}
          options={{
            animation: "slide_from_bottom",
            tabBarVisible: true,
            title: t("ROUTERTITLECREATEPORTFOLIO"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("6%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            animation: "slide_from_bottom",
            tabBarVisible: true,
            title: t("FORGOTPASSWORD"),
            headerStyle: {
              backgroundColor: Color.topBarBackground,
            },
            headerTitleStyle: {
              color: Color.textColor,
              fontSize: wp("5%"),
              fontWeight: "bold",
            },
            headerTintColor: Color.textColor,
          }}
        />
        <Stack.Screen
          name="ForgotPassswordSuccessScreen"
          component={ForgotPasswordSuccess}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
