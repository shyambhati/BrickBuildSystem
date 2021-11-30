import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableHighlight,
} from 'react-native';
import {
  IconButton,
  Button,
  TextInput,
  RadioButton,
  Portal,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

const FilePickerHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
};
export default FilePickerHeader;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#111',
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
});
