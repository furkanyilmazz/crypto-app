import {ActivityIndicator, Image, View} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';
import {StyleVariables} from '../../config/style-variables';

export default function LoadingComponent() {
  return (
    <View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        marginTop: StyleVariables.width * 1,
        zIndex: 3,
      }}>
      <ActivityIndicator size="large" color={Color.textShadowBlue} style={{}} />
    </View>
  );
}
