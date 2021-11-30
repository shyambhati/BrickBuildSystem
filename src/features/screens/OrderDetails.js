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
const OrderDetails = ({ navigation, route }) => {
    const globalStyle = require('../../core/styles/GlobalStyle');

    const [loading, setLoading] = useState(false);

    const [itemData, setItemData] = useState(route.params.item);




    useEffect(() => {

        console.log("Item is ###### : " + itemData.job_no);

    }, [itemData]);


    const renderItem = () => (


        // <Item title={item.title} />
        <Card style={styles.cardStyle}>
            <View style={{ backgroundColor: '#CCCCCC', borderRadius: 10 }}>
                <View style={styles.mainViewStyle}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Job Number : </Text>
                        <Text style={{ fontSize: 18 }}>{itemData.job_no}</Text>
                    </View>
                </View>

                <View style={styles.viewStyle}>
                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Status</Text>
                        <Text style={styles.textRight}>:  {itemData.status==1?"in progress":"Complete"}</Text>
                    </View>
                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Date Order</Text>
                        <Text style={styles.textRight}>:  {itemData.date_created.split(" ")[0]}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Job Open Date</Text>
                        <Text style={styles.textRight}>:  {itemData.job_open_date.split(" ")[0]}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Approved</Text>
                        <Text style={styles.textRight}>:  {itemData.approved == 1 ? "YES" : "NO"}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Status</Text>
                        <Text style={styles.textRight}>:  {itemData.status==1?"in progress":"Complete"}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Address</Text>
                        <Text style={styles.textRight} >:  {itemData.address}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Builder Name</Text>
                        <Text style={styles.textRight} >:  {itemData.builderName}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Brick Layer Code</Text>
                        <Text style={styles.textRight} >:  {itemData.bricklayer}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Cement Type</Text>
                        <Text style={styles.textRight} >:  {itemData.cementType}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Supervisor Name</Text>
                        <Text style={styles.textRight} >:  {itemData.supervisor}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Qty Bricks</Text>
                        <Text style={styles.textRight} >:  {itemData.qty_bricks}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Cleaner Name</Text>
                        <Text style={styles.textRight} >:  {itemData.cleanerName}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Sand Type</Text>
                        <Text style={styles.textRight} >:  {itemData.sandType}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Brick Type</Text>
                        <Text style={styles.textRight} >: {itemData.bricktype}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Wash Process</Text>
                        <Text style={styles.textRight} >:  {itemData.washprocess}</Text>
                    </View>

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Description</Text>
                        <Text style={styles.textRight} >:  {itemData.description}</Text>
                    </View>
                    <View style={styles.viewStyle2}>
                        <Text style={styles.textLeft}>Address</Text>
                        <Text style={styles.textRight} numberOfLines={1} ellipsizeMode='tail'>:  {itemData.address}</Text>
                    </View>
                   


                </View>

            </View>
        </Card>
    );

    return (
        <CustomSafeAreaView>
            <Loader loading={loading} />
            <View style={{ flex: 1 }}>
                {renderItem()}
            </View>
        </CustomSafeAreaView>
    );
};

export default OrderDetails;

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
        marginBottom:5,
        borderRadius: 10,
    },
    viewStyle2: {
        flexDirection: 'row',
        paddingTop:5,
        paddingBottom:5
    },
    textLeft:{
        flex:0.4,
        fontWeight: 'bold'
    },
    textRight:{
        flex:0.6,
       
    }
});
