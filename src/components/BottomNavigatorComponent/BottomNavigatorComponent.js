import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function BottomNavigatorComponent({
  dataRoute,
  indexRoute,
  setIndexRoute,
}) {
  return (
    <ScrollView
      horizontal
      style={styles.bottomNavigatorComponent}
      showsHorizontalScrollIndicator={false}
    >
      {dataRoute.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.bottomNavigatorArea}
            onPress={() => {
              setIndexRoute(index);
            }}
          >
            <Text
              style={
                indexRoute === index
                  ? styles.bottomNavigatorTitleActiveTab
                  : styles.bottomNavigatorTitleTab
              }
            >
              {item.name}
            </Text>
            <View
              style={{
                display: indexRoute === index ? 'flex' : 'none',
                height: 2,
                backgroundColor: Color.textShadowBlue,
                borderRadius: 10,
                shadowColor: Color.textShadowBlue,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.7,
                shadowRadius: 3,
                elevation: 3,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomNavigatorComponent: {
    flexdirection: 'row',
    maxHeight: hp('5%'),
  },
  bottomNavigatorArea: {
    marginHorizontal: wp('2%'),
    justifyContent: 'center',
    height: hp('5%'),
    marginBottom: wp('2%'),
  },
  bottomNavigatorTitleActiveTab: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: Color.textShadowBlue,
    textAlign: 'center',
    shadowColor: Color.textShadowBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  bottomNavigatorTitleTab: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
    color: Color.textColor,
    textAlign: 'center',
  },
});
