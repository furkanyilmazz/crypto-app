import {StyleSheet, Platform} from 'react-native';
import {Color} from '../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  mainContainer: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  welcomeText: {
    fontSize: wp('6%'),
    color: Color.textShadowWhite,
  },

  CoinCard: {
    marginHorizontal: wp('3%'),
    marginVertical: hp('1.3%'),
    backgroundColor: Color.backgroundColor,
    padding: wp('3%'),
    borderRadius: 10,
    color: Color.textShadowWhite,
  },
  symbolText: {
    color: Color.textShadowWhite,
  },
  priceText: {
    color: Color.textShadowWhite,
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  searchInput: {
    padding: wp('3%'),
    color: Color.textColor,
    backgroundColor: Color.backgroundColorGradientUp,
    marginHorizontal: wp('3%'),
    borderRadius: 15,
    marginTop: hp('0%'),
    
  },
});
