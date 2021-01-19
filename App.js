// App.js

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ headerShown: false }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={{headerShown: false}} 
       
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


