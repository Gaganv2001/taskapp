import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';
import Tab3 from './screens/Tab3';
import Tab4 from './screens/Tab4';
import BottomNavigation from './components/BottonNavigation';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }} /> */}   
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Tab1" component={Tab1} />
      <Stack.Screen name="AnotherScreen" component={Tab2} />
      <Stack.Screen name="UsingFetch" component={Tab3} />
      <Stack.Screen name="UserList" component={Tab4} />
      </Stack.Navigator>    
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;