import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from '../../features/screens/SplashScreen';
import Login from '../../features/screens/login/Login';
import Dashboard from '../../features/screens/Dashboard';
import CompleteJobs from '../../features/screens/CompleteJobs';
import HomeDrawer from './HomeDrawer';
import PendingJobs from '../../features/screens/PendingJobs';
import SiteReport from '../../features/screens/SiteReport';
import OrderDetails from '../../features/screens/OrderDetails';

const Stack = createStackNavigator();

export default Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Test',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 10
        },
        headerTintColor: '#F6F6F6',

        headerTitleStyle: {
          color: '#242424',
          width: '100%',
          textAlign: 'center',
        },
        headerBackImage: () => (
          <MaterialCommunityIcons
            name="chevron-left"
            color={'#EE3D4A'}
            size={40}
          />
        ),
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerTitle: 'Test', headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false, headerTitle: 'Dashboard'}}
      /> */}

      <Stack.Screen
        name="Dashboard"
        component={HomeDrawer}
        options={{ headerShown: false, headerTitle: 'Dashboard' }}
      />
      <Stack.Screen
        name="CompleteJobs"
        component={CompleteJobs}
        options={{
          headerShown: true,
          headerTitle: 'Complete Jobs',
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="PendingJobs"
        component={PendingJobs}
        options={{
          headerShown: true,
          headerTitle: 'Inprogress Jobs',
          gestureEnabled: true,
        }}

      />
      <Stack.Screen
        name="SiteReport"
        component={SiteReport}
        options={{
          headerShown: true,
          headerTitle: 'Site Report',
          gestureEnabled: true,
        }}
      />

      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          headerShown: true,
          headerTitle: 'Job Order Report',
          gestureEnabled: true,
        }}
      />


    </Stack.Navigator>
  );
};
