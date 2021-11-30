import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, FlatList } from 'react-native';

import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import LogoViewLG from '../../core/components/LogoViewLG';
import Header from '../../core/components/Header';
import Slide from './Slide';
import ImageView from '../../core/components/ImageView';
import { Card, Divider, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../core/components/CustomButton';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../../core/components/Loader';
const PendingJobs = ({ navigation }) => {
  const globalStyle = require('../../core/styles/GlobalStyle');

  const [loading, setLoading] = useState(false);

  const [pendingJobOrder, setPendingJobOrder] = useState(null);
  const [userID, setUserId] = useState(0);

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

  useEffect(() => {
    if (pendingJobOrder == null) {
      getJobOrder("inprogress");
    }

  }, [pendingJobOrder]);

  async function getJobOrder(type) {
    setLoading(true);
    // {"user_id":33,"req_for":"inprogress"} or "completed"
    let user_id = "";
    try {
      user_id = await AsyncStorage.getItem('user_id');
      setUserId(user_id);
    } catch (error) {
      alert(error);
    }

    axios({
      method: 'post',
      url: 'http://portal.brickbuildsystem.co.nz/api/joborders',
      data: { "user_id": user_id, "req_for": type },
    }).then(function (response) {
      setPendingJobOrder(response.data.data[0].job_orders);
      setLoading(false);
      // console.log(response.data.data[0].job_orders);
      if (response.data.error_code === 200) {
        // console.log("User Profile is : "+);
      }
    })
      .catch(function (error) {
        setLoading(false);
        console.log('axois error : ' + error);
      });

  }

  const openSiteReport = (jobId, job_no) => {
    navigation.navigate('SiteReport', { "useId": userID, "jobId": jobId, "jobNo": job_no });
  }
  function openOrderDetails(item) {

    navigation.navigate('OrderDetails', { "item": item });

  }
  const renderItem = ({ item }) => (
    // <Item title={item.title} />
    <Card style={styles.cardStyle}>
      <View style={{ backgroundColor: '#CCCCCC', borderRadius: 10 }}>
        <View style={styles.mainViewStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>Job Number : </Text>
            <Text>{item.job_no}</Text>
          </View>
          {item.site_report_added == 1 ? <CustomButton
            borderRadius={5}
            text="Report"
            style={{ height: 30, padding: 2, width: 60 }}
            txtStyle={{ fontSize: 10, padding: 5 }}
            onPress={() =>
              openSiteReport(item.id, item.job_no)
            }
          /> :  
          <CustomButton
            borderRadius={5}
            text="Create Site Report"
            //onPress={loginHandler}
            style={{ height: 30, padding: 2, width: 110 ,backgroundColor:"grey"}}
            txtStyle={{ fontSize: 10, padding: 5 ,fontWeight:"bold"}}
            onPress={() => console.log()
              //openSiteReport(item.id, item.job_no)
            }
          />}
        </View>

        <View style={styles.viewStyle}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: 0.6 }}>
              <View style={{ marginTop: 5, }}>
                <Text style={{ fontWeight: 'bold' }}>Date Order </Text>
                <Text>{item.date_created.split(" ")[0]}</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Job Open Date</Text>
                <Text>{item.job_open_date.split(" ")[0]}</Text>
              </View>

            </View>
            <View style={{ flex: 0.4, overflow: "hidden" }}>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Approved </Text>
                <Text>{item.approved == 1 ? "YES" : "NO"}</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Status</Text>
                <Text>{item.status}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 5 , flexDirection: 'row',}}>
            <Text style={{ fontWeight: 'bold' }}>Address : </Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>{item.address}</Text>
          </View>

        </View>

        <View style={styles.viewStyle2}>
        <TouchableHighlight
            activeOpacity={0.6} underlayColor="#DDDDDD"
            onPress={() => { openOrderDetails(item) }}>
            <View style={{ alignItems: 'center' }}>
              <Icon name={'file-alt'} size={18} color="#111" />
              <Text style={{ textAlign: 'center', fontSize: 12 }}>
                Job Order {'\n'} Details
              </Text>
            </View>
          </TouchableHighlight>
          <View style={{ alignItems: 'center' }}>
            <Icon name={'edit'} size={18} color="grey" />
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              Create site{'\n'} report
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Icon name={'edit'} size={18} color="red" />
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              Raised an{'\n'} issue
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Icon name={'tasks'} size={18} color="green" />
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              Mark as{'\n'} complete
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <CustomSafeAreaView>
      <Loader loading={loading} />
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
        data={pendingJobOrder}
        extraData={{ pendingJobOrder }}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </CustomSafeAreaView>
  );
};

export default PendingJobs;

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

    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
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
