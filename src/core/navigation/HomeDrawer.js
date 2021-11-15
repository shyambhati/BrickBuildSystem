import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserProfile from '../../features/screens/UserProfile';
import Dashboard from '../../features/screens/Dashboard';
import SideMenu from '../components/SideMenu';

const Drawer = createDrawerNavigator();
const HomeDrawer = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      drawerContent={ props => <SideMenu {...props}/> }
    >
      <Drawer.Screen
        name="Dashboard"
        options={{drawerLabel: 'Home Screen',headerShown:false}}
        component={Dashboard}
      />
      <Drawer.Screen
        name="UserProfile"
        options={{drawerLabel: 'Home Screen'}}
        component={UserProfile}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
