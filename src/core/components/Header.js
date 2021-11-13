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

  head: {
     backgroundColor:"#ffffff",
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation:5,
  },

});
