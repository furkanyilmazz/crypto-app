import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import React, {useMemo, useState} from 'react';

import {styles} from '../style';
import {Color} from '../../../config/color';

import BottomNavigatorComponent from '../../../components/BottomNavigatorComponent/BottomNavigatorComponent';
import NewArticleSliderComponent from '../../../components/NewArticleSliderComponent/NewArticleSliderComponent';
import AdvicedItemComponent from '../../../components/AdvicedItemComponent/AdvicedItemComponent';
import AdvicedArticleComponent from '../../../components/AdvicedArticleComponent/AdvicedArticleComponent';

export default function ArticlesScreen() {
  const advicedArticles = [
    {
      id: 1,
      profilePhoto: 'https://i.hizliresim.com/d686lo4.jpg',
      authorName: 'Furkan YILMAZ',
      authorNickname: 'fuykan',
      authorArticleTitle:
        "Alman Federal Mali Denetleme Kurumu, Ziraat Bankası'nın Almanya birimini denetlemeye aldı. Almanya birimini denetlemeye aldı          ",
      colors: ['#6947FF', '#35FFC9'],
      imgUri:
        'https://i4.hurimg.com/i/hurriyet/75/750x422/627b511e4e3fe10e8c645194.jpg',
      createAt: '1 saat önce',
    },

    {
      id: 2,
      profilePhoto:
        'https://scontent.fist4-1.fna.fbcdn.net/v/t1.18169-9/14192688_1774796659443984_3392181596456081583_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=730e14&_nc_ohc=L6_552wc0n0AX_VkJ7D&_nc_oc=AQlVpLP5WwqojZcsauorKyjTNde-nhjF4rB4BRvsZV-r0vJKF2S2bGMX7pkcDu0-yAo&_nc_ht=scontent.fist4-1.fna&oh=00_AT99LNNwves-UNiFNC_qoUIT1Nb4N9RzCuVTMamSa2gDhA&oe=62A4B7CB',
      authorName: 'Yunus ÖZDEMİR',
      authorNickname: 'younes',
      authorArticleTitle:
        'Afrika’daki girişimcileri güçlendirmek için kurulan kripto para ve blockchain ekosistemi Akoin’in Kurucu Ortağı Lynn Liss Bitcoin .Almanya birimini denetlemeye aldı   ',
      colors: ['#FBFF80', '#FF58F9'],
      imgUri:
        'https://scontent.fist4-1.fna.fbcdn.net/v/t31.18172-8/14242506_1773417002915283_4937931887538263563_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=730e14&_nc_ohc=gW2Y57HwVBkAX-WzJuu&tn=aAngMMiKla9psxYA&_nc_ht=scontent.fist4-1.fna&oh=00_AT-bEJvI6ZyPVtPsKbxcZHXjkEzMCcBC-MMzcW1rbf_Osw&oe=62A2E2D8',
      createAt: '3 saat önce',
    },
    {
      id: 3,
      profilePhoto:
        'https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg',
      authorName: 'Yusuf Efe AZAKLI',
      authorNickname: 'yusufefe31',
      authorArticleTitle:
        "Alman Federal Mali Denetleme Kurumu, Ziraat Bankası'nın Almanya birimini denetlemeye aldı          ",
      colors: ['#FFF67A', '#FF9191'],
      imgUri:
        'https://www.cumhuriyet.com.tr/Archive/2022/4/23/1928977/kapak_143111.jpg',
      createAt: '6 saat önce',
    },
  ];

  const advices = [
    {
      id: 1,
      profilePhoto:
        'https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg',
      authorName: 'Yusuf Efe AZAKLI',
      authorNickname: 'yusufefe31',
      authorArticleTitle:
        "Alman Federal Mali Denetleme Kurumu, Ziraat Bankası'nın Almanya birimini denetlemeye aldı.Alman Federal Mali Denetleme Kurumu, Ziraat Bankası'nın Almanya birimini denetlemeye aldı             ",
      colors: ['#FFF67A', '#FF9191'],
      authorArticleDate: '1 saat önce',
    },
    {
      id: 2,
      profilePhoto: 'https://i.hizliresim.com/d686lo4.jpg',
      authorName: 'Furkan YILMAZ',
      authorNickname: 'fuykan',
      authorArticleTitle:
        "Alman Federal Mali Denetleme Kurumu, Ziraat Bankası'nın Almanya birimini denetlemeye aldı. Almanya birimini denetlemeye aldı .Alman Federal Mali Denetleme Kurumu, Ziraat Bankası'nın Almanya birimini denetlemeye aldı            ",
      colors: ['#6947FF', '#35FFC9'],
      authorArticleDate: '3 saat önce',
    },
    {
      id: 3,
      profilePhoto:
        'https://scontent.fist4-1.fna.fbcdn.net/v/t1.18169-9/14192688_1774796659443984_3392181596456081583_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=730e14&_nc_ohc=L6_552wc0n0AX_VkJ7D&_nc_oc=AQlVpLP5WwqojZcsauorKyjTNde-nhjF4rB4BRvsZV-r0vJKF2S2bGMX7pkcDu0-yAo&_nc_ht=scontent.fist4-1.fna&oh=00_AT99LNNwves-UNiFNC_qoUIT1Nb4N9RzCuVTMamSa2gDhA&oe=62A4B7CB',
      authorName: 'Yunus ÖZDEMİR',
      authorNickname: 'younes',
      authorArticleTitle:
        'Afrika’daki girişimcileri güçlendirmek için kurulan kripto para ve blockchain ekosistemi Akoin’in Kurucu Ortağı Lynn Liss Bitcoin .Almanya birimini denetlemeye aldı.Afrika’daki girişimcileri güçlendirmek için kurulan kripto para ve blockchain ekosistemi Akoin’in Kurucu Ortağı Lynn Liss Bitcoin .Almanya birimini denetlemeye aldı   ',
      colors: ['#FBFF80', '#FF58F9'],
      authorArticleDate: '5 saat önce',
    },
  ];

  return (
    <ScrollView style={styles.allNewsScreenComponent}>
      <NewArticleSliderComponent
        articleTitle={'Editörün seçtikleri'}
        newsComponentTitle={styles.newsComponentTitle}
        advicedArticle={advicedArticles}
      />

      <AdvicedItemComponent
        newsComponentTitle={styles.newsComponentTitle}
        advicedArticles={advicedArticles}
      />

      <AdvicedArticleComponent
        articleTitle="Öne Çıkan Makaleler"
        newsComponentTitle={styles.newsComponentTitle}
        advices={advices}
      />

      <View style={{height: 150}} />
    </ScrollView>
  );
}
