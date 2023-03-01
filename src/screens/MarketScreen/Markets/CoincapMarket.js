import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { styles } from "../style";

import CoinCardComponentCoinCap from "../../../components/MarketComponents/CoinCardComponent/CoinCardComponentCoinCap";


export default function CoincapMarket() {
  const [isLoading, setIsLoading] = React.useState(true);

  const coincap = useSelector((state) => state.market.coincap);

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
          <VirtualizedList
            data={coincap.sort((a, b) => b.symbol - a.symbol)}
            renderItem={({ item }) => <CoinCardComponentCoinCap {...item} />}
            estimatedItemSize={50}
          />
      ) : null}
    </View>
  );
}
