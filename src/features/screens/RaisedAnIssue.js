import React, { useState, useEffect, useMemo } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, View, TouchableHighlight, TextInput, ImageBackground, Keyboard, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import CustomSafeAreaView from '../../core/components/CustomSafeArea';
import { Avatar } from 'react-native-paper';
import Header from '../../core/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loader from '../../core/components/Loader';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ImageView from "react-native-image-viewing";
import CustomButton from '../../core/components/CustomButton';
import FilePickerContent from '../../core/components/FilePickerContent';
import FilePickerHeader from '../../core/components/FilePickerHeader';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {PermissionsAndroid} from 'react-native';
const RaisedAnIssue = ({ navigation, route }) => {
    const globalStyle = require('../../core/styles/GlobalStyle');
   
 
    
    const [desc, setDesc] = useState("");
    const [imageUrl, setImageUrl] = useState("https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png");


    const bs = React.createRef();
    const fall = new Animated.Value(1);


    const takePhotoFromCamera = () => {
        
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 1,
        }).then(image => {
            console.log(image);
            setImageUrl(image.path);
        });
        bs.current.snapTo(1);
    };

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            compressImageQuality: 1,
        }).then(image => {
            console.log(image);
            setImageUrl(image.path);
            bs.current.snapTo(1);
        });
        bs.current.snapTo(1);
    };

    const renderContent = () => (
        <FilePickerContent
            onClickCamera={takePhotoFromCamera}
            onClickFileSystem={choosePhotoFromLibrary}
            onCancelPress={() => bs.current.snapTo(1)}
        />
    );

    const renderHeader = () => <FilePickerHeader />;

    function openSlide() {
        console.log("work");
        Keyboard.dismiss();
         bs.current.snapTo(0);
    }

    function clearImage(){
        setImageUrl("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[290, 0]}
                renderContent={renderContent}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View
                style={{
                    opacity: Animated.add(0.2, Animated.multiply(fall, 1.0)),
                }}>

                <View style={{padding:10}}>
                
                        <Text style={{ fontSize: 18, color: "#111" }}>
                            Description
                        </Text>
                        <TextInput
                            multiline
                            numberOfLines={6}
                            value={desc}
                            onChangeText={(val) => { setDesc(val) }}
                            placeholder="Enter your issue details.."
                            defaultValue="asdadasdasd"
                            style={[
                                globalStyle.textInputRoundedMultiLine,
                                { textAlignVertical: "top" }
                            ]}
                        />
                        <Text style={{ fontSize: 18, color: "#111" }}>
                            Attach Photo
                        </Text>
                        <View style={{    borderColor:"#0000008A",borderWidth:1, borderRadius: 11  }}>
                            <ImageBackground

                                style={{
                                    width: '100%',
                                    height: 200,
                                    bottom: 0,
                                    zIndex: 0,
                                    
                                }}
                                
                                imageStyle={{ resizeMode:"contain"}}
                                source={{ uri: imageUrl }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" ,}}>
                                    <View style={{
                                        height: 200,
                                        alignItems: imageUrl === "" ? "center" : "stretch",
                                        justifyContent: "center",
                                        flex: 1,

                                    }}>
                                        {imageUrl === "" ? <Image source={require('../../assets/images/img_file.png')}
                                            style={{ height: 100, }}
                                        /> : null}
                                    </View>
                                    <View style={{
                                        backgroundColor: "#0000008A", height: 200, width: 45,
                                        justifyContent: "space-evenly", alignItems: "center", borderTopRightRadius: 10, borderBottomRightRadius: 10
                                    }}>
                                        <Icon
                                            name={'trash'}
                                            size={30}
                                            color="#D60606F8"
                                            onPress={() => { clearImage() }}
                                        />
                                        <Icon
                                                name={'camera'}
                                                size={30}
                                                color="white"
                                                onPress={() => { openSlide() }}
                                            />
                                    </View>
                                </View>
                            </ImageBackground>
                            

                        </View>
                        <Text style={{ fontSize: 15, color: "red",marginBottom: 10, }}>
                          Note: Image should be clear 
                        </Text>
                        <CustomButton borderRadius={25} text="SUBMIT" onPress={() => { }} />
                 
                </View>
            </Animated.View>
        </SafeAreaView>
    )
}
export default RaisedAnIssue;


const styles = StyleSheet.create({
    container: {
       flex: 1,
        // flexDirection: 'column',
        backgroundColor: '#DDDCDC',
        // paddingTop: StatusBar.currentHeight,
    },
    cardStyle: {
        elevation: 4,
        borderRadius: 10,
        margin: 5,
        padding: 8,
    },
    label: {
        marginTop: 8,
        marginBottom: 8,
    },
    text1: {
        fontSize: 16,
        color: '#717171',
        textAlign: 'center',
        marginBottom: 20,
    },
});
