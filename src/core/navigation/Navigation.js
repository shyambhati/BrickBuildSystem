import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from '../../features/screens/SplashScreen';
import Login from '../../features/screens/login/Login';
import Dashboard from '../../features/screens/Dashboard';

const Stack = createStackNavigator();

export default Navigation = () => {



  return (
    <Stack.Navigator screenOptions={{
      headerTitle: 'Test',
      headerShown: true
      , headerStyle: {
        backgroundColor: '#F6F6F6',
      },
      headerTintColor: '#F6F6F6',

      headerTitleStyle: {
        color: '#242424',
        width: '100%',
        textAlign: 'center',
      },
      headerBackImage: () => (<MaterialCommunityIcons name='chevron-left' color={"#EE3D4A"} size={40} />),
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


      <Stack.Screen
        name="Dashboard"
        component={Dashboard}  
        options={{ headerShown: false,
          headerTitle: 'Dashboard', }}
      />
    </Stack.Navigator>
  );
};
