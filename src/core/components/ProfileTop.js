import * as React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {
  IconButton,
  Colors,
  Button,
  Avatar,
  Card,
  TouchableRipple,
} from 'react-native-paper';
const ProfileTop = ({name, userid}) => {
  return (
    <View style={styles.profile}>
      <Avatar.Image size={74} source={require('../images/avtar.png')} />
      <View style={styles.profileRight}>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={{textAlign: 'right'}}>User ID - {userid}</Text>
      </View>
    </View>
  );
};
export default ProfileTop;

const styles = StyleSheet.create({
  profile: {
    paddingLeft: 22,
    paddingRight: 22,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileName: {
    color: '#EE3D4A',
    fontSize: 38,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
