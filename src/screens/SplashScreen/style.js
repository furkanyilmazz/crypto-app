import {StyleSheet, Platform} from 'react-native';
import {Color} from '../../config/color';
import {StyleVariables} from '../../config/style-variables';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  safeAreaView: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StyleVariables.width * 0.05 : 0,
    flex: 2,
  },
  splashScreen: {
    flex: 1,
    display: 'flex',
  },

  titleContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  titleNormal: {
    fontSize: wp('14%'),
    color: Color.textShadowWhite,
    fontFamily: 'Poppins-Bold',
    letterSpacing: -2,
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
    elevation: 10,
    textAlign: 'center',
    padding: Platform.OS === 'android' ? wp('3%') : wp('6%'),
  },
  titleOutline: {
    fontSize: wp('15%'),
    fontFamily: 'Poppins-Bold',
    color: Color.backgroundColorGradientUp,
    letterSpacing: -2,
    lineHeight: hp('8%'),
    textShadowColor: Color.textShadowBlue,
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10,
    elevation: 10,
  },
  iconsArea: {
    alignItems: 'center',
    shadowColor: Color.textShadowWhite,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 35,
    shadowOpacity: 0.4,
    elevation: 10,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: hp('4%'),
  },
  hoverIcon: {
    marginLeft: StyleVariables.width * 0.1,
    height: hp('40%'),
    width: wp('70%'),
  },
  hoverNFT: {
    resizeMode: 'contain',
    width: hp('70%'),
    height: hp('40%'),
    marginBottom: hp('5%'),
    marginTop: hp('5%'),
    elevation: 10,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp('5%'),
    color: Color.textShadowWhite,
    marginHorizontal: wp('5%'),
    textAlign: 'center',
    lineHeight: 25,
  },
  startButton: {
    marginTop: wp('5%'),
  },
});
