import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

import Btc from '../../assets/SplashScreen/BTC.png';
import StartButton from '../../components/StartButtonComponent/StartButtonComponent';

import {useNavigation} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../config/color';

export default function SplashScreen() {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.splashScreen}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={[styles.titleContainer]}>
          <Text style={styles.titleNormal}>
            {' '}
            {t('SPLASHSCREENTITLE1')} {`\n`}
            <Text style={styles.titleOutline}> {t('SPLASHSCREENTITLE2')} </Text>
          </Text>
        </View>
        <View style={styles.iconsArea}>
          <Image source={Btc} style={styles.hoverIcon} />
          <Text style={styles.description}>{t('SPLASHSCREENCOINDESC')}</Text>
          <StartButton
            text={t('NEXT')}
            style={styles.startButton}
            FontFamily="Poppins-Bold"
            FontSize={wp('7%')}
            onPress={() => {
              navigation.navigate('SplashScreenSecond');
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
