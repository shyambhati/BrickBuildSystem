import React, {Component,useState,useEffect} from 'react';
import {View,StyleSheet,Dimensions,} from 'react-native';
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {

    // const [cDarkTheme, setcDarkTheme] = React.useState(false);

    // const toggleTheme = () => {
    //     setcDarkTheme(!cDarkTheme);
    // }
    const [userData,setUserData]=useState([]);

    useEffect(() => {getAllData()});

    const getAllData = () => {
        let user =  AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        console.log('User data 11 : ' + user);
        // AsyncStorage.getAllKeys().then(keys => {
        //   return AsyncStorage.multiGet(keys)
        //     .then(result => {
        //    //   console.log(' local storage value is :  ' + result);
        //       setUserData(result.user);
        //       console.log("user is : "+userData);
        //     })
        //     .catch(e => {
        //       console.log(e);
        //     });
        // });
      };
    
    
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
            <Drawer.Section>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={require('../../assets/images/logo.jpg')}
                            size={65}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>Rahul Singh(C006)</Title>
                            <Caption style={styles.caption}>Brick Builds System</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                            <Caption style={styles.caption}>Completed Jobs</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>1K</Paragraph>
                            <Caption style={styles.caption}>Pending Jobs</Caption>
                        </View>
                    </View>
                </View>
                </Drawer.Section>
                {/* Drawer Section */}
                <Drawer.Section>
                    <DrawerItem 
                        icon = { ()=> ( <Icon name="home-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Home"
                        // onPress={ ()=>{props.navigation.navigate('Home')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Profile"
                       // onPress={ ()=>{props.navigation.navigate('Profile')} }
                    />
                   
                </Drawer.Section>

                {/* <Drawer.Section title="Choose Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={cDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section> */}
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = { ()=>( <Icon name="exit-to-app"   style={{fontSize:2.8*vh,color:'red'}} /> ) }
                    label="Sign Out"
                    style={{color:"red"}}
                   // onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
      paddingRight:3*vh,
      paddingVertical:10
    },
    title: {
      fontSize: 2*vh,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 12,
      lineHeight: 14,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });