//import liraries
import React, {memo} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../constants/colors';

// create a component
const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_sub}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.get_started_img}
        />
        <Text style={styles.title_txt}>Stocks</Text>
      </View>
      <Text style={styles.desc_txt}>
        A stock is a general term used to describe the ownership certificates of
        any company. A share, on the other hand, refers to the stock certificate
        of a particular company. Holding a particular company's share makes you
        a shareholder.
      </Text>
      <TouchableOpacity
        style={styles.get_started_btn}
        onPress={() => navigation.replace('Home')}>
        <Text style={styles.get_started_txt}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.app_base_bg,
  },
  container_sub: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '10%',
  },
  title_txt: {
    fontSize: 29,
    color: colors.app_light_white,
    marginVertical: 10,
  },
  desc_txt: {
    fontSize: 19,
    textAlign: 'justify',
    marginHorizontal: '10%',
    marginTop: '15%',
    color: colors.app_light_white,
    lineHeight: 30,
  },
  get_started_btn: {
    marginHorizontal: 15,
    marginVertical: '10%',
    backgroundColor: colors.app_base_color,
    padding: 15,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  get_started_txt: {
    fontSize: 20,
    color: colors.app_white,
    fontWeight: 'bold',
  },
  get_started_img: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
});

//make this component available to the app
export default memo(GetStarted);
