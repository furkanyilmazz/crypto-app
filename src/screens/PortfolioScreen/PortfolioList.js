import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Color } from "../../config/color";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";

import dino from "../../assets/dinox/hawli_dinox.png";

export default function PortfolioList(props) {
  const { t } = useTranslation();
  const coin = props;
  const imgUri = coin.baseAsset.toLowerCase();
  const hide = false;

  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 500);

  const currencyFormat = (value) =>
    "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return (
    <View style={styles.portfolioAssetsItem} key={coin.id}>
      <View style={styles.portfolioAssetsItemArea}>
        <Image
          style={styles.customCardCoinLogo}
          source={
            isLoading === true
              ? {
                  uri: `https://assets.coincap.io/assets/icons/${imgUri}@2x.png`,
                }
              : dino
          }
        />
        <View style={styles.portfolioAssetsCoinTitleArea}>
          <Text
            style={styles.portfolioAssetsItemTitleTextLongName}
            lineBreakMode="tail"
            numberOfLines={1}
          >
            {coin.baseAssetName}
          </Text>
          <Text
            style={styles.portfolioAssetsItemTitleTextShortName}
            lineBreakMode="tail"
            numberOfLines={1}
          >
            {coin.symbol}
          </Text>
        </View>

        <View style={styles.portfolioAssetsCoinTitleArea}>
          <Text
            style={styles.portfolioAssetsItemTitleTextPrice}
            lineBreakMode="tail"
            numberOfLines={1}
          >
            {hide === true || isLoading === true
              ? currencyFormat(coin.lastPrice)
              : "******"}
          </Text>
          <Text
            style={[
              styles.portfolioAssetsItemTitleTextPrice,
              styles.portfolioAssetsItemTitleTextPriceMini,
              {
                color:
                  coin.priceDiffPercentChange > 0 ? Color.green : Color.error,
              },
            ]}
          >
            {hide === true || isLoading === true
              ? `%${coin.priceDiffPercentChange.toFixed(2)}`
              : "*******"}
          </Text>
        </View>
        <View style={styles.portfolioAssetsCoinTitleArea}>
          <Text
            style={styles.portfolioAssetsItemTitleTextPrice}
            numberOfLines={1}
          >
            {hide === true || isLoading === false
              ? "******** "
              : currencyFormat(coin.amount * coin.lastPrice)}
          </Text>
          <Text
            style={[
              styles.portfolioAssetsItemTitleTextPrice,
              styles.portfolioAssetsItemTitleTextPriceMini,
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {hide === true || isLoading === false
              ? `***** ${coin.symbol.substring(0, 3)}`
              : `${coin.amount} ${coin.symbol.substring(0, 3)}`}
          </Text>
        </View>
      </View>
      <View style={styles.portfolioLine} />
    </View>
  );
}
