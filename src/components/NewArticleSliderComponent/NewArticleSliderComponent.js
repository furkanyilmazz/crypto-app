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
      <Text style={[props.newsComponentTitle, {marginTop: wp('5%')}]}>
        {props.articleTitle}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {props.advicedArticle.map((item, index) => (
          <TouchableOpacity key={index} style={styles.chosedArticleComponent}>
            <View style={styles.choosedArticleComponent}>
              <LinearGradient
                colors={[
                  Color.choosedNewsGradient1,
                  Color.choosedNewsGradient3,
                ]}
                style={styles.choosedNewsLinear}>
                <Text style={styles.choosedArticleTitleText} numberOfLines={4}>
                  {item.authorArticleTitle}
                </Text>
                <View style={{flexDirection: 'row', marginTop: wp('5%')}}>
                  <Image
                    source={{uri: item.profilePhoto}}
                    style={styles.choosedArticleAuthorImage}
                  />
                  <View style={styles.choosedArticleAuthorArea}>
                    <Text style={styles.choosedArticleAuthorName}>
                      {item.authorName}
                    </Text>
                    <Text
                      style={
                        styles.choosedArticleAuthorNickname
                      }>{`@${item.authorNickname}`}</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <Image source={{uri: item.imgUri}} style={styles.articlesImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  newsComponentTitle: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: Color.textColor,
    marginLeft: wp('2%'),
    marginTop: hp('1%'),
  },
  chosedArticleComponent: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  articlesImage: {
    width: wp('30%'),
    height: hp('15%'),
    borderRadius: 15,
    marginHorizontal: wp('2%'),
  },
  choosedArticleComponent: {
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: wp('2%'),
    width: wp('30%'),
  },
  choosedArticleAuthorImage: {
    width: wp('5%'),
    height: wp('5%'),
    marginLeft: wp('2%'),
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 30,
  },
  choosedArticleTitleText: {
    fontSize: wp('3%'),
    fontWeight: '600',
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
  choosedArticleAuthorArea: {
    marginLeft: wp('2%'),
  },
  choosedArticleAuthorName: {
    fontSize: wp('3%'),
    color: Color.textColor,
    fontWeight: '500',
  },
  choosedArticleAuthorNickname: {
    fontSize: wp('3%'),
    color: Color.textColor,
    fontWeight: '500',
    opacity: 0.5,
  },
});
