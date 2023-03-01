import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Phone from '../../assets/icons/phone';
import {useNavigation} from '@react-navigation/native';
import Mail from '../../assets/icons/information';
import {useTranslation} from 'react-i18next';

export default function HelpCenterScreen() {
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
      <View style={{alignItems: 'center'}}>
        <View style={styles.itemCont}>
          <Phone
            width={wp('10%')}
            height={wp('10%')}
            fill={Color.textColor}
            style={styles.drawerItemIcon}
          />
          <Text style={styles.header}>Telefon</Text>
          <Text style={styles.value}>{t('HELPCENTERPHONE')}</Text>
          <View style={styles.line} />
          {/* <Ionicons
            name="mail"
            size={25}
            color={Color.textColor}
            style={styles.drawerItemIcon}
          /> */}
          <Text style={styles.header}>E-Posta</Text>
          <Text style={styles.value}>{t('HELPCENTERMAIL')}</Text>
          <View style={styles.line} />
          {/* <Ionicons
            name="location"
            size={25}
            color={Color.textColor}
            style={styles.drawerItemIcon}
          /> */}
          <Text style={styles.header}>Adres</Text>
          <Text style={styles.value}>{t('HELPCENTERADRESS')}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  itemCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('75%'),
    height: wp('130%'),
  },
  header: {
    color: Color.textColor,
    fontSize: wp('4.5%'),
    marginBottom: wp('2%'),
  },
  value: {
    color: Color.opacityWhite,
    fontSize: wp('4.5%'),
    textAlign: 'center',
  },
  drawerItemIcon: {
    marginVertical: wp('2%'),
  },
  line: {
    width: wp('70%'),
    height: wp('0.1%'),
    backgroundColor: Color.opacityWhite,
    marginVertical: wp('5%'),
  },
});
