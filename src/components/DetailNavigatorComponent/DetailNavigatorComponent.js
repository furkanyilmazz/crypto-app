import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../config/color';
import DetailOverviewScreen from '../../screens/MarketScreen/DetailPage/DetailOverviewScreen';
import {StyleVariables} from '../../config/style-variables';
import DetailStatisticScreen from '../../screens/MarketScreen/DetailPage/DetailStatisticScreen';
import DetailDiscussionPage from '../../screens/MarketScreen/DetailPage/DetailDiscussionPage';
import DetailNewsPage from '../../screens/MarketScreen/DetailPage/DetailNewsPage';
import {TabActions} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function DetailNavigatorComponent({
  data,
  dataTitle,
  indexTitle,
  setIndexTitle,
}) {
  const [page, setPage] = useState(1);

  const ComponentFunc = page => {
    switch (page) {
      case 1:
        return <DetailOverviewScreen data={data} />;
      case 2:
        return <DetailStatisticScreen />;
      case 3:
        return <DetailDiscussionPage />;
      case 4:
        return <DetailNewsPage />;
      default:
        return <DetailOverviewScreen />;
    }
  };

  const component = ComponentFunc(page);

  return (
    <View style={styles.container}>
      <View style={styles.topCont}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.titleCont}
        >
          {dataTitle.map((item, index) => {
            return (
              <View>
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setIndexTitle(index);
                    setPage(item.page);
                  }}
                  style={styles.detailsButton}
                >
                  <Text style={styles.navigatorTitle}>{item.name}</Text>
                  <View
                    key={index}
                    style={
                      indexTitle === index
                        ? styles.navigatorTitleActiveTab
                        : styles.navigatorTitleTab
                    }
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.chartButtons}>
          {/* <TouchableOpacity>
            <Image source={require('../../assets/button/candle.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/button/lineChart.png')} />
          </TouchableOpacity> */}
        </View>
      </View>
      {/* <DetailOverviewScreen/>  */}
      {/* <DetailStatisticScreen/>
        <DetailDiscussionPage/>
        <DetailNewsPage/> */}
      <View>{component}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('1%'),
    marginTop: hp('-5%'),
  },
  topCont: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.opacityWhite,
  },
  titleCont: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsButton: {
    marginHorizontal: wp('3%'),
  },
  navigatorTitleActiveTab: {
    height: wp('0.8%'),
    backgroundColor: Color.textShadowBlue,
    borderRadius: 7,
    marginBottom: wp('3%'),
    marginTop: wp('0.5%'),
  },
  navigatorTitleTab: {},
  navigatorTitle: {
    color: Color.textColor,
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
  },
  chartButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: wp('25%'),
    paddingBottom: hp('2%'),
    display: 'flex',
  },
});
