import { View, VirtualizedList } from "react-native";
import React from "react";
import { styles } from "../style";

import CoinCardComponentOther from "../../../components/MarketComponents/CoinCardComponent/CoinCardComponentOther";
import { useSelector } from "react-redux";

export default function OtherMarket() {
  const binance = useSelector((state) => state.market.binance);

  return (
    <View style={styles.mainContainer}>
      {binance.length > 0 ? (
          <VirtualizedList
            data={binance
              .sort((a, b) => a.ticker.volume - b.ticker.volume)
              .filter((coin) => coin.ticker.quoteAsset === "USDT")}
            renderItem={({ item }) => <CoinCardComponentOther {...item} />}
            estimatedItemSize={50}
          />
      ) : null}
    </View>
  );
}
