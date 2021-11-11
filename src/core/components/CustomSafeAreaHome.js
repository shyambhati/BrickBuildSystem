import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, ScrollView} from 'react-native';

export default class CustomSafeAreaViewHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={[styles.defaultStyle, this.props.style]}>
        <ScrollView>{this.props.children}</ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
