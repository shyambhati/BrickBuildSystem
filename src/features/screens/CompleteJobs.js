import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight, FlatList} from 'react-native';

import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import LogoViewLG from '../../core/components/LogoViewLG';
import Header from '../../core/components/Header';
import Slide from './Slide';
import ImageView from '../../core/components/ImageView';
import {Card, Divider, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../core/components/CustomButton';
const CompleteJobs = ({navigation}) => {
  const globalStyle = require('../../core/styles/GlobalStyle');
  function notification() {
    navigation.navigate('Notification');
  }

  function search() {
    navigation.navigate('Search');
  }
  function openPremium(val) {
    navigation.navigate(val + '');
  }

  function loginHandler() {
    console.log('Hello');
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-rwer-3ad53abb28ba',
      jobNumber: '424234234',
      dateOrder: '29 Oct 2021',
      jobOpenDate: '29 Oct 2021',
      approved: 'Yes',
      status: 'Complete',
      address: 'Noida',
    },
    {
      id: 'bd7acbea-c1b1-46c2-sfdf-3ad53abb28ba',
      jobNumber: '424234234',
      dateOrder: '29 Oct 2021',
      jobOpenDate: '29 Oct 2021',
      approved: 'Yes',
      status: 'Complete',
      address: 'Noida',
    },
    {
      id: 'bd7acbea-c1b1-46c2-dhhg-3ad53abb28ba',
      jobNumber: '424234234',
      dateOrder: '29 Oct 2021',
      jobOpenDate: '29 Oct 2021',
      approved: 'Yes',
      status: 'Complete',
      address: 'Noida',
    },
  ];

  const renderItem = ({item}) => (
    // <Item title={item.title} />
    <Card style={styles.cardStyle}>
      <View style={{backgroundColor: '#CCCCCC', borderRadius: 10}}>
        <View style={styles.mainViewStyle}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Job Number : </Text>
            <Text>{item.jobNumber}</Text>
          </View>
          <CustomButton
            borderRadius={5}
            text="Report"
            onPress={loginHandler}
            style={{height: 30, padding: 2, width: 60}}
            txtStyle={{fontSize: 10, padding: 5}}
          />
        </View>
        <View style={styles.viewStyle}>
          <View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Date Order </Text>
              <Text>{item.dateOrder}</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Job Open Date</Text>
              <Text>{item.jobOpenDate}</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Address</Text>
              <Text>{item.jobNumber}</Text>
            </View>
          </View>
          <View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Approved </Text>
              <Text>{item.approved}</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Status</Text>
              <Text>{item.status}</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewStyle2}>
          <View style={{alignItems: 'center'}}>
            <Icon name={'file-alt'} size={18} color="#111" />
            <Text style={{textAlign: 'center', fontSize: 12}}>
              Job Order {'\n'} Details
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Icon name={'edit'} size={18} color="grey" />
            <Text style={{textAlign: 'center', fontSize: 12}}>
              Create site{'\n'} report
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Icon name={'edit'} size={18} color="red" />
            <Text style={{textAlign: 'center', fontSize: 12}}>
              Raised an{'\n'} issue
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Icon name={'tasks'} size={18} color="green" />
            <Text style={{textAlign: 'center', fontSize: 12}}>
              Mark as{'\n'} complete
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <CustomSafeAreaView>
      {/* <View style={styles.header}>
        <Header
          iconRight="magnify"
          iconLeft="menu"
          onPressRight={search}
          onPressLeft={notification}
          bgColor="#ffffff"
        />
      </View> */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </CustomSafeAreaView>
  );
};

export default CompleteJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    // paddingTop: StatusBar.currentHeight,
  },
  cardStyle: {
    elevation: 4,
    borderRadius: 10,
    margin: 5,
    padding: 2,
  },
  mainViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#CCCCCC',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
  },
  viewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#CCCCCC',
    padding: 4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
