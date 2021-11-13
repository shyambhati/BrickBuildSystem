import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import LogoViewLG from '../../core/components/LogoViewLG';
import Header from '../../core/components/Header';
import Slide from './Slide';
import ImageView from '../../core/components/ImageView';
import {Card, Divider, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../core/components/CustomButton';
const Dashboard = ({navigation}) => {
  const globalStyle = require('../../core/styles/GlobalStyle');
  function notification() {
    navigation.navigate('Notification');
  }

  function search() {
    navigation.navigate('Search');
  }
  function openCompletedJobs() {
    navigation.navigate('CompleteJobs');
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
    {
      id: 'bd7acbea-c1bw1-46c2-dhhg-3ad53abb28ba',
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
    <Card style={styles.cardStyle2}>
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
          </View>
          <View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Approved </Text>
              <Text>{item.approved}</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={{fontWeight: 'bold'}}>Address</Text>
              <Text>{item.address}</Text>
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
      <View style={styles.header}>
        <Header
          iconRight="magnify"
          iconLeft="menu"
          onPressRight={search}
          onPressLeft={notification}
          bgColor="#ffffff"
        />
      </View>

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 160, marginBottom: 20}}>
          <Slide />
        </View>
        <Card
          style={{
            elevation: 4,
            borderRadius: 10,
            margin: 5,
            padding: 2,
            // backgroundColor: '#768192',
          }}>
          <View style={{borderRadius: 10}}>
            {/* backgroundColor: '#768192' */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight
                onPress={() => {
                  openCompletedJobs();
                }}
                underlayColor="rgba(0, 0, 0, .32)"
                style={{width: '50%', borderTopLeftRadius: 10}}>
                <View style={{borderRadius: 10}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#fff',
                      backgroundColor: 'green',
                      width: '55%',
                      borderTopLeftRadius: 10,
                      padding: 5,
                      borderBottomRightRadius: 10,
                    }}>
                    Completed
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      height: 70,
                    }}>
                    <Text
                      style={{
                        fontSize: 65,
                        color: '#111',
                        //marginTop: -15,
                        textAlign: 'center',
                        // padding: 10,
                        color: 'grey',
                      }}>
                      9
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        alignSelf: 'flex-end',
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Jobs
                    </Text>
                  </View>

                  <Text
                    style={{
                      textAlign: 'right',
                      // margin: -8,
                      marginTop: 15,
                      color: 'blue',
                      marginRight: 5,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    Click to View All
                  </Text>
                </View>
              </TouchableHighlight>
              <View style={styles.verticleLine}></View>
              <TouchableHighlight
                onPress={() => {
                  console.log('Hello');
                }}
                underlayColor="rgba(0, 0, 0, .32)"
                style={{width: '50%', borderTopRightRadius: 10}}>
                <View style={{}}>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#fff',
                        textAlign: 'right',
                        backgroundColor: '#FF6600',
                        width: '55%',
                        borderBottomLeftRadius: 10,
                        padding: 5,
                        borderTopRightRadius: 10,
                      }}>
                      In-Progress
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      height: 70,
                    }}>
                    <Text
                      style={{
                        fontSize: 65,
                        color: '#111',
                        //marginTop: -15,
                        textAlign: 'center',
                        // padding: 10,
                        color: 'grey',
                      }}>
                      159
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        alignSelf: 'flex-end',
                        color: '#000',
                        fontWeight: 'bold',
                      }}>
                      Jobs
                    </Text>
                  </View>

                  <Text
                    style={{
                      textAlign: 'right',
                      // margin: -8,
                      marginTop: 15,
                      color: 'blue',
                      fontWeight: 'bold',
                      marginRight: 5,
                      textDecorationLine: 'underline',
                    }}>
                    Click to View All
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={{padding: 5}}>
              <Text style={{fontSize: 15, color: 'grey', textAlign: 'center'}}>
                <Text>Total</Text>
                <Text style={{fontWeight: 'bold', fontSize: 18}}> 350</Text>
                <Text> Jobs Till Now</Text>
              </Text>
            </View>
          </View>
        </Card>
        <View style={{margin: 10}}>
          <CustomButton
            borderRadius={25}
            text="Create New Job Order"
            onPress={loginHandler}
          />
        </View>
       
        <View
          style={{
            backgroundColor: '#F0F0F0',
            paddingBottom: 10,
            flex: 1,
          }}>
          <View style={{backgroundColor: 'grey', padding: 5}}>
            <Text style={{color: '#fff'}}>
              Latest In-Progress Jobs of This Month
            </Text>
          </View>
          <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        </View>

        {/* <LogoViewLG /> */}
      </View>
    </CustomSafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    // paddingTop: StatusBar.currentHeight,
  },
  header: {
    backgroundColor: '#F6F6F6',
    height: 58,
  },
  head: {
    // backgroundColor: '#111111',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cardDesign: {
    elevation: 3,
    borderRadius: 10,
  },

  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'grey',
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  cardStyle2: {
    elevation: 4,
    borderRadius: 10,
    margin: 5,
    padding: 2,
    width:320,
    height:201
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
