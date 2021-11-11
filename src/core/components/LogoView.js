import * as React from 'react';
import {View, Image} from 'react-native';

const LogoView = () => {
  const globalStyle = require('../styles/GlobalStyle');

  return (
    <View style={globalStyle.logoView}>
      <Image
        resizeMode="contain"
        style={globalStyle.logo}
        source={require('../../assets/images/logo.jpg')}
      />
    </View>
  );
};
export default LogoView;
