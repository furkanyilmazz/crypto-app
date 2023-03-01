import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AdvicedItemComponent(props) {
  return (
    <View style={styles.newsItemComponent}>
      <Text style={props.newsComponentTitle}>Önerilen Makaleler</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {props.advicedArticles.map((item, index) => (
          <LinearGradient
            colors={[item.colors[0], item.colors[1]]}
            start={[0, 1]}
            end={[1, 1]}
            key={index}
            style={styles.advicedArticleComponent}>
            <View style={styles.articleUserInfoComponent}>
              <Image
                source={{uri: item.profilePhoto}}
                style={styles.articleProfilePhotoImg}
              />
              <View style={styles.articleUserInfoArea}>
                <Text style={styles.articleUserInfoName} numberOfLines={1}>
                  {item.authorName}
                </Text>
                <Text style={styles.articleUserInfoNickName} numberOfLines={1}>
                  {`@${item.authorNickname}`}
                </Text>
              </View>
            </View>
            <Text style={styles.articleUserInfoTitle} numberOfLines={4}>
              {item.authorArticleTitle}
            </Text>
            <Text style={styles.articleUserInfoDate}>{item.createAt}</Text>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  advicedArticleComponent: {
    width: wp('40%'),
    height: hp('30%'),
    marginLeft: wp('2%'),
    marginTop: hp('1%'),
    borderRadius: 15,
  },

  articleProfilePhotoImg: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: 300,
  },
  articleUserInfoComponent: {
    flexDirection: 'row',
    marginLeft: wp('2%'),
    marginTop: hp('1%'),
  },
  articleUserInfoArea: {
    justifyContent: 'center',
    marginLeft: wp('2%'),
  },
  articleUserInfoName: {
    fontSize: wp('3%'),
    width: wp('30%'),
    fontWeight: 'bold',
    color: Color.textColor,
  },
  articleUserInfoNickName: {
    fontSize: wp('2%'),
    fontWeight: 'bold',
    color: Color.textColor,
    opacity: 1,
  },
  articleUserInfoTitle: {
    fontSize: wp('3%'),
    height: hp('5%'),
    fontWeight: '700',
    color: Color.textColor,
    marginHorizontal: wp('2%'),
    marginTop: hp('1%'),
  },
  articleUserInfoDate: {
    fontSize: wp('2%'),
    opacity: 0.7,
    fontWeight: '500',
    color: Color.textColor,
    marginHorizontal: wp('2%'),
    marginTop: hp('1%'),
  },
});
