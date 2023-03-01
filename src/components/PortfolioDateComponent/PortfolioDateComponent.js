import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {Color} from '../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PortfolioDateComponent({isSelected, clicked}) {
  const [day, setDay] = useState(0.1);
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
        }}>
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
        }}>
        <Text style={styles.shortPortfolioText}>24S</Text>
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
        }}>
        <Text style={styles.shortPortfolioText}>7G</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 30 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(30);
          clicked(30);
        }}>
        <Text style={styles.shortPortfolioText}>30G</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={true}
        style={[
          styles.shortPortfolioTextView,
          day === 90 ? styles.selectedShortPortfolioTextView : null,
        ]}
        onPress={() => {
          setDay(90);
          clicked(90);
        }}>
        <Text style={styles.shortPortfolioText}>90G</Text>
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
        }}>
        <Text style={styles.shortPortfolioText}>HEPSİ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shortPortfolioDateComponent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: wp('1%'),
  },
  shortPortfolioTextView: {
    paddingHorizontal: wp('1%'),
    marginHorizontal: hp('1%'),
    height: hp('1%'),
    justifyContent: 'center',
  },
  selectedShortPortfolioTextView: {
    backgroundColor: Color.textShadowBlue,
    borderRadius: 5,
  },
  shortPortfolioText: {
    color: Color.textColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
