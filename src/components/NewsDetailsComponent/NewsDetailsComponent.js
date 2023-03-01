import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NewsDetailsComponent(props) {
  const navigation = useNavigation();
  const news = props.route.params.item;
  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}>
      <ScrollView style={styles.newsCont}>
        <Text style={styles.newsTitle}>{news.title}</Text>
        <Text style={styles.newsDate}>{news.date}</Text>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.newsImg}
            source={{
              uri: 'https://arachaber.net/wp-content/uploads/2021/07/dakika.jpg',
            }}
          />
        </View>

        <Text style={styles.newsContent}>{news.content}</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.backgroundColor,
    flex: 1,
  },
  newsCont: {
    paddingHorizontal: wp('2%'),
    marginTop: wp('2%'),
  },
  newsTitle: {
    fontSize: wp('5%'),
    color: Color.textColor,
    fontWeight: 'bold',
  },
  newsDate: {
    color: Color.opacityWhite,
    fontWeight: 'bold',
    marginVertical: wp('3%'),
    fontSize: wp('3%'),
  },
  newsContent: {
    color: Color.textColor,
    fontSize: wp('4%'),
    marginVertical: wp('3%'),
  },
  newsImg: {
    width: wp('100%'),
    height: wp('40%'),
  },
});
