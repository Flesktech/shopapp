import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../component/Home';
import ProfileScreen from '../component/ProfileScreen';
import Shop from '../component/Shop';
import Transaction from '../component/Transaction';
import Settings from '../component/Settings';





function HomeScreen() {
  return (
    <View style={{backgroundColor:"#FFF"}}>
    <Home/>
  </View>
  );
}

function Profile() {
  const newLocal = <ProfileScreen />;
  return (
    <View>
    {newLocal}
  </View>
  );
}
function ShopScreen() {
  return (
    <View>
    <Shop/>
  </View>
  );
}

function TransactionScreen() {
  return (
    <View>
    <Transaction/>
  </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
    <Settings/>
  </View>
  );
}

const SettingsStack = createStackNavigator();

function Apps() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function SecondComponent() {
  return (
    <Tab.Navigator
     initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}>

      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'VIP',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
       />
      <Tab.Screen name="Shop" component={ShopScreen} 
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
       />
      
      <Tab.Screen name="Transaction" component={TransactionScreen} 
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}

function FirstComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
    return (

      <SecondComponent/>
    );
  }

  const styles = StyleSheet.create({
    text:{
      fontSize: 15,
      paddingVertical: 10,
      paddingRight: 80,
      lineHeight: 22,
      fontFamily: "Roboto",
      color: "#6574CF",
      
    },
    })
