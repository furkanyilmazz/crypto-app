import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Color } from "../../config/color";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//Icons
import Help from "../../assets/icons/help";
import Information from "../../assets/icons/information";
import Notification from "../../assets/icons/notification";
import Settings from "../../assets/icons/settings";
import LogOut from "../../assets/icons/logout";
import Instagram from "../../assets/icons/instagram";
import Twitter from "../../assets/icons/twitter";
import Web from "../../assets/icons/web";
import Wallet from "../../assets/icons/wallet";
import Add from "../../assets/icons/add";

import RBSheet from "react-native-raw-bottom-sheet";
import { SwipeListView } from "react-native-swipe-list-view";

import { useTranslation } from "react-i18next";

import {
  setCurrentPortfolioId,
  signalRportfolio,
} from "../../redux/Actions/portfolioActions";

import {
  setBottomBarTrue,
  setBottomBarFalse,
} from "../../redux/Actions/userActions";

import { getWalletAccountInfo } from "../../redux/Actions/walletActions";

import { useDrawerStatus } from "@react-navigation/drawer";
import axios from "axios";

import HawliDinox from "../../assets/dinox/sapkali_dinox.png";

const currencyFormat = (value) =>
  "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export default function DrawerComponent(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const refRBSheet = useRef();

  const navigation = useNavigation();

  const [portfolioCurrentName, setPortfolioCurrentName] = useState("");

  const auth = useSelector((state) => state.auth, shallowEqual);

  useEffect(() => {
    setPortfolioCurrentName(auth.user[1].portfolioGetDto.name);
  }, []);

  const onPressWeb = () =>
    Linking.canOpenURL("https://www.fahasoftware.com/").then(() => {
      Linking.openURL("https://www.fahasoftware.com/");
    });

  const onPressInsta = () =>
    Linking.canOpenURL("https://www.instagram.com/fahasoftware/").then(() => {
      Linking.openURL("https://www.instagram.com/fahasoftware/");
    });

  const onPressTwitter = () =>
    Linking.canOpenURL("https://mobile.twitter.com/fahasoft").then(() => {
      Linking.openURL("https://mobile.twitter.com/fahasoft");
    });

  const userToken = auth.user[0].token;
  const userId = auth.user[0].userId;
  const userName = auth.user[1].firstName;

  const isDrawer = useDrawerStatus() === "open";

  const openPanel = () => {
    dispatch(setBottomBarTrue());
  };

  const closePanel = () => {
    dispatch(setBottomBarFalse());
  };

  useEffect(() => {
    if (isDrawer) {
      openPanel();
    } else {
      closePanel();
    }
  }, [isDrawer]);

  const [allPortfolios, setAllPortfolios] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  function fetchAllPortfolios() {
    axios
      .get(
        `https://fhx.idealdata.com.tr/api/Portfolios/GetPortfoliosByUserId?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        setIsLoading(false);
        return setAllPortfolios(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchAllPortfolios();
  }, [allPortfolios]);

  return (
    <View style={styles.drawerComponent}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image source={HawliDinox} style={styles.drawerProfilePhoto} />
        <Text style={styles.drawerUserInfoText}>
          {t("DRAWERUSERTITLE")} {auth.user[1].firstName}
        </Text>
      </View>

      <View style={{ flex: 3, marginVertical: wp("10%") }}>
        <TouchableOpacity
          style={styles.drawerOpenPortfolioButton}
          onPress={() => {
            refRBSheet.current.open();
          }}
        >
          <Wallet
            width={wp("9%")}
            height={wp("9%")}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerSelectedPortfolioName} numberOfLines={1}>
            {portfolioCurrentName === null
              ? t("DRAWERSELECTPORTFOLIO")
              : portfolioCurrentName}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.drawerItemComponent}>
          <Notification
            width={wp('9%')}
            height={wp('9%')}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerItemText}>Alarmlar</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.drawerItemComponent}
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <Settings
            width={wp("9%")}
            height={wp("9%")}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerItemText}>{t("DRAWERBUTTONSETTINGS")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemComponent}
          onPress={() => {
            navigation.navigate("HelpCenterScreen");
          }}
        >
          <Help
            width={wp("9%")}
            height={wp("9%")}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerItemText}>
            {" "}
            {t("DRAWERBUTTONHELPCENTER")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemComponent}
          onPress={() => {
            navigation.navigate("AboutScreen");
          }}
        >
          <Information
            width={wp("9%")}
            height={wp("9%")}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerItemText}> {t("DRAWERBUTTONABOUTUS")}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.drawerItemComponent}>
          <Text style={styles.drawerItemText}>Bildirim Ayarları</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItemComponent}>
          <Text style={styles.drawerItemText}>Üyelik Bilgisi</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.drawerItemComponent}
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
        >
          <LogOut
            width={wp("9%")}
            height={wp("9%")}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.drawerItemText}> {t("DRAWERBUTTONLOGOUT")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomCont}>
        <Text style={styles.bottomText}> {t("DRAWERBUTTONFOLLOWUS")}</Text>
        <View style={styles.bottomContButtonCont}>
          <TouchableOpacity
            onPress={onPressWeb}
            style={styles.bottomContButtons}
          >
            <Web
              width={wp("9%")}
              height={wp("9%")}
              fill={Color.textColor}
              style={styles.drawerItemIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressInsta}
            style={styles.bottomContButtons}
          >
            <Instagram
              width={wp("9%")}
              height={wp("9%")}
              fill={Color.textColor}
              style={styles.drawerItemIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressTwitter}
            style={styles.bottomContButtons}
          >
            <Twitter
              width={wp("9%")}
              height={wp("9%")}
              fill={Color.textColor}
              style={styles.drawerItemIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: Color.textShadowBlue,
          },
          container: {
            backgroundColor: Color.backgroundColor,
            borderRadius: 25,
          },
        }}
        height={hp("70%")}
        minClosingHeight={hp("30%")}
      >
        {/* <WalletConnectProvider style={styles.bottomSheetComponent}> */}
        <ScrollView style={styles.bottomSheetComponent}>
          <Text style={styles.bottomSheetTitle}>{` ${userName}${t(
            "DRAWEROPENPORTFOLIOTITLE"
          )} `}</Text>
          <View style={styles.bottomSheetArea}>
            <Text style={styles.bottomSheetText} numberOfLines={1}>
              {t("DRAWEROPENPORTFOLIOPRICETITLE")}
            </Text>
            <Text numberOfLines={1} style={styles.bottomSheetTextMoney}>
              {`= ${currencyFormat(auth.user[1].portfolioGetDto.totalPrice)}`}
            </Text>
            <View style={styles.drawerListSeparatorFull} />
          </View>

          <SwipeListView
            data={allPortfolios}
            style={styles.drawerList}
            ItemSeparatorComponent={() => (
              <View style={styles.drawerListSeparator} />
            )}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.drawerListItem}
                onPress={() => {
                  dispatch(setCurrentPortfolioId(item.id, item.name)); //portfolyo seçip değiştirme
                }}
              >
                <View
                  style={{
                    width: wp("9%"),
                    height: wp("9%"),
                    backgroundColor: Color.textShadowBlue,
                    borderRadius: 3000,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: wp("2.5%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("5%"),
                      color: Color.textColor,
                      fontWeight: "bold",
                      fontFamily: "Poppins-Bold",
                    }}
                  >
                    {item.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <Text
                  numberOfLines={1}
                  style={styles.drawerListItemText}
                >{`  ${item.name}`}</Text>
              </TouchableOpacity>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <Text>Left</Text>
              </View>
            )}
            leftOpenValue={0}
            rightOpenValue={-75}
          />

          <View style={styles.drawerListSeparator} />
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close();
              navigation.navigate("NewPortfolioAddComponent", {
                userToken: userToken,
                userId: userId,
              });
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: wp("1.5%"),
              height: hp("7%"),
            }}
          >
            <Add
              width={wp("10%")}
              height={wp("10%")}
              fill={Color.textShadowBlue}
              style={styles.drawerItemIcon}
            />
            <Text
              style={{
                color: Color.textShadowBlue,
                fontWeight: "600",
                fontFamily: "Poppins-Bold",
                marginLeft: wp("1.6%"),
              }}
            >
              {" "}
              {t("DRAWEROPENPORTFOLIONEWPORTFOLIOADD")}
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => {
              // createSession();
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: wp("1.5%"),
              height: hp("7%"),
            }}
          >
            <Wallet
              width={wp("10%")}
              height={wp("10%")}
              fill={Color.textShadowBlue}
              style={styles.drawerItemIcon}
            />
            <Text
              style={{
                color: Color.textShadowBlue,
                fontWeight: "600",
                fontFamily: "Poppins-Bold",
                marginLeft: wp("1.6%"),
              }}
            >
              {" "}
              {t("DRAWEROPENPORTFOLIONWALLETCONNECT")}
            </Text>
          </TouchableOpacity> */}
          <View style={{ height: 80 }} />
        </ScrollView>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerComponent: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    paddingTop: Platform.OS === "android" ? wp("10%") : wp("20%"),
    zIndex: 999,
  },
  drawerProfilePhoto: {
    width: wp("31%"),
    height: wp("31%"),
    borderRadius: 300,
    borderWidth: 1,
    borderColor: Color.textColor,
    alignSelf: "center",
    resizeMode: "contain",
  },
  drawerUserInfoText: {
    fontSize: wp("5%"),
    color: Color.textColor,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  drawerItemComponent: {
    flexDirection: "row",
    marginHorizontal: wp("6%"),
    height: wp("10%"),
    alignItems: "center",
    marginVertical: wp("2%"),
  },
  drawerItemText: {
    fontSize: wp("4%"),
    color: Color.textColor,
    marginLeft: wp("2%"),
  },
  drawerItemIcon: {
    marginLeft: wp("1%"),
  },
  bottomCont: {
    flex: 1.5,
    alignItems: "center",
  },
  bottomText: {
    color: Color.opacityWhite,
  },
  bottomContButtonCont: {
    flexDirection: "row",
    marginTop: wp("2%"),
  },
  bottomContButtons: {
    marginHorizontal: wp("2%"),
  },
  drawerSelectPortfolio: {
    width: wp("60%"),
    alignSelf: "center",
    marginVertical: wp("2%"),
    paddingHorizontal: wp("3%"),
    backgroundColor: Color.backgroundColor,
    borderColor: Color.textColor,
  },
  drawerSelectPortfolioText: {
    color: Color.textColor,
    fontFamily: "Poppins-Bold",
  },
  drawerSelectPortfolioDropDownContainer: {
    marginVertical: wp("2%"),
    color: Color.textColor,
    backgroundColor: Color.backgroundColor,
    borderBottomColor: Color.textColor,
    borderRightColor: Color.textColor,
    borderLeftColor: Color.textColor,
    borderTopWidth: 0,
    width: wp("60%"),
    alignSelf: "center",
  },
  drawerSelectPortfolioEmptyText: {
    fontFamily: "Poppins-Medium",
    fontSize: wp("3.5%"),
    color: Color.textColor,
    marginHorizontal: wp("2%"),
    marginBottom: wp("2%"),
  },
  drawerSelectedPortfolioName: {
    fontFamily: "Poppins-Medium",
    color: Color.textColor,
    fontSize: wp("4%"),
    marginHorizontal: wp("1.5%"),
  },
  drawerOpenPortfolioButton: {
    flexDirection: "row",
    marginHorizontal: wp("6%"),
    marginVertical: wp("2%"),
    alignItems: "center",
  },
  drawerItem: {
    backgroundColor: Color.backgroundColor,
  },
  drawerActionSheet: {
    height: hp("60%"),
    padding: wp("2%"),
    backgroundColor: Color.backgroundColor,
  },
  drawerActionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wp("2%"),
  },
  drawerActionTitleText: {
    fontSize: wp("5.5%"),
    color: Color.textColor,
    fontFamily: "Poppins-Bold",
    marginLeft: wp("3%"),
  },
  drawerAddArea: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: wp("2%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.textColor,
    paddingHorizontal: wp("2%"),
  },
  drawerAddAreaText: {
    fontSize: wp("4%"),
    color: Color.textColor,
    marginLeft: wp("2%"),
  },
  drawerList: {
    marginTop: wp("2%"),
  },
  drawerListArea: {
    marginTop: wp("2%"),
  },
  drawerListItem: {
    backgroundColor: Color.backgroundColor,
    height: hp("7%"),
    flexDirection: "row",
    alignItems: "center",
  },
  drawerListItemText: {
    fontSize: wp("4%"),
    color: Color.textColor,
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
    marginLeft: wp("1%"),
    marginVertical: wp("2%"),
  },
  drawerListSeparator: {
    height: 1,
    backgroundColor: Color.textColor,
    marginHorizontal: wp("3%"),
    opacity: 0.2,
  },
  drawerListSeparatorFull: {
    height: 1,
    backgroundColor: Color.textColor,
    marginHorizontal: wp("-3%"),
    opacity: 0.5,
  },
  drawerPortfolioAddInput: {
    height: wp("7%"),
    fontSize: wp("4%"),
    color: Color.textColor,
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("1%"),
  },
  swipeablePanel: {
    backgroundColor: Color.backgroundColorGradientUp,
    padding: wp("2%"),
  },
  swipeablePanelBar: {
    backgroundColor: Color.textColor,
    width: wp("20%"),
    height: wp("0.7%"),
  },
  swipeablePanelBarContainer: {},
  swipeablePanelCloseIcon: {
    backgroundColor: Color.backgroundColor,
  },
  bottomSheetTitle: {
    fontSize: wp("5%"),
    fontWeight: "500",
    fontFamily: "Poppins-Bold",
    color: Color.textColor,
    textAlign: "center",
    marginTop: hp("1%"),
  },
  bottomSheetText: {
    fontSize: wp("4.5%"),
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: Color.textColor,
  },
  bottomSheetTextMoney: {
    marginBottom: hp("1%"),
    color: Color.textShadowBlue,
    fontSize: wp("6%"),
    fontWeight: "500",
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
  },
  bottomSheetArea: {
    marginTop: hp("5%"),
    marginLeft: wp("2%"),
  },
});
