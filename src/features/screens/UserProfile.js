import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import { Avatar } from 'react-native-paper';
import Header from '../../core/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loader from '../../core/components/Loader';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../../core/store/action/UserAction';
const UserProfile = () => {

    const myState = useSelector(state => state.userProfile);

    const dispatch = useDispatch();


    const [loading, setLoading] = useState(false);


    const [requestData, setRequestData] = useState(null);
    const [requestDataJob, setRequestDataJob] = useState(null);

    const [completeJob, setCompleteJob] = useState("******");
    const [pendingJob, setPendingJob] = useState("******");

    const [name, setName] = useState("******");
    const [email, setEmail] = useState("******");
    const [type, setType] = useState("******");
    const [contact, setContact] = useState("******");
    const [address, setAddress] = useState("******");
    const [imageUrl, setImageUrl] = useState("https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png");
    const [username, setUsername] = useState("******");

    const [userID, setUserId] = useState(0);


    function search() {
        // navigation.navigate('Search');
    }

    useMemo(() => {
        //  displayData();
    })



    useEffect(() => {

        if (requestData != null) {
            setName(requestData.name_of_user);
            setType(requestData.user_category);
            setContact(requestData.contact);
            setAddress(requestData.address);
            setImageUrl(requestData.avatar);
            setUsername(requestData.name_of_user);
            setEmail(requestData.email);
            console.log("Request Data is not null");
        }
        else {
            displayData();
        }
        if (requestDataJob != null) {
            setCompleteJob(requestDataJob.completed_count);
            setPendingJob(requestDataJob.inprogress_count);

            console.log("requestDataJob Data is not null");
        }
    }, [requestData,requestDataJob]);

    async function displayData() {
        try {
            let user_id = await AsyncStorage.getItem('user_id');
            getData(user_id);
        } catch (error) {
            alert(error);
        }
    };
    async function getData(id) {
        console.log(id);
        setLoading(true);

        axios({
            method: 'post',
            url: 'http://portal.brickbuildsystem.co.nz/api/profile',
            data: { "user_id": id },
        }).then(function (response) {
            setRequestData(response.data.data[0]);
           
            setRequestData(response.data.data[0]);
            setLoading(true);
            getJobsCount(id);
            if (response.data.error_code === 200) {
                // console.log("User Profile is : "+);
            }
        })
            .catch(function (error) {
                setLoading(false);
                console.log('axois error : ' + error);
            });

    }


    async function getJobsCount(id) {
        axios({
            method: 'post',
            url: 'http://portal.brickbuildsystem.co.nz/api/loadjobordercount',
            data: { "user_id": id, "device_id": "643db42344ccb36e" },
        }).then(function (response) {
            setRequestDataJob(response.data.data[0]);
            setRequestDataJob(response.data.data[0]);
            setLoading(false);
            if (response.data.error_code === 200) {
                // console.log("User Profile is : "+);
            }
        })
            .catch(function (error) {
                setLoading(false);
                console.log('axois error : ' + error);
            });

    }
    return (
        <CustomSafeAreaView>
            <Loader loading={loading} />
            <View style={styles.header}>
                <Header
                    iconRight="magnify"
                    iconLeft="menu"
                    onPressRight={search}
                    onPressLeft={() => navigation.openDrawer('SideMenu')}
                    bgColor="#ffffff"
                />
            </View>
            <View style={styles.container}>
                <Card style={styles.cardStyle2}>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 20, padding: 10 }}>
                        <Avatar.Image
                            source={{ uri: imageUrl }}
                            size={85}
                        />
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{email}</Text>

                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{ alignItems: "center", padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#CD5C5C" }}>Completed Jobs</Text>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{completeJob}</Text>
                        </View>
                        <View style={styles.verticleLine}></View>
                        <View style={{ alignItems: "center", padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#CD5C5C" }}>In-Progress Jobs</Text>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{pendingJob}</Text>
                        </View>
                    </View>
                </Card>
                <Card style={styles.cardStyle2}>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
                        <Icon name={'edit'} size={23} color="#CD5C5C" style={{ padding: 5 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "#CD5C5C", fontWeight: "bold" }}>Username </Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>{username}</Text>
                        </View>
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
                        <Icon name={'edit'} size={23} color="#CD5C5C" style={{ padding: 5 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "#CD5C5C", fontWeight: "bold" }}>User Type </Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>{type}</Text>
                        </View>
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
                        <Icon name={'edit'} size={23} color="#CD5C5C" style={{ padding: 5 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "#CD5C5C", fontWeight: "bold" }}>Email Address</Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>{email}</Text>
                        </View>
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
                        <Icon name={'edit'} size={23} color="#CD5C5C" style={{ padding: 5 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "#CD5C5C", fontWeight: "bold" }}>Contact</Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>{contact}</Text>
                        </View>
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
                        <Icon name={'edit'} size={23} color="#CD5C5C" style={{ padding: 5 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "#CD5C5C", fontWeight: "bold" }}>Address</Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>{address}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        </CustomSafeAreaView>
    )
}
export default UserProfile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        // paddingTop: StatusBar.currentHeight,
    },
    header: {
        backgroundColor: '#F6F6F6',
        height: 58,
    },

    cardDesign: {
        elevation: 3,
        borderRadius: 10,
    },

    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#DCDCDC',
    },
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#DCDCDC',
    },
    cardStyle2: {
        elevation: 2,
        borderRadius: 10,
        margin: 5,
        // padding: 10,
        // height: 201
    },

});
