import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NextButtonComponent(props) {
  return (
    <TouchableOpacity
      style={styles.nextButtonComponent}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.nextButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nextButtonComponent: {
    backgroundColor: Color.textShadowBlue,
    paddingHorizontal: wp('8%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 15,
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 20,
  },
  nextButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp('3'),
    color: Color.textColor,
  },
});
