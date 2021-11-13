import React from 'react';
import {Image} from 'react-native';

const ImageView = ({imageName}) => {
  return <Image source={"../../assets/images/"+imageName} style={{width: '100%', height: 150}} />;
};

export default ImageView;
