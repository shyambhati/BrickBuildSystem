import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, StatusBar} from 'react-native';
import {COLORS} from './colors.js';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 8,
    paddingTop: StatusBar.currentHeight,
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {height: hp('15%'), width: wp('90%')},
  textInputRounded: {
    marginBottom: 10,
    height: hp('6%'),
    justifyContent: 'center',
    borderBottomWidth: 0,
    fontSize: 15,
    overflow: 'hidden',
    backgroundColor: COLORS.textInputBackround,
    borderRadius: 20,
    paddingLeft: 15,
    color: COLORS.black,
  },
  heading: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: COLORS.blackPrimary,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: hp('2%'),
    color: COLORS.grayPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },


  subHeading2: {
    fontSize: hp('2%'),
    color: COLORS.grayPrimary,
    textAlign: 'center',
    marginTop: 20,
  },

  //
  //
  //
  // checkboxContainer register 1
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
    justifyContent: 'center',
  },
  label: {
    marginTop: 8,
    marginBottom: 8,
  },
  label1: {
    marginTop: 2,
    marginBottom: 2,
    color: COLORS.blackPrimary,
    fontWeight: 'bold',
  },
  label_red: {
    marginTop: 8,
    marginBottom: 8,
    color: COLORS.redCommon,
  },
  label2: {
    marginTop: 2,
    marginBottom: 2,
    color: COLORS.blackPrimary,
    fontWeight: 'bold',
  },
  viewStyle_CP: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewStyle2_CP: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#7676801F',
    padding: 5,
    borderRadius: 9,
    alignItems: 'center',
  },

  viewStyle3_CP: {
    borderRightWidth: 2,
    borderRightColor: '#8E8E93',
    borderRightWidth: 2,
  },

  textR_CP: {
    color: '#111111',
    fontSize: 15,
  },
  buttonStyle_CP: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 42,
    borderColor: '#9B9B9B',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonStyle2_CP: {
    backgroundColor: '#EE3D4A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 15,
  },
  otp_design: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  form: {
    textAlign: 'center',
    padding: 10,
  },

  // text align
  txt_center: {
    textAlign: 'center',
  },
  txt_left: {
    textAlign: 'center',
  },
  txt_right: {
    textAlign: 'center',
  },


  // Action open style
  aStyle:{
      flex: 1,
      alignSelf: 'flex-end',
      backgroundColor: '#e5e5e5',
      elevation: 5,
  }
});
