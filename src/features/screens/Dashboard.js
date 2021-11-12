import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import CustomButton from '../../core/components/CustomButton'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import LogoViewLG from '../../core/components/LogoViewLG';
import Header from '../../core/components/Header';
import Slide from './Slide';
const Dashboard = ({ navigation }) => {


    const globalStyle = require('../../core/styles/GlobalStyle');
    function notification() {
        navigation.navigate('Notification');
    }

    function search() {
        navigation.navigate('Search');
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


            <View style={{flex:1}}>
            <View style={{flex: 1, height: 210}}>
          <Slide />
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
  