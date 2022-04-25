//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';
import * as API from '../../api/index';
import {colors} from '../../constants/colors';

// create a component
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getApiRes();
  }, []);

  const getApiRes = async () => {
    try {
      let res = await API.callGetStocks([
        'AAPL',
        'NFLX',
        'GOOG',
        'AMZN',
        'TSLA',
      ]);
      console.log('res-api', res);
      setTimeout(() => {
        setLoading(false);
        setStocks(res);
      }, 1500);
    } catch (error) {
      console.log('res-api', error);
      setLoading(false);
      setStocks([]);
    }
  };

  const renderItem = ({item,index}) => (
    <View style={styles.item_parent(index)} key={index}>
      <View style={styles.item_img_view}>
        <Image source={{uri: item?.img}} style={styles.item_img} />
      </View>
      <View style={styles.item_content_view}>
        <Text style={styles.item_title_txt}>{item?.title}</Text>
        <Text style={styles.item_desc_txt}>{item?.desc}</Text>
      </View>
      <View style={styles.item_price_content}>
        <Text style={styles.item_price_txt}>{item?.price}</Text>
        <View style={styles.flex_row}>
          <Text style={styles.item_change_txt}>{`↓${item?.change}`}</Text>
          <Text style={styles.item_change_percent_txt}>
            {`${item?.change_percent}%`}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderSeparator = () => (
    <View
      style={styles.item_underline}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.app_base_color}
          animating={loading}
        />
      ) : (
        <FlatList
          data={stocks}
          renderItem={(item,index) => renderItem(item,index)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:colors.app_white
  },
  item_parent:(index)=>({flexDirection: 'row', marginTop: index == 0 ? 15 : 0, paddingHorizontal: 15}),
  item_img_view: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.app_light_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_img: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  item_content_view: {
    flex: 1.2,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  item_title_txt: {fontSize: 22, fontWeight: '600'},
  item_desc_txt: {fontSize: 13, fontWeight: '500', color: colors.app_gray},
  item_price_content: {
    justifyContent: 'center',
    paddingEnd: 15,
    flex: 1,
  },
  item_price_txt: {fontSize: 22, fontWeight: '600'},
  flex_row: {flexDirection: 'row'},
  item_change_txt: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.app_red,
    flex: 1,
  },
  item_change_percent_txt: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.app_red,
    textAlign: 'right',
  },
  item_underline:{
    backgroundColor: colors.app_underline_gray,
    height: 2,
    marginHorizontal:15,
    marginVertical:10,
    shadowColor: colors.app_underline_gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
});

//make this component available to the app
export default Home;
