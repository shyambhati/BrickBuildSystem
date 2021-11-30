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
import CustomAlert from '../../core/components/CustomAlert';
import { set } from 'react-native-reanimated';
const CompleteJobs = ({ navigation }) => {
  const globalStyle = require('../../core/styles/GlobalStyle');

  const [loading, setLoading] = useState(false);
  const [userID, setUserId] = useState(0);
  const [jobID, setJobId] = useState(0);
  const [jobNo, setJobNo] = useState(0);
  const [completeJobOrder, setCompleteJobOrder] = useState(null);


  useEffect(() => {
    if (completeJobOrder == null) {
      getJobOrder("completed");
    }

  }, [completeJobOrder]);

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
      setCompleteJobOrder(response.data.data[0].job_orders);
      setLoading(false);
      // console.log(response.data.data[0].job_orders);
      if (response.data.error_code === 200) {
        // console.log("User Profile is : "+);
      }
    }).catch(function (error) {
      setLoading(false);
      console.log('axois error : ' + error);
    });

  }

  async function changeStatus(job_id,job_no) {
   
    // {"user_id":33,"req_for":"inprogress"} or "completed"
    console.log("called ");
    let user_id = "";
    try {
      user_id = await AsyncStorage.getItem('user_id');
      setUserId(user_id);
    } catch (error) {
      alert(error);
    }
    axios({
      method: 'post',
      url: 'http://portal.brickbuildsystem.co.nz/api/jobordercomplete',
      data: { "user_id": user_id,"device_id":"643db42344ccb36e", "job_id":job_id,"job_no":job_no,"statusid":"1" },
    }).then(function (response) { 
      if (response.data.error_code === 200) {
        hideAlert();
        getJobOrder("completed");
      }
      else{
        hideAlert();
      }
    }).catch(function (error) {
      hideAlert();
    });

  }

  const openSiteReport = (jobId, job_no) => {
    navigation.navigate('SiteReport', { "useId": userID, "jobId": jobId, "jobNo": job_no });
  }
  function openOrderDetails(item) {

    navigation.navigate('OrderDetails', { "item": item });

  }


  const [message, setmessage] = React.useState('');
  const [tittle, setTittle] = React.useState('');

  const [visibleAlert, setShowAlert] = React.useState(false);

  showAlert = () => {
    setShowAlert(true);
  };

  hideAlert = () => {
    setShowAlert(false);
  };

  function confirmStatusChange()
  {
    hideAlert();
    changeStatus(jobID,jobNo);
  }

  function changeStatusAlert(jobid,jobno) {
    setmessage('Want to Set status of Job number '+jobno+' to in-progress?');
    setTittle('Are You sure ?');
    setJobId(jobid);
    setJobNo(jobno);
    showAlert();
  };

  const renderItem = ({ item }) => (
   // console.log(item),
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
              style={{ height: 30, padding: 2, width: 110, backgroundColor: "grey" }}
              txtStyle={{ fontSize: 10, padding: 5, fontWeight: "bold" }}
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
                <Text>{item.status==1?"in progress":"Completed"}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 5, flexDirection: 'row', }}>
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
          <TouchableHighlight
            activeOpacity={0.6} underlayColor="#DDDDDD"
            onPress={()=>{changeStatusAlert(item.id,item.job_no) }}>
            <View style={{ alignItems: 'center' }}>
              <Icon name={'edit'} size={18} color="green" />
              <Text style={{ textAlign: 'center', fontSize: 12 }}>
                Set as{'\n'} In-Progress
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Card>
  );

  return (
    <CustomSafeAreaView>
      <CustomAlert
        title={tittle}
        message={message}
        visibleAlert={visibleAlert}
        confirmText={'OKay!'}
        cancelText={'No, cancel'}
        cancelBtn={() => hideAlert()}
        confirmBtn={() => confirmStatusChange()}
      />
      <Loader loading={loading} />
      <FlatList
        data={completeJobOrder}
        extraData={{ completeJobOrder }}
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

    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  viewStyle2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#CCCCCC',
    padding: 4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
