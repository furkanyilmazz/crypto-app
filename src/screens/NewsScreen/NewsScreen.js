import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  FlatList,
  VirtualizedList,
} from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";

import { styles } from "./style";
import { Color } from "../../config/color";

import { API_URL } from "../../../config";

import axios from "axios";
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import { Rect } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import DropDownPicker from "react-native-dropdown-picker";

import { t } from "i18next";

export default function NewsScreen() {
  const [allNews, setAllNews] = useState([]);

  const [routes, setRoutes] = useState([]);

  const [activeRoute, setActiveRoute] = useState([]);
  const [activeRouteIndex, setActiveRouteIndex] = useState([]);

  const [clicked, setClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  function fetchNews() {
    return axios
      .get(API_URL + "api/GoogleNews/GetAllByAuthorName")
      .then((response) => {
        setIsLoading(false);
        setAllNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    for (const [key, value] of Object.entries(allNews)) {
      setRoutes((routes) => [...routes, { author: key, news: value }]);
    }
    setActiveRouteIndex(allNews["hurriyet.com.tr"]);
  }, [allNews, activeRouteIndex]);

  return (
    <LinearGradient
      colors={[
        Color.backgroundColorGradientUp,
        Color.backgroundColorGradientBottom,
      ]}
      style={styles.mainContainer}
    >
      {isLoading ? (
        <SvgAnimatedLinearGradient
          width={wp("100%")}
          height={hp("100%")}
          secondaryColor={Color.textShadowBlue}
          primaryColor={Color.backgroundColor}
        >
          <Rect
            x={wp("5%")}
            y={hp("3%")}
            ry="10"
            width={wp("90%")}
            height={hp("15%")}
          />
          <Rect
            x={wp("5%")}
            y={hp("20%")}
            ry="10"
            width={wp("90%")}
            height={hp("15%")}
          />
          <Rect
            x={wp("5%")}
            y={hp("37%")}
            ry="10"
            width={wp("90%")}
            height={hp("15%")}
          />
          <Rect
            x={wp("5%")}
            y={hp("54%")}
            ry="10"
            width={wp("90%")}
            height={hp("15%")}
          />
        </SvgAnimatedLinearGradient>
      ) : (
        <View style={{ flex: 1 }}>
          <DropDownPicker
            open={open}
            value={value}
            items={routes}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            listMode="FLATLIST"
            placeholder={
              isLoading
                ? t("LOADING")
                : activeRoute.author
                ? activeRoute.author
                : "Tüm Haberler"
            }
            placeholderStyle={{
              color: Color.textColor,
              fontSize: wp("4%"),
              fontFamily: "Poppins-Bold",
            }}
            style={{
              backgroundColor: Color.backgroundColor,
              width: wp("90%"),
              alignSelf: "center",
              marginTop: hp("2%"),
              borderWidth: 0,
              borderBottomWidth: 1,
              borderColor: Color.textShadowBlue,
            }}
            dropDownContainerStyle={{
              backgroundColor: Color.backgroundColor,
              width: wp("90%"),
              alignSelf: "center",
              marginTop: hp("2%"),
              borderWidth: 0,
            }}
            renderListItem={({ item }) => {
              return (
                <TouchableOpacity
                  key={item.author}
                  style={{
                    backgroundColor: Color.backgroundColor,
                    color: Color.textColor,
                    marginVertical: hp("1%"),
                  }}
                  onPress={(event) => {
                    setActiveRoute(item);
                    setClicked(true);
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: Color.backgroundColor,
                      color: Color.textColor,
                      fontSize: wp("4%"),
                      fontFamily: "Poppins-Regular",
                      marginLeft: wp("2%"),
                    }}
                  >
                    {item.author}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

            <VirtualizedList
              data={clicked ? activeRoute.news : activeRouteIndex}
              style={styles.flatListNewsComponent}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    // onPress={() => navigation.navigate('NewsDetailsPage', {item})}
                    style={styles.newsCont}
                    key={item.id}
                  >
                    <View>
                      <Image
                        resizeMode="cover"
                        style={styles.newsImg}
                        source={{
                          uri: item.filePath,
                        }}
                      />
                    </View>
                    <View style={styles.textCont}>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.titleText}
                      >
                        {item.content}
                      </Text>
                      <Text style={styles.dateText}>{item.createdDate}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              estimatedItemSize={50}
              keyExtractor={(item) => item.id}
              getItemCount={(data) => data.length}
              getItem={(data, index) => data[index]}

            />
        </View>
      )}

      {/* <AllGoogleNews {...activeRoute.news} /> */}
    </LinearGradient>
  );
}
