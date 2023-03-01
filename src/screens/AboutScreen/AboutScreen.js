import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

export default function AboutScreen() {
  const {t} = useTranslation();

  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      <View style={styles.logoCont}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://www.fahasoftware.com/assets/img/fahaSLogo.png',
          }}
        />
      </View>
      <View style={styles.aboutTextCont}>
        <Text style={styles.aboutText}>{t('ABOUTUSTITLE1')}</Text>
        <Text />
        <Text style={styles.aboutText}>{t('ABOUTUSTITLE2')}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoCont: {
    alignItems: 'center',
  },
  logo: {
    width: wp('70%'),
    height: wp('20%'),
    resizeMode: 'contain',
    marginTop: wp('5%'),
  },
  aboutTextCont: {
    padding: wp('5%'),
    alignItems: 'center',
  },
  aboutText: {
    color: Color.opacityWhite,
    fontSize: wp('4.5%'),
    textAlign: 'justify',
  },
});
