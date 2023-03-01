import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {Color} from '../../config/color';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AdvicedArticleComponent(props) {
  return (
    <ScrollView style={styles.advicedArticleComponentScrollView}>
      <Text style={[props.newsComponentTitle, {marginTop: hp('1%')}]}>
        {props.articleTitle}
      </Text>
      {props.advices.map((item, index) => (
        <View key={index} style={styles.advicedArticleComponent}>
          <View style={styles.advicedArticleAuthorInfoArea}>
            <Image
              style={styles.advicedArticleAuthorProfile}
              source={{uri: item.profilePhoto}}
            />
            <View style={styles.advicedArticleHeader}>
              <Text style={styles.advicedArticleAuthorName}>
                {item.authorName}
              </Text>
              <Text style={styles.advicedArticleAuthorNickname}>
                {`@${item.authorNickname}`}
              </Text>
            </View>
          </View>

          <LinearGradient
            colors={[item.colors[0], item.colors[1]]}
            style={styles.advicedLinearGradient}
            start={[0, 0]}
            end={[1, 0]}
          />

          <View style={styles.advicedArticleBody}>
            <Text style={styles.advicedArticleBodyText} numberOfLines={2}>
              {item.authorArticleTitle}
            </Text>
          </View>
          <View style={styles.advicedArticleFooter}>
            <Text style={styles.advicedArticleFooterText}>
              {item.authorArticleDate}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  advicedArticleComponent: {
    marginHorizontal: wp('2%'),
    borderRadius: 12,
    backgroundColor: Color.backgroundColor,
    marginVertical: hp('1%'),
  },
  advicedLinearGradient: {
    height: hp('10%'),
    width: '100%',
    position: 'absolute',
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    top: 0,
    zIndex: -1,
    opacity: 0.9,
  },
  advicedArticleAuthorInfoArea: {
    flexDirection: 'row',
    marginTop: hp('0.5%'),
    marginLeft: wp('2%'),
  },
  advicedArticleAuthorProfile: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: 30,
  },
  advicedArticleHeader: {
    marginLeft: wp('2%'),
  },
  advicedArticleAuthorName: {
    fontSize: wp('3%'),
    color: Color.textColor,
    fontWeight: 'bold',
  },
  advicedArticleAuthorNickname: {
    fontSize: wp('3%'),
    color: Color.textColor,
    opacity: 0.8,
  },
  advicedArticleBody: {
    marginHorizontal: wp('2%'),
    marginTop: hp('1%'),
  },
  advicedArticleBodyText: {
    fontSize: wp('3%'),
    fontWeight: '500',
    color: Color.textColor,
  },
  advicedArticleFooter: {
    alignItems: 'flex-end',
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
  },
  advicedArticleFooterText: {
    fontSize: wp('3%'),
    fontWeight: '500',
    color: Color.textColor,
    opacity: 0.8,
  },
});
