import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, Home,  Search, User } from "react-native-feather";
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import Tab3 from '../screens/Tab3';
import Tab4 from '../screens/Tab4';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'gray', // Color of the active tab label and icon
        inactiveTintColor: 'gray', // Color of the inactive tab label and icon
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="DashBoard"
        component={Tab1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Home stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="UserList"
        component={Tab2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Search stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Tab4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Bell stroke="blue" width={30} height={30}/>
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomNavigation;