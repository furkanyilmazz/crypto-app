import {StyleSheet, Platform} from 'react-native';
import {Color} from '../../config/color';
import {StyleVariables} from '../../config/style-variables';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  portfolioScreenComponent: {
    marginTop: StyleVariables.width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: StyleVariables.width * 0.05,
  },
  portfolioEarnArea: {
    justifyContent: 'space-between',
  },
  portfolioCurrentBalanceText: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: Color.textShadowBlue,
  },
  portfolioBalanceText: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: Color.textColor,
  },
  portfolioEarnBalanceText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: Color.green,
  },
  portfolioEarningView: {
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: StyleVariables.width * 0.006,
    width: StyleVariables.width * 0.2,
    alignSelf: 'flex-end',
  },
  portfolioEarnAreaText: {
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    color: Color.textColor,
  },
  portfolioEarnButtonArea: {
    flexDirection: 'row',
    width: StyleVariables.width * 0.25,
    justifyContent: 'flex-end',
  },
  portfolioChangeChartIcon: {
    marginLeft: StyleVariables.width * 0.04,
    zIndex: 999,
    height: StyleVariables.width * 0.1,
    marginTop: StyleVariables.width * 0.04,
  },
  portfolioChartArea: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  lineChart: {
    marginLeft: StyleVariables.width * -0.05,
    paddingTop: StyleVariables.width * 0.1,
    height: StyleVariables.width * 1,
  },
  portfolioAssets: {
    marginHorizontal: StyleVariables.width * 0.05,
  },
  portfolioAssetsText: {
    fontSize: wp('5%'),
    color: Color.textColor,
    fontWeight: 'bold',
    marginHorizontal: StyleVariables.width * 0.02,
    marginTop: StyleVariables.width * 0.05,
  },
  portfolioAssetsTitleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StyleVariables.width * 0.05,
    display: 'flex',
  },
  portfolioAssetsTitle: {
    fontSize: wp('4%'),
    flex: 1,
    color: Color.textColor,
    opacity: 0.5,
    textAlign: 'right',
  },
  portfolioLine: {
    height: 2,
    borderRadius: 10,
    backgroundColor: Color.textShadowWhite,
    opacity: 0.1,
  },
  portfolioAssetsItem: {
    paddingHorizontal: StyleVariables.width * 0.05,
    backgroundColor: Color.backgroundColorGradientUp,
  },
  customCardCoinLogo: {
    width: StyleVariables.width * 0.1,
    height: StyleVariables.width * 0.1,
    borderRadius: 20,
  },
  portfolioAssetsItemArea: {
    flexDirection: 'row',
    marginVertical: StyleVariables.width * 0.025,
  },
  portfolioAssetsCoinTitleArea: {
    justifyContent: 'center',
    marginLeft: StyleVariables.width * 0.05,
    flex: 1,
  },
  portfolioAssetsItemTitleTextLongName: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: Color.textColor,
  },
  portfolioAssetsItemTitleTextShortName: {
    fontSize: wp('4%'),
    opacity: 0.5,
    fontWeight: '400',
    color: Color.textColor,
  },
  portfolioAssetsItemTitleTextPrice: {
    fontSize: wp('4%'),
    color: Color.textColor,
    textAlign: 'right',
    width: StyleVariables.width * 0.22,
    fontWeight: '500',
    marginRight: StyleVariables.width * 0.05,
  },
  portfolioAssetsItemTitleTextPriceMini: {
    fontSize: wp('4%'),
    opacity: 0.5,
  },
  portfolioItemAddButton: {
    width: StyleVariables.width * 0.3,
    height: StyleVariables.width * 0.12,
    backgroundColor: Color.customBottomBarColor,
    justifyContent: 'center',
    alignSelf: 'center',
    //drop shadow
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 5,
    marginTop: StyleVariables.width * 0.08,
  },
  portfolioItemAddButtonText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: Color.textColor,
    textAlign: 'center',
  },
  rowBack: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: Color.error,
    marginRight: StyleVariables.width * 0.05,
  },
  backRightBtn: {},
  backTextWhite: {
    color: Color.textColor,
    marginRight: StyleVariables.width * 0.07,
  },
});
