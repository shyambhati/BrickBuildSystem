import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const FilePickerContent = ({
  onClickCamera,
  onClickFileSystem,
  onCancelPress,
}) => {
  return (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={onClickCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={onClickFileSystem}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={onCancelPress}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FilePickerContent;
const styles = StyleSheet.create({
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
