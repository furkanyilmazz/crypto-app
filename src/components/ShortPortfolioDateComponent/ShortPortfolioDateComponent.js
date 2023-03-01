import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleVariables } from "../../config/style-variables";
import { Color } from "../../config/color";

export default function ShortPortfolioDateComponent({ isSelected, clicked }) {
  const [day, setDay] = useState(isSelected);
  return (
    <View style={styles.shortPortfolioDateComponent}>
      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 0.1 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(0.1);
          clicked(0.1);
        }}
      >
        <Text style={styles.shortPortfolioText}>1S</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 1 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(1);
          clicked(1);
        }}
      >
        <Text style={styles.shortPortfolioText}>24S</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 2 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(2);
          clicked(2);
        }}
      >
        <Text style={styles.shortPortfolioText}>48S</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 7 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(7);
          clicked(7);
        }}
      >
        <Text style={styles.shortPortfolioText}>1H</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 1000 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(1000);
          clicked(1000);
        }}
      >
        <Text style={styles.shortPortfolioText}>HEPSİ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shortPortfolioDateComponent: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: StyleVariables.width * 0.03,
  },
  shortPortfolioTextView: {
    paddingHorizontal: StyleVariables.width * 0.04,
    marginHorizontal: StyleVariables.width * 0.02,
    height: StyleVariables.height * 0.03,
    justifyContent: "center",
  },
  selectedShortPortfolioTextView: {
    backgroundColor: Color.textShadowBlue,
    borderRadius: 5,
  },
  shortPortfolioText: {
    color: Color.textColor,
    textAlign: "center",
    fontWeight: "bold",
  },
});
