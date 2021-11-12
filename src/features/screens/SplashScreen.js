import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressBar from 'react-native-animated-progress';
import AsyncStorage from '@react-native-community/async-storage';
import LogoView from '../../core/components/LogoView';

const SplashScreen = ({navigation}) => {

  const [progressView, setProgressView] = useState(true);

  setTimeout(() => {
    validatelogin();
  }, 3000);

  setTimeout(() => {
    setProgressView(true);
  }, 1800);

  async function validatelogin() {
    try {
      let loginFlag = await AsyncStorage.getItem('loginFlag');

      if (loginFlag === 'TRUE') {
        //navigation.navigate('HomeTabs');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoView />
        <View style={styles.progress}>
          {progressView && (
            <ProgressBar
              progress={100}
              height={5}
              backgroundColor="#EE3D4A"
              trackColor="#F1F1F2"
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
  },
  logo: {
    flexGrow: 1,
    paddingHorizontal: 30,
  },
  progress: {
    marginTop: 10,
    borderRadius: 0,
  },
});
export default SplashScreen;
