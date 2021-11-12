import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, TextInput} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import CustomButton from '../../../core/components/CustomButton'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoView from '../../../core/components/LogoView';
import CustomSafeAreaView from '../../../core/components/CustomSafeArea';
import LogoViewLG from '../../../core/components/LogoViewLG';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = ({navigation}) => {
  

  const globalStyle = require('../../../core/styles/GlobalStyle');

  const [hidePassword, setHidePassword] = React.useState(true);
  const [message, setmessage] = React.useState('');
  const [tittle, setTittle] = React.useState('');

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [visibleAlert, setShowAlert] = React.useState(false);

  showAlert = () => {
    setShowAlert(true);
  };

  hideAlert = () => {
    setShowAlert(false);
  };

  function loginHandler() {
    navigation.navigate('Dashboard');
    // if (username.length == 0 || password.length == 0) {
    //   setmessage('Username or Password field cannot be empty!');
    //   setTittle('Wrong input');
    //   showAlert();
    // } else {
    //   if (username == 'demo1234@gmail.com' && password == 'demo@123') {
    //     saveLoginFlag('loginFlag', 'TRUE');
    //     saveLoginUser('user', obj);
        
    //   } else {
    //     setmessage('Wrong Username or Password !');
    //     setTittle('Wrong input');
    //     showAlert();
    //     saveLoginFlag('loginFlag', 'FALSE');
    //   }
    // }

    // getAllData();
    // displayData();
  }

  function showPassword() {
    setHidePass(!hidePass);
    setHidePassword(!hidePassword);
  }

  const openForgetPassword = () => {
    //navigation.navigate('ForgetPassword');
  };

  let obj = {
    name: 'Michal',
    email: 'michal@gmail.com',
    city: 'New York',
  };

  const saveLoginFlag = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const saveLoginUser = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  const getAllData = () => {
    AsyncStorage.getAllKeys().then(keys => {
      return AsyncStorage.multiGet(keys)
        .then(result => {
          console.log(' local storage value is :  ' + result);
        })
        .catch(e => {
          console.log(e);
        });
    });
  };

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let loginFlag = await AsyncStorage.getItem('loginFlag');
      let parsed = JSON.parse(user);
      console.log('User data 11 : ' + parsed);
      console.log('loginFlag data : ' + loginFlag);
      console.log('User data name : ' + parsed.name);
    } catch (error) {
      alert(error);
    }
  };
  const [hidePass, setHidePass] = React.useState(false);
  return (
    <CustomSafeAreaView>
      <AwesomeAlert
        show={visibleAlert}
        showProgress={false}
        title={tittle}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="OKay!"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />

      <View>
        <LogoViewLG />
        <View style={styles.form}>
          <Text style={globalStyle.heading}>WELCOME BACK</Text>
          <Text style={globalStyle.subHeading}>
            Enter your Username and Password to login
          </Text>
          <View style={{marginTop: 10}}>
            <TextInput
              value={username}
              onChangeText={username => setUsername(username)}
              placeholder="username"
              style={globalStyle.textInputRounded}
              keyboardType="default"
            />
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              borderColor: '#000',
            }}>
            <TextInput
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={password => setPassword(password)}
              placeholder="Enter Password.."
              defaultValue=""
              
              style={[
                globalStyle.textInputRounded,
                {flex: 1, paddingRight: 45},
              ]}
            />
            <Icon
              name={hidePass ? 'eye-slash' : 'eye'}
              size={16}
              color="grey"
              onPress={() => showPassword()}
              style={{position: 'absolute', right: 15, bottom: 24}}
            />
          </View>

          {/* <View style={styles.checkboxContainer}>
            <TouchableRipple
              onPress={openForgetPassword}
              rippleColor="rgba(0, 0, 0, .32)">
              <Text style={styles.label_red}> Forget Password </Text>
            </TouchableRipple>
          </View> */}

          <CustomButton borderRadius={25} text="Login" onPress={loginHandler} />
          <Text style={globalStyle.subHeading2}>
         
            2020 ALL Rights Reserved. View Brick Build System Privacy and Terms
          </Text>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
    paddingTop: StatusBar.currentHeight,
  },
  heading: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    color: '#242424',
    textAlign: 'center',
  },

  text1: {
    fontSize: 16,
    color: '#717171',
    textAlign: 'center',
    marginBottom: 20,
  },

  form: {
    textAlign: 'center',
    // backgroundColor: 'pink',
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 8,
  },
  label: {
    marginTop: 8,
    marginBottom: 8,
  },
  label_red: {
    marginTop: 8,
    marginBottom: 8,
    color: '#EE3D4A',
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {height: 128, width: 208},

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
