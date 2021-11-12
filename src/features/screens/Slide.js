import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

const styles = {
  container: {
    height: 190,
  },

  wrapper: {},

  slide: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    width: '100%',
    flex: 1,
    borderRadius: 5,
  },
};

const Slide = () => {
  return (
    <View style={styles.container}>
      <Swiper
        removeClippedSubviews={false}
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={5.5}
        removeClippedSubviews={false}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 10,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 11,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 11,
            }}
          />
        }
        paginationStyle={{
          bottom: -23,
          left: 10,
          right: null,
        }}
        loop>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/1.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/2.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/3.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('./img/4.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
};
export default Slide;
