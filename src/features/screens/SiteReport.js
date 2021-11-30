import React, { useState, useEffect, useMemo } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, View ,TouchableHighlight} from 'react-native';
import { Card } from 'react-native-paper';
import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import { Avatar } from 'react-native-paper';
import Header from '../../core/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loader from '../../core/components/Loader';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ImageView from "react-native-image-viewing";
const SiteReport = ({ navigation, route }) => {

    // const useId =  route.params.useId;
    // const jobId = route.params.jobId; 
    // const jobNo = route.params.jobNo; 

    const [useId, setUseId] = useState(route.params.useId);
    const [jobId, setJobId] = useState(route.params.jobId);
    const [jobNo, setJonNo] = useState(route.params.jobNo);

    const [modalVisible, setModalVisible] = useState(false);

    const [imageUrl, setImageUrl] = useState("");

    const [loading, setLoading] = useState(true);

    const [jobDetail, setJobDetail] = useState(null);

    const [requestData, setRequestData] = useState(null);

    useEffect(() => {
        if (requestData != null) {

            setJobDetail(requestData);
        }
        else {
            getJobsDetails();
        }

    }, [requestData, jobDetail,imageUrl]);

    async function getJobsDetails(id) {
       
        axios({
            method: 'post',
            url: 'http://portal.brickbuildsystem.co.nz/api/loadsitereport',
            data: { "user_id": useId, "device_id": "643db42344ccb36e", "job_id": jobId, "job_no": jobNo },
        }).then(function (response) {
            setRequestData(response.data.data);
            setLoading(false);
             console.log("Data is : ",response.data);
            if (response.data.error_code === 200) {
                // console.log("User Profile is : "+);
            }
        })
            .catch(function (error) {
                setLoading(false);
                console.log('axois error : ' + error);
            });

    }

    const renderItem = ({ item }) => (
     
        <View>
            <Card style={styles.cardStyle2}>
                <View style={styles.mainViewStyle}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: "space-between", alignItems: "stretch", padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 ,color:"#111"}}>Job Number : </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{jobNo}</Text>
                    </View>
                </View>



                <View style={styles.topRowView}>
                    <Text style={styles.leftText}>Visit Date </Text>
                    <Text style={styles.centerTextColon}>:</Text>
                    <Text style={styles.rightText}>{item.visit_date}</Text>
                </View>

                <View style={styles.topRowView}>
                    <Text style={styles.leftText}>Adhrere to Safe Distance </Text>
                    <Text style={styles.centerTextColon}>:</Text>
                    <Text style={styles.rightText}>{item.atsd == 1 ? "YES" : "NO"}</Text>
                </View>

                <View style={styles.topRowView}>
                    <Text style={styles.leftText} >Walk Perimeter </Text>
                    <Text style={styles.centerTextColon}>:</Text>
                    <Text style={styles.rightText}>{item.wp == 1 ? "YES" : "NO"}</Text>
                </View>

                <View style={styles.topRowView}>
                    <Text style={styles.leftText}>Bricklayer Score </Text>
                    <Text style={styles.centerTextColon}>:</Text>
                    <Text style={styles.rightText}>{item.score_bricklayer}</Text>
                </View>

                <View style={styles.topRowView}>
                    <Text style={styles.leftText}>Cleaner Score</Text>
                    <Text style={styles.centerTextColon}>:</Text>
                    <Text style={styles.rightText}>{item.score_cleaner}</Text>
                </View>

                <View style={{ padding: 5, flexDirection: "row", }}>
                    <Text style={styles.leftText}>Note </Text>
                    <Text style={styles.centerTextColon}>:</Text>
                    <Text style={styles.rightText}>{item.note}</Text>
                </View>

                <View style={styles.horizontalLine}></View>


            </Card>

            <Card style={styles.cardStyle2}>
                <View style={styles.mainViewStyle2}>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 4 }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, color: "#CD5C5C", fontWeight: "bold", }}>Board Images  ({item.board_photos.length})</Text>
                        </View>
                    </View>
                    <View style={styles.imageListView}>
                        <FlatList
                            horizontal
                            data={item.board_photos}
                            extraData={item.board_photos}
                            renderItem={renderImage}
                            keyExtractor={item => item.image}
                            ListEmptyComponent={() => (item.post_clean_photos.length == 0 ? <Text style={{ lineHeight: 30 }}>There is no image</Text> : null)}
                        /></View>

                </View>
            </Card>

            <Card style={styles.cardStyle2}>
                <View style={styles.mainViewStyle2}>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 4 }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, color: "#CD5C5C", fontWeight: "bold", }}>Pre Clean Images ({item.pre_clean_photos.length})</Text>
                        </View>
                    </View>
                    <View style={styles.imageListView}>
                        <FlatList
                            horizontal
                            data={item.pre_clean_photos}
                            extraData={item.pre_clean_photos}
                            renderItem={renderImage}
                            keyExtractor={item => item.image}
                            ListEmptyComponent={() => (item.post_clean_photos.length == 0 ? <Text style={{ lineHeight: 30 }}>There is no image</Text> : null)}
                        /></View>

                </View>
            </Card>

            <Card style={styles.cardStyle2}>
                <View style={styles.mainViewStyle2}>
                    <View style={{ flexDirection: "row", alignItems: "center", padding: 4 }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, color: "#CD5C5C", fontWeight: "bold", }}>Post Clean Images ({item.post_clean_photos.length})</Text>
                        </View>
                    </View>
                    <View style={styles.imageListView}>
                        <FlatList
                            horizontal
                            data={item.post_clean_photos}
                            extraData={item.post_clean_photos}
                            renderItem={renderImage}
                            keyExtractor={item => item.image}
                            ListEmptyComponent={() => (item.post_clean_photos.length == 0 ? <Text style={{ lineHeight: 30, textAlign: "center", minWidth: 300 }}>There is no image</Text> : null)}
                        />
                    </View>

                </View>
            </Card>
        </View>
    );


    const renderImage = ({ item }) => (
      
        <TouchableHighlight
            onPress={() => {

                console.log("Item is # : "+item.image);
                setImageUrl([{"uri":item.image}]);
                setModalVisible(true);
                console.log("image is  # : "+imageUrl);
               
            }}
            style={{margin: 5,padding:2, borderRadius: 10,}}>
            <Image source={{ uri: item.image }}
                style={{ width: 150, height: 120, borderRadius: 10, elevation: 5,  backgroundColor: "#FCFCFC" }}

            />
        </TouchableHighlight>
    );



    return (
        <CustomSafeAreaView>
            <Loader loading={loading} />

            <View style={styles.container}>

                <FlatList
                    data={jobDetail}
                    extraData={{ jobDetail }}
                    renderItem={renderItem}
                    keyExtractor={item => item.job_order_id}
                    ListEmptyComponent={() => (jobDetail == null ? <Text>The List is empty</Text> : null)}
                />
            </View>

            <ImageView
                images={imageUrl}
                imageIndex={0}
                visible={modalVisible}
                backgroundColor="#f2f2f2"
                onRequestClose={() => setModalVisible(false)}
            />

        </CustomSafeAreaView>
    )
}
export default SiteReport;


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

    mainViewStyle: {
        flexDirection: 'row',
        backgroundColor: '#FAF9F6',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },


    mainViewStyle2: {
        backgroundColor: '#FAF9F6',
        padding: 5,
        borderRadius: 10
    },
    topRowView: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftText: {
        fontSize: 14,
        // color: "#CD5C5C",
        color: "#000",
        fontWeight: "bold",
        flex: 0.6
    },
    centerTextColon: {
        fontSize: 13, fontWeight: "bold",
    },
    rightText: {
        fontSize: 13, fontWeight: "bold", color: "grey",
        flex: 0.4,
        paddingLeft: 20
    }
    ,
    imageListView: {
        backgroundColor: "#FFFFFF", borderRadius: 10, padding: 2, minHeight: 35,
    }
});
