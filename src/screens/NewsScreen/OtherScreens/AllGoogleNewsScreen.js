import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import NewItemSliderComponent from '../../../components/NewItemSliderComponent/NewItemSliderComponent';
import BottomNavigatorComponent from '../../../components/BottomNavigatorComponent/BottomNavigatorComponent';
import AllItemComponent from '../../../components/AllItemComponent/AllItemComponent';
import axios from 'axios';

import {Color} from '../../../config/color';
import {useNavigation} from '@react-navigation/native';
import {StyleVariables} from '../../../config/style-variables';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

export default function AllGoogleNewsScreen(props) {
  const [topnews, setTopNews] = useState(null);
  const navigation = useNavigation();

  const {news} = useSelector(state => state);

  useEffect(() => {}, []);

  return (
    <ScrollView style={{padding: wp('2%')}}>
      <Text style={styles.titleText}>Kripto Haberler</Text>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topnews != null &&
          topnews.map((item, key) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewsDetailsPage', {item})}
              style={styles.sliderNewsCont}
              key={key}>
              <Image
                style={styles.sliderNewsImg}
                source={{
                  uri: 'https://arachaber.net/wp-content/uploads/2021/07/dakika.jpg',
                }}
              />
              <View
                style={{
                  flex: 1,
                  position: 'absolute',
                  marginHorizontal: wp('5%'),
                }}>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={styles.titleText}>
                  {item.title}
                </Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView> */}

      <Text style={styles.titleText}>Önerilen Haberler</Text>
      <FlatList
        data={news.allNews}
        renderItem={({item}) => (
          <TouchableOpacity
            // onPress={() => navigation.navigate('NewsDetailsPage', {item})}
            style={styles.newsCont}
            key={key}>
            <View>
              <Image
                resizeMode="cover"
                style={styles.newsImg}
                source={{
                  uri: 'https://arachaber.net/wp-content/uploads/2021/07/dakika.jpg',
                }}
              />
            </View>
            <View style={styles.textCont}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.titleText}>
                {item.title}
              </Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  newsCont: {
    backgroundColor: Color.backgroundColor,
    width: '100%',
    height: wp('35%'),
    borderRadius: 20,
    padding: wp('3%'),
    marginTop: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  sliderNewsCont: {
    width: wp('80%'),
    height: wp('50%'),
    borderRadius: 20,
    marginTop: wp('3%'),
    marginRight: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    flex: 6,
    color: Color.textColor,
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
    marginTop: wp('3%'),
  },
  dateText: {
    flex: 1,
    color: Color.opacityWhite,
    fontSize: wp('3%'),
  },
  newsImg: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: 20,
  },
  sliderNewsImg: {
    width: wp('80%'),
    height: wp('50%'),
    borderRadius: 20,
    opacity: 0.2,
  },
  textCont: {
    flex: 2,
    marginLeft: wp('2%'),
  },
});
