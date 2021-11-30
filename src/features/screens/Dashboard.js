import React, { useState, useEffect, useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import Header from '../../core/components/Header';
import Slide from './Slide';
import { Card, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../core/components/CustomButton';
import Loader from '../../core/components/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import CustomAlert from '../../core/components/CustomAlert';
const Dashboard = ({ navigation }) => {
  const globalStyle = require('../../core/styles/GlobalStyle');




  const [loading, setLoading] = useState(false);


  const [requestData, setRequestData] = useState(null);
  const [requestDataJobCount, setRequestDataJobCount] = useState(null);

  const [completeJob, setCompleteJob] = useState("**");
  const [pendingJob, setPendingJob] = useState("****");
  const [totalJob, setTotalJob] = useState(0);


  const [pendingJobOrder, setPendingJobOrder] = useState(null);
  const [userID, setUserId] = useState(0);


  function search() {
    navigation.navigate('Search');
  }
  function openCompletedJobs() {
    navigation.navigate('CompleteJobs');
  }

  function openPendingJobs() {
    navigation.navigate('PendingJobs');
  }

  function loginHandler() {
    console.log('Hello');
  }

  function openOrderDetails(item) {
 
    navigation.navigate('OrderDetails', { "item": item });

  }

  
  function raisedAnIssue() {
 
    navigation.navigate('RaisedAnIssue');

  }



  const openSiteReport = (jobId, job_no) => {

    navigation.navigate('SiteReport', { "useId": userID, "jobId": jobId, "jobNo": job_no });
  }

  useEffect(() => {
    if (requestDataJobCount != null) {
      setCompleteJob(requestDataJobCount.completed_count);
      setPendingJob(requestDataJobCount.inprogress_count);
      setTotalJob(parseInt(requestDataJobCount.inprogress_count) + parseInt(requestDataJobCount.completed_count));
      console.log("Run if");
    }
    else {
      console.log("Run else");
      getJobsCount();
    }
  }, [requestData, requestDataJobCount, pendingJobOrder]);

  async function displayData() {
    try {
      let user_id = await AsyncStorage.getItem('user_id');
      // getData(user_id);
    } catch (error) {
      alert(error);
    }
  };

  async function getJobsCount() {
    let user_id = "";
    try {
      user_id = await AsyncStorage.getItem('user_id');
      setUserId(user_id);
    } catch (error) {
      alert(error);
    }
    axios({
      method: 'post',
      url: 'http://portal.brickbuildsystem.co.nz/api/loadjobordercount',
      data: { "user_id": user_id, "device_id": "643db42344ccb36e" },
    }).then(function (response) {
      setRequestDataJobCount(response.data.data[0]);
      setRequestDataJobCount(response.data.data[0]);

      getJobOrder("inprogress");
      if (response.data.error_code === 200) {
        // console.log("User Profile is : "+);
      }
    })
      .catch(function (error) {
        setLoading(false);
        console.log('axois error : ' + error);
      });

  }


  async function getJobOrder(type) {
    // {"user_id":33,"req_for":"inprogress"} or "completed"
    let user_id = "";
    try {
      user_id = await AsyncStorage.getItem('user_id');
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






  const [jobID, setJobId] = useState(0);
  const [jobNo, setJobNo] = useState(0);
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
      data: { "user_id": user_id,"device_id":"643db42344ccb36e", "job_id":job_id,"job_no":job_no,"statusid":"0" },
    }).then(function (response) { 
      if (response.data.error_code === 200) {
        hideAlert();
        getJobsCount();
      }
      else{
        hideAlert();
      }
    }).catch(function (error) {
      hideAlert();
    });

  }

  const renderItem = ({ item }) => (
    // <Item title={item.title} />
    <Card style={styles.cardStyle2}>
      <View style={{ backgroundColor: '#CCCCCC', borderRadius: 10 }}>
        <View style={styles.mainViewStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>Job No: </Text>
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
        <View style={styles.viewStyle} >
          <View style={{ flex: 0.6 }}>
            <View style={{ marginTop: 5, flex: 0.5 }}>
              <Text style={{ fontWeight: 'bold' }}>Date Order </Text>
              <Text>{item.date_created.split(" ")[0]}</Text>
            </View>
            <View style={{ marginTop: 5, flex: 0.5 }}>
              <Text style={{ fontWeight: 'bold' }}>Job Open Date</Text>
              <Text>{item.job_open_date.split(" ")[0]}</Text>
            </View>
          </View>
          <View style={{ flex: 0.4, overflow: "hidden" }}>
            <View style={{ marginTop: 5, }}>
              <Text style={{ fontWeight: 'bold' }}>Approved </Text>
              <Text>{item.approved == 1 ? "YES" : "NO"}</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>Address</Text>
              <Text numberOfLines={1} ellipsizeMode='tail'>{item.address}</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewStyle2}>
          <TouchableHighlight
          activeOpacity={0.6} underlayColor="#DDDDDD"
            onPress={() => {openOrderDetails(item)}}>

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

          
          <TouchableHighlight
            activeOpacity={0.6} underlayColor="#DDDDDD"
            onPress={()=>{raisedAnIssue() }}>
          <View style={{ alignItems: 'center' }}>
            <Icon name={'edit'} size={18} color="red" />
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              Raised an{'\n'} issue
            </Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6} underlayColor="#DDDDDD"
            onPress={()=>{changeStatusAlert(item.id,item.job_no) }}>
          <View style={{ alignItems: 'center' }}>
            <Icon name={'tasks'} size={18} color="green" />
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              Mark as{'\n'} complete
            </Text>
          </View>
          </TouchableHighlight>
        </View>
      </View>
    </Card>
  );

  return (
    <CustomSafeAreaView>
      <Loader loading={loading} />
      <CustomAlert
        title={tittle}
        message={message}
        visibleAlert={visibleAlert}
        confirmText={'OKay!'}
        cancelText={'No, cancel'}
        cancelBtn={() => hideAlert()}
        confirmBtn={() => confirmStatusChange()}
      />
      <View style={styles.header}>
        <Header
          iconRight="magnify"
          iconLeft="menu"
          onPressRight={search}
          onPressLeft={() => navigation.openDrawer('SideMenu')}
          bgColor="#ffffff"
        />
      </View>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height: 160, marginBottom: 20 }}>
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
          <View style={{ borderRadius: 10 }}>
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
                style={{ width: '50%', borderTopLeftRadius: 10 }}>
                <View style={{ borderRadius: 10 }}>
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
                        fontSize: 58,
                        color: '#111',
                        //marginTop: -15,
                        textAlign: 'center',
                        // padding: 10,
                        color: 'grey',
                      }}>
                      {completeJob}
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
                  openPendingJobs();
                }}
                underlayColor="rgba(0, 0, 0, .32)"
                style={{ width: '50%', borderTopRightRadius: 10 }}>
                <View style={{}}>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
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
                        fontSize: 58,
                        color: '#111',
                        //marginTop: -15,
                        textAlign: 'center',
                        // padding: 10,
                        color: 'grey',
                      }}>
                      {pendingJob}
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
            <View style={{ padding: 5 }}>
              <Text style={{ fontSize: 15, color: 'grey', textAlign: 'center' }}>
                <Text>Total</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {totalJob}</Text>
                <Text> Jobs Till Now</Text>
              </Text>
            </View>
          </View>
        </Card>
        <View style={{ margin: 10 }}>
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
          <View style={{ backgroundColor: 'grey', padding: 5 }}>
            <Text style={{ color: '#fff' }}>
              Latest In-Progress Jobs of This Month
            </Text>
          </View>
          <FlatList
            horizontal
            data={pendingJobOrder}
            extraData={{ pendingJobOrder }}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => (pendingJobOrder == null ? <Text>The List is empty</Text> : null)}
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
    width: 320,
    height: 201
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
