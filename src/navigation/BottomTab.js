import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Settings from './../screens/Settings';
import Dashboard from './../screens/Dashboard';
import Profile from './../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="white"
      shifting={true}
      barStyle={{
        fontFamily: 'Lato-Black',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          fontFamily: 'Lato-Black',
          tabBarColor: '#6C70F4',
          tabBarIcon: ({color}) => (
            <FontAwesome name="tasks" color={color} size={wp(5.5)} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-settings" color={color} size={wp(5.5)} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'teal',
          tabBarIcon: ({color}) => (
            <AntDesign name="profile" color={color} size={wp(5.5)} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
