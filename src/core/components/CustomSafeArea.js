import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

export default class CustomSafeAreaView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={[styles.defaultStyle, this.props.style]}>
        {this.props.children}
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
    //padding: 8,
    // paddingTop: StatusBar.currentHeight,
  },
});
