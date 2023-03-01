import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import CoinCardComponentPancakeswap from "../../../components/MarketComponents/CoinCardComponent/CoinCardComponentPancakeSwap";
import { useSelector } from "react-redux";
import { styles } from "../style";

export default function PancakeswapMarket() {
  const [isLoading, setIsLoading] = React.useState(true);

  const pancakeswap = useSelector((state) => state.market.pancakeswap);
  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
          <VirtualizedList
            data={pancakeswap
              .filter((item) => item.quote_symbol === "USDT")
              .sort((a, b) => a.price - b.price)}
            renderItem={({ item }) => (
              <CoinCardComponentPancakeswap {...item} />
            )}
            estimatedItemSize={50}
          />
      ) : null}
    </View>
  );
}
