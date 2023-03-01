import {
  StyleSheet,
  View,
  TextInput,
  VirtualizedList,
  Text,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Color } from "../../config/color";
import ListPortfolioCoinComponent from "../../components/ListPortfolioCoinComponent/ListPortfolioCoinComponent";
import { StyleVariables } from "../../config/style-variables";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import API_URL from "../../../config";
import axios from "axios";
const baseURL = API_URL + "api/Tokens/";

export default function PortfolioCoinAddScreen({ navigation }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const { token } = useSelector((state) => state);

  const [coinList, setCoinList] = useState([]);
  const [filterData, setFilterData] = React.useState(coinList);

  const [searchData, setSearchData] = React.useState("");

  const filterDataBySearch = (searchData) => {
    const filteredData = coinList.filter((item) => {
      return (
        item.baseAssetName.toLowerCase().includes(searchData.toLowerCase()) ||
        item.baseAsset.toLowerCase().includes(searchData.toLowerCase())
      );
    });
    setFilterData(filteredData);
  };

  useEffect(() => {
    setCoinList(token.coinList);
    fetchTickers();
  }, []);

  const fetchTickers = async () => {
    await axios
      .post("https://fhx.idealdata.com.tr/api/Tokens/GetAll")
      .then((json) => {
        console.log(json.data);
        if (json.status === 200) {
          console.log("Market verileri getirildi");
          setCoins(json.data.data);
        } else {
          console.log("Veriler getirilemedi! HATA!!");
        }
      })
      .catch((error) => {
        console.log(error);
        AlertEvent(
          "HATA!",
          "Sunucularımızda bir hata oluştu, sorun devam ederse bize ulaşın. info@fahax.com"
        );
      });
  };

  const [coins, setCoins] = useState([]);

  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      <View style={styles.portfolioCoinSearchArea}>
        <TextInput
          style={styles.searchTextInput}
          autoCorrect={true}
          placeholder={t("SEARCH")}
          value={searchData}
          onChangeText={(text) => {
            setSearchData(text);
            filterDataBySearch(text);
          }}
          placeholderTextColor={Color.textColor}
        />
      </View>
      <VirtualizedList
        key={(item) => item.id}
        style={styles.listContainer}
        data={
          searchData.length > 0
            ? filterData
            : coins.sort((a, b) => (a.symbol > b.symbol ? 1 : -1)) &&
              coins.filter((item) => item.symbol.includes("USDT"))
        }
        renderItem={({ item }) => <ListPortfolioCoinComponent {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    height: StyleVariables.width * 0.2,
  },
  separator: {
    height: StyleVariables.width * 0.002,
    backgroundColor: Color.textColor,
    marginHorizontal: StyleVariables.width * 0.05,
    borderRadius: 30,
    opacity: 0.2,
  },
  portfolioCoinSearchArea: {
    flexDirection: "row",
    marginHorizontal: StyleVariables.width * 0.05,
    alignItems: "center",
    backgroundColor: Color.choosedNewsGradient2,
    borderRadius: 12,
    marginVertical: StyleVariables.width * 0.03,
  },
  portfolioSearchIcon: {
    marginLeft: StyleVariables.width * 0.02,
  },
  searchTextInput: {
    flex: 1,
    marginLeft: StyleVariables.width * 0.02,
    height: StyleVariables.width * 0.09,
    color: Color.textColor,
    fontWeight: "600",
    fontSize: wp("4%"),
  },
});
