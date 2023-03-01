import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Color} from '../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
const InternetConnectionError = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainAreaView}>
        <View style={styles.containView}>
          <View style={styles.errorIcon}></View>
          <View>
            <Text style={styles.errorMessage}>{t('CONNECTIONERROR')}</Text>
          </View>
          <View>
            <Text style={styles.errorDescription}>
              {t('CONNECTIONERRORDESC')}
            </Text>
          </View>
        </View>
        <View style={styles.logoContain}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('10%'),
    padding: wp('5%'),
    backgroundColor: Color.backgroundColorGradientUp,
  },
  mainAreaView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5%'),
    width: wp('90%'),
  },
  errorIcon: {
    height: 70,
    width: 70,
    alignItems: 'center',
  },
  errorMessage: {
    marginTop: 10,
    fontSize: wp('5%'),
    letterSpacing: 0.8,
    fontWeight: '600',
    color: Color.textColor,
  },
  errorDescription: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: wp('4%'),
    fontWeight: '500',
    color: Color.error,
  },
  logoContain: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 100,
    height: 50,
  },
});

export default InternetConnectionError;
