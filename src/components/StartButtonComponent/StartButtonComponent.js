import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function StartButtonComponent(props) {
  return (
    <TouchableOpacity style={styles.itemsArea} onPress={props.onPress}>
      <LinearGradient
        colors={['#858CFF', '#CED1FF']}
        style={[props.styleButton, [styles.startButtonComponent]]}
        start={{x: 0, y: 0}}>
        <Text
          style={[
            {
              fontFamily: props.FontFamily,
              fontSize: props.FontSize,
            },
            styles.startButtonText,
          ]}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  startButtonComponent: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  startButtonText: {
    textAlign: 'center',
    paddingHorizontal: hp('7%'),
    paddingVertical: hp('1.1%'),
  },
  itemsArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
});
