import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {COLORS} from '../styles/colors';

const CustomButton = ({text, txtStyle, style, onPress, borderRadius}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#DDDDDD"
      style={{borderRadius: borderRadius, padding: 2}}
      onPress={onPress}>
      <View
        style={[styles.btnContainerStyle, style, {borderRadius: borderRadius}]}>
        <Text style={[styles.btnTextStyle, txtStyle]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    borderRadius: 5,
    height: 40,
    backgroundColor: COLORS.redCommon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default CustomButton;