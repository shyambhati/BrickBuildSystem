import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {
  IconButton,
  Colors,
} from 'react-native-paper';
const Header = ({bgColor, onPressLeft, onPressRight, iconLeft, iconRight}) => {
  return (
    <View style={styles.head}>
      <IconButton
        //icon="bell-outline"
        icon={iconLeft}
        color={Colors.red500}
        size={25}
        onPress={onPressLeft}
      />

      <Image
        source={require('../../assets/images/logo.jpg')}
        style={{width: 80, height: 35, resizeMode: 'contain', flex: 0.7}}
      />
      <IconButton
        // icon="magnify"
        icon={iconRight}
        color={Colors.red500}
        size={25}
        onPress={onPressRight}
      />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    // paddingTop: StatusBar.currentHeight,
  },
  header: {
    backgroundColor: '#F6F6F6',
    height: 172,
  },
  head: {
     backgroundColor:"#ffffff",
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation:5,
  },
  profile: {
    paddingLeft: 22,
    paddingRight: 22,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileRight: {},
  profileName: {
    color: '#EE3D4A',
    fontSize: 38,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  cardDesign: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 80,
    padding: 10,
    elevation: 5,
  },
  cardTxt1: {
    color: '#111111',
    fontWeight: 'bold',
  },
  cardTxt2: {
    color: '#242424',
    fontWeight: 'bold',
  },
  activeInsurance: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeInsuranceDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  activeInsuranceText: {fontSize: 10, marginRight: -10},
  mapView_design: {
    height: 300,
    backgroundColor: 'red',
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
});
