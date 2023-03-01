import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AllItemComponent(props) {
  return (
    <View style={styles.newsItemComponent}>
      <Text style={props.newsComponentTitle}>{props.title}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {props.advicedNews.map((item, index) => (
          <View key={index} style={styles.adviceNewsComponent}>
            <Image source={{uri: item.imgUri}} style={styles.adviceNewsImg} />
            <View>
              <View style={styles.adviceNewsInfoArea}>
                <Image
                  source={{uri: item.authorProfile}}
                  style={styles.adviceNewsProfile}
                />
                <Text style={styles.adviceNewsProfileText}>
                  {item.authorName}
                </Text>
              </View>
              <Text
                style={styles.adviceNewsTitle}
                numberOfLines={2}
                ellipsizeMode="tail">
                {item.newsTitle}
              </Text>
              <View style={styles.northSouthComponent}>
                <TouchableOpacity style={styles.northArea}>
                  <Text style={styles.nothSouthText}>Kuzey</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.southArea}>
                  <Text style={styles.nothSouthText}>Güney</Text>
                </TouchableOpacity>
                <Text style={styles.adviceNewsDate}>{item.createAt}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  adviceNewsComponent: {
    backgroundColor: Color.backgroundColor,
    marginHorizontal: hp('1%'),
    borderRadius: 15,
    marginVertical: wp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  adviceNewsImg: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: 15,
  },
  adviceNewsInfoArea: {
    marginLeft: wp('2%'),
    marginTop: hp('1%'),
    flexDirection: 'row',
    height: hp('5%'),
  },
  adviceNewsProfile: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: 30,
  },
  adviceNewsProfileText: {
    color: Color.textColor,
    fontSize: wp('3%'),
    fontWeight: '500',
    alignSelf: 'center',
    marginLeft: wp('1%'),
    opacity: 0.7,
  },
  adviceNewsTitle: {
    fontSize: wp('3%'),
    width: wp('40%'),
    marginLeft: wp('2%'),
    marginTop: hp('1%'),
    fontWeight: '700',
  },
  northSouthComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('5%'),
  },
  northArea: {
    width: wp('20%'),
    backgroundColor: '#38B7803C',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#38B780',
    marginLeft: wp('2%'),
  },
  southArea: {
    width: wp('20%'),
    backgroundColor: '#FF545F3B',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF545F',
    marginLeft: wp('2%'),
  },
  nothSouthText: {
    fontWeight: '400',
    color: Color.textColor,
    fontSize: wp('3%'),
  },
  adviceNewsDate: {
    color: Color.textColor,
    fontSize: wp('3%'),
    textAlign: 'right',
    width: wp('20%'),
  },
});
