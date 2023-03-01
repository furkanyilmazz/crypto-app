import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

import {Color} from '../../config/color';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NewItemSliderComponent(props) {
  return (
    <View style={styles.newsItemComponent}>
      <Text style={[props.newsComponentTitle, {marginTop: hp('1%')}]}>
        Yeni Haberler
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {props.breakingNews.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.breakingNewsComponent}
            onPress={() => {
              if (typeof item.roadTo != 'undefined') {
                if (item.roadTo.startsWith('/')) {
                  //      navigation.navigate()
                } else {
                  Linking.canOpenURL(item.roadTo).then(supported => {
                    if (supported) {
                      Linking.openURL(item.roadTo);
                    }
                  });
                }
              }
            }}>
            {typeof item.choosedNewsTitle != 'undefined' ? (
              <View style={styles.choosedNewsComponent}>
                <LinearGradient
                  colors={[
                    Color.choosedNewsGradient1,
                    Color.choosedNewsGradient2,
                  ]}
                  style={styles.choosedNewsLinear}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{uri: item.choosedNewsAuthorImage}}
                      style={styles.choosedNewsAuthorImage}
                    />
                  </View>

                  <Text style={styles.choosedNewsTitleText} numberOfLines={4}>
                    {item.choosedNewsTitle}
                  </Text>
                </LinearGradient>
              </View>
            ) : null}

            <Image source={{uri: item.imgUri}} style={styles.breakingNewsImg} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  newsComponentTitle: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
    color: Color.textColor,
    marginLeft: wp('2%'),
    marginTop: hp('1%'),
  },
  breakingNewsComponent: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  breakingNewsImg: {
    width: wp('30%'),
    height: hp('15%'),
    borderRadius: 15,
    marginHorizontal: wp('2%'),
  },
  choosedNewsComponent: {
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: wp('2%'),
    width: wp('30%'),
  },
  choosedNewsAuthorImage: {
    width: wp('5%'),
    height: hp('5%'),
    resizeMode: 'contain',
    marginLeft: wp('2%'),
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  choosedNewsTitleText: {
    fontSize: wp('2.5%'),
    fontWeight: '500',
    color: Color.textColor,
    width: wp('30%'),
    marginLeft: wp('2%'),
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  choosedNewsLinear: {
    height: wp('10%'),
    justifyContent: 'center',
    borderRadius: 15,
  },
});
