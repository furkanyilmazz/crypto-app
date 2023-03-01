import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Color } from "../../config/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import {
  createPortfolio,
  getAllPortfolios,
} from "../../redux/Actions/portfolioActions";
import { useNavigation } from "@react-navigation/native";

export default function NewPortfolioAddComponent(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [portfolioName, setPortfolioName] = useState("Portfolyom");
  const { auth } = useSelector((state) => state);

  return (
    <View style={styles.newPortfolioAddComponent}>
      <TextInput
        placeholder="Portfolyonuza bir isim verin"
        placeholderTextColor={Color.inputPlaceholder}
        style={styles.newPortfolioAddInput}
        autoFocus={true}
        onChangeText={(text) => setPortfolioName(text)}
      />

      <TouchableOpacity
        style={styles.newPortfolioAddButton}
        onPress={() => {
          dispatch(
            createPortfolio(
              props.route.params.userToken,
              props.route.params.userId,
              portfolioName,
              navigation
            )
          );
        }}
      >
        <Text style={styles.newPortfolioAddButtonText}>Oluştur</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  newPortfolioAddComponent: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  newPortfolioAddInput: {
    marginHorizontal: wp("5%"),
    marginTop: hp("5%"),
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("1%"),
    height: hp("5.5%"),
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Color.textShadowBlue,
    color: Color.textColor,
    fontFamily: "Poppins-SemiBold",
  },
  newPortfolioAddButton: {
    height: hp("5.5%"),
    backgroundColor: Color.textShadowBlue,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp("5%"),
    borderRadius: 7,
    marginTop: hp("5%"),
  },
  newPortfolioAddButtonText: {
    color: Color.textColor,
    fontFamily: "Poppins-Bold",
    fontSize: wp("5%"),
  },
});
