
import React, { Component } from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, Linking, Platform, StyleSheet,SafeAreaView,StatusBar, Settings } from "react-native";
import firebase from '../database/firebase';
import DrawerScreen from './DrawerScreen';
import { Button, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class App extends React.Component {
  render() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView behabior='padding' style={styles.container}>
            <ScrollView  showsVerticalScrollIndicator={false}>
              <View style={{backgroundColor:"#FFF"}}>
            
              
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 40,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
              </View>
              <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#522289",
                    fontFamily: "Roboto",
                  }}
                >
                </Text>
              </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
}


const styles = StyleSheet.create({
refill:{
  paddingVertical:50,
  alignItems: 'center',
  justifyContent: 'center',
},
})



