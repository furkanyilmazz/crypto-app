import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  VirtualizedList,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Color } from "../../config/color";
import WebView from "react-native-webview";

export default function CoinDetailNews({ baseAsset, coinColor }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${baseAsset}&apiKey=6e91a9fe777044438227f89be8f90032`
      )
      .then((response) => {
        console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
      <VirtualizedList
        data={news}
        renderItem={(props) => <RenderNews {...props} coinColor={coinColor} />}
        estimatedItemSize={50}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
      />
  );
}

function RenderNews(props) {
  return (
    <TouchableOpacity
      style={styles.coinCardComponent}
      onPress={() => {
        Linking.openURL(props.item.url);
      }}
    >
      <Image
        source={{
          uri: props.item.urlToImage
            ? props.item.urlToImage
            : "https://www.fahax.com/img/about/1.jpg",
        }}
        style={styles.newsImage}
      />
      <View style={styles.newsInfoArea}>
        <Text style={styles.newsInfoTitle} numberOfLines={1}>
          {props.item.title}
        </Text>
        <Text style={styles.newsInfoDesc} numberOfLines={3}>
          {props.item.description}
        </Text>
        <Text style={[styles.newsInfoTime, { color: props.coinColor }]}>
          {props.item.publishedAt}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coinCardComponent: {
    marginVertical: wp("1%"),
    marginHorizontal: wp("3%"),
    backgroundColor: Color.coinCardBackground,
    padding: wp("3%"),
    borderRadius: 10,
    flexDirection: "row",
  },
  newsImage: {
    width: wp("30%"),
    height: hp("12%"),
    borderRadius: 10,
    resizeMode: "cover",
  },
  newsInfoArea: {
    marginLeft: wp("3%"),
    width: wp("55%"),
    display: "flex",
    justifyContent: "space-between",
  },
  newsInfoTitle: {
    fontSize: wp("4%"),
    color: Color.textColor,
    fontFamily: "Poppins-Bold",
  },
  newsInfoDesc: {
    fontSize: wp("3%"),
    color: Color.textColor,
    fontFamily: "Poppins-Regular",
    marginTop: hp("0.1%"),
  },
  newsInfoTime: {
    fontSize: wp("2.5%"),
    fontFamily: "Poppins-Regular",
    alignSelf: "flex-end",
  },
});
