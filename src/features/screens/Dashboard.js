import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import LogoViewLG from '../../core/components/LogoViewLG';
import Header from '../../core/components/Header';
import Slide from './Slide';
import ImageView from '../../core/components/ImageView';
import {Card, Divider, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../core/components/CustomButton';
const Dashboard = ({navigation}) => {
  const globalStyle = require('../../core/styles/GlobalStyle');
  function notification() {
    navigation.navigate('Notification');
  }

  function search() {
    navigation.navigate('Search');
  }
  function openPremium(val) {
    navigation.navigate(val + '');
  }

  function loginHandler() {
  console.log("Hello");
  }
  return (
    <CustomSafeAreaView>
      <View style={styles.header}>
        <Header
          iconRight="magnify"
          iconLeft="menu"
          onPressRight={search}
          onPressLeft={notification}
          bgColor="#ffffff"
        />
      </View>

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 190, marginBottom: 30}}>
          <Slide />
        </View>
        <Card
          style={{
            elevation: 4,
            borderRadius: 10,
            margin: 10,
            padding: 2,
            // backgroundColor: '#768192',
          }}>
          <View style={{borderRadius: 10}}>
            {/* backgroundColor: '#768192' */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight
                onPress={() => {
                  console.log('Hello');
                }}
                underlayColor="rgba(0, 0, 0, .32)"
                style={{width: '50%', borderTopLeftRadius: 10}}>
                <View style={{borderRadius: 10}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#fff',
                      backgroundColor: 'green',
                      width: '55%',
                      borderTopLeftRadius: 10,
                      padding: 5,
                      borderBottomRightRadius: 10,
                    }}>
                    Completed
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      height: 70,
                    }}>
                    <Text
                      style={{
                        fontSize: 65,
                        color: '#111',
                        //marginTop: -15,
                        textAlign: 'center',
                        // padding: 10,
                        color: 'grey',
                      }}>
                      9
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        alignSelf: 'flex-end',
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Jobs
                    </Text>
                  </View>

                  <Text
                    style={{
                      textAlign: 'right',
                      // margin: -8,
                      marginTop: 15,
                      color: 'blue',
                      marginRight: 5,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    Click to View All
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={styles.verticleLine}></View>
              <TouchableHighlight
                onPress={() => {
                  console.log('Hello');
                }}
                underlayColor="rgba(0, 0, 0, .32)"
                style={{width: '50%', borderTopRightRadius: 10}}>
                <View style={{}}>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#fff',
                        textAlign: 'right',
                        backgroundColor: '#FF6600',
                        width: '55%',
                        borderBottomLeftRadius: 10,
                        padding: 5,
                        borderTopRightRadius: 10,
                      }}>
                      In-Progress
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      height: 70,
                    }}>
                    <Text
                      style={{
                        fontSize: 65,
                        color: '#111',
                        //marginTop: -15,
                        textAlign: 'center',
                        // padding: 10,
                        color: 'grey',
                      }}>
                      159
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        alignSelf: 'flex-end',
                        color: '#000',
                        fontWeight: 'bold',
                      }}>
                      Jobs
                    </Text>
                  </View>

                  <Text
                    style={{
                      textAlign: 'right',
                      // margin: -8,
                      marginTop: 15,
                      color: 'blue',
                      fontWeight: 'bold',
                      marginRight: 5,
                      textDecorationLine: 'underline',
                    }}>
                    Click to View All
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={{padding: 5}}>
              <Text style={{fontSize: 15, color: 'grey', textAlign: 'center'}}>
                <Text>Total</Text>
                <Text style={{fontWeight: 'bold', fontSize: 18}}> 350</Text>
                <Text> Jobs Till Now</Text>
              </Text>
            </View>
          </View>
        </Card>
        <View style={{margin: 10,}}>
          <CustomButton
            borderRadius={25}
            text="Create New Job Order"
            onPress={loginHandler}
          />
        </View>

        <LogoViewLG />
      </View>
    </CustomSafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    // paddingTop: StatusBar.currentHeight,
  },
  header: {
    backgroundColor: '#F6F6F6',
    height: 70,
  },
  head: {
    // backgroundColor: '#111111',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cardDesign: {
    elevation: 3,
    borderRadius: 10,
  },

  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'grey',
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  bottomBanner: {
    padding: 20,
  },
  imageStyle: {
    width: '100%',
    height: 90,
    backgroundColor: '#fff',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  slideView: {
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    padding: 10,
    alignItems: 'center',
  },
  slideSecondView: {
    justifyContent: 'center',
    borderLeftColor: '#D1D1D1',
    borderLeftWidth: 2,
    paddingLeft: 8,
    marginLeft: 5,
  },
});
