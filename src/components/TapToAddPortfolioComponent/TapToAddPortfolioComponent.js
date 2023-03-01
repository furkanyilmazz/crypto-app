import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useMemo } from "react";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

import { Color } from "../../config/color";
import { useNavigation } from "@react-navigation/native";

import { StyleVariables } from "../../config/style-variables";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  portfolioAdd,
  portfolioCoinAdd,
} from "../../redux/Actions/portfolioActions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useTranslation } from "react-i18next";

function TapToAddPortfolioComponent(props) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { portfolio } = useSelector((state) => state);

  const [swap, setSwap] = useState(true);
  const [addOrUpdate, setAddOrUpdate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [price, setPrice] = useState(0);
  const symbol = props.route.params.baseAsset + "USDT";

  // const purchaseDate = "2022-05-05";

  const userToken = auth.user[0].token;

  function addPortfolio() {
    setIsLoading(true);
    dispatch(
      portfolioCoinAdd(
        swap,
        portfolio.currentPortfolioId != 0
          ? portfolio.currentPortfolioId
          : auth.user[1].portfolioGetDto.id,
        symbol,
        addOrUpdate,
        price,
        navigation
      )
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
      enabled={true}
    >
      <LinearGradient
        colors={[
          Color.backgroundColorGradientUp,
          Color.backgroundColorGradientBottom,
        ]}
        style={styles.mainContainer}
      >
        <View style={styles.containerSwap}>
          <View style={styles.swapComponent}>
            <TouchableOpacity
              style={[styles.swapAreaButton]}
              onPress={() => {
                setSwap(true);
              }}
            >
              <Text style={styles.swapAreaText}>USD</Text>
            </TouchableOpacity>

            {/* <Ionicons
              name={'swap-horizontal-outline'}
              size={25}
              color={Color.textColor}
              style={styles.swapIcon}
            /> */}

            <TouchableOpacity
              style={[styles.swapAreaButton]}
              onPress={() => {
                setSwap(false);
              }}
            >
              <Text style={styles.swapAreaText}>{t("PIECE")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.swapComponent}>
            <TouchableOpacity
              style={styles.swapAreaButton}
              onPress={() => {
                setAddOrUpdate(true);
              }}
            >
              <Text style={styles.swapAreaText}>{t("ADD")}</Text>
            </TouchableOpacity>
            {/* <Ionicons
              name={'swap-horizontal-outline'}
              size={25}
              color={Color.textColor}
              style={styles.swapIcon}
            /> */}
            <TouchableOpacity
              style={styles.swapAreaButton}
              onPress={() => {
                setAddOrUpdate(false);
              }}
            >
              <Text style={styles.swapAreaText}>{t("REMOVE")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tapToAddPortfolioComponent}>
          <View style={styles.tapToAddPortfolioInputArea}>
            <Text style={styles.tapToAddPortfolioText}>
              {swap ? "US$" : t("PIECE")}
            </Text>
            {addOrUpdate ? null : (
              <Text
                style={{
                  color: Color.textColor,
                  opacity: 0.6,
                  fontSize: wp("12%"),
                  textAlign: "right",
                  marginRight: wp("-3%"),
                  marginLeft: wp("1%"),
                }}
              >
                -
              </Text>
            )}

            <TextInput
              style={styles.tapToAddPortfolioInput}
              placeholder={"100"}
              onChangeText={(value) => {
                setPrice(value);
              }}
              value={price}
              maxLength={10}
              keyboardAppearance="dark"
              keyboardType="numeric"
            />
          </View>
          <View></View>
          <Text style={styles.tapToAddPortfolioCoinText}>
            {swap === true
              ? addOrUpdate === true
                ? t("ADDWITHUSD")
                : t("REMOVEWITHUSD")
              : addOrUpdate === true
              ? t("ADDPIECE")
              : t("REMOVEPIECE")}
          </Text>
        </View>
        {/* <ScrollView
          horizontal
          style={{ alignSelf: "center", maxHeight: StyleVariables.width * 0.2 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.tapToAddProperties}>
            <Ionicons
              name="calendar-outline"
              size={25}
              color={Color.textColor}
            />
            <Text style={styles.tapToAddPropertiesText}>Bugün</Text>
          </View>

          <View style={styles.tapToAddProperties}>
            <Ionicons name="logo-bitcoin" size={25} color={Color.textColor} />
            <Text style={styles.tapToAddPropertiesText}>Fiyat/Coin</Text>
          </View>

          <View style={styles.tapToAddProperties}>
            <Ionicons name="cash-outline" size={25} color={Color.textColor} />
            <Text style={styles.tapToAddPropertiesText}>Ücret</Text>
          </View>

          <View style={styles.tapToAddProperties}>
            <Ionicons
              name="newspaper-outline"
              size={25}
              color={Color.textColor}
            />
            <Text style={styles.tapToAddPropertiesText}>Not Ekle</Text>
          </View>
        </ScrollView> */}

        <TouchableOpacity
          style={styles.tapToAddButton}
          onPress={() => {
            addPortfolio();
          }}
          disabled={price != 0 || isLoading == true ? false : true}
        >
          <Text style={styles.tapToAddButtonText}>{t("ADD")}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  tapToAddPortfolioComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tapToAddPortfolioInputArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  tapToAddPortfolioText: {
    fontSize: wp("7%"),
    fontWeight: "bold",
    color: Color.textColor,
    marginLeft: StyleVariables.width * 0.03,
  },
  tapToAddPortfolioInput: {
    fontSize: wp("7%"),
    fontWeight: "500",
    color: Color.textColor,
    marginLeft: StyleVariables.width * 0.03,
  },
  tapToAddPortfolioCoinText: {
    fontSize: wp("5%"),
    fontWeight: "400",
    color: Color.textColor,
    opacity: 0.5,
  },
  tapToAddPortfolioImage: {
    width: StyleVariables.width * 0.12,
    height: StyleVariables.width * 0.12,
    borderRadius: 30,
    backgroundColor: Color.backgroundColorGradientUp,
  },
  tapToAddButton: {
    width: StyleVariables.width * 0.7,
    height: StyleVariables.width * 0.12,
    backgroundColor: Color.textShadowBlue,
    borderRadius: 12,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: hp("12%"),
  },
  tapToAddButtonText: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: Color.textColor,
    textAlign: "center",
  },
  tapToAddProperties: {
    flexDirection: "row",
    alignItems: "center",
    padding: StyleVariables.width * 0.03,
    backgroundColor: Color.textShadowBlue,
    borderRadius: 12,
    height: StyleVariables.width * 0.13,
    marginHorizontal: StyleVariables.width * 0.01,
  },
  tapToAddPropertiesText: {
    fontSize: wp("4%"),
    fontWeight: "500",
    color: Color.textColor,
    marginLeft: StyleVariables.width * 0.01,
  },
  swapComponent: {
    flexDirection: "row",
    alignItems: "center",
  },
  swapAreaButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.textShadowBlue,
    padding: wp("1%"),
    borderRadius: 8,
    width: wp("20%"),
    justifyContent: "center",
    marginHorizontal: wp("1%"),
  },
  swapAreaButtonNotSelect: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.textShadowBlue,
    opacity: 0.2,
    padding: wp("2%"),
    borderRadius: 8,
    width: wp("15%"),
    justifyContent: "center",
  },
  swapAreaText: {
    color: Color.textColor,
    fontSize: wp("5%"),
  },
  swapIcon: {
    marginHorizontal: wp("1%"),
  },
  containerSwap: {
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio,
  };
};

export default connect(mapStateToProps, { portfolioAdd })(
  TapToAddPortfolioComponent
);
