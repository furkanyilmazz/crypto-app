import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function DetailChartNavigatorComponent({
  dataTitle,
  indexChartTitle,
  setIndexChartTitle,
}) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {dataTitle.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setIndexChartTitle(item.id);
            }}
            style={styles.chartButton}
          >
            <Text style={styles.navigatorTitle}>{item.name}</Text>
            <View
              key={index}
              style={
                indexChartTitle === item.id
                  ? styles.navigatorTitleActiveTab
                  : styles.navigatorTitleTab
              }
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.lineWhite,
    marginHorizontal: wp('1%'),
    zIndex: 1,
  },
  chartButton: {
    marginHorizontal: wp('3%'),
  },
  navigatorTitleActiveTab: {
    fontFamily: 'Poppins_300Light',
    height: hp('0.3%'),
    backgroundColor: Color.textShadowBlue,
    borderRadius: 7,
    marginBottom: hp('0.6%'),
  },
  navigatorTitleTab: {},
  navigatorTitle: {
    color: Color.opacityWhite,
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});
