
import React, { Component } from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, Linking, Platform, StyleSheet } from "react-native";
import firebase from '../database/firebase';




export default class Home extends React.Component {
  
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  
  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }
    return (
      <View style={{backgroundColor:"#FFF", paddingBottom:600}}>
      
        
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 10,
            justifyContent:"flex-end"
          }}
        >
          <Icon name="bell" size={30} color="blue" style={{ width: 30 }} />
          <TouchableOpacity
          onPress={() => this.signOut()}
          
            >
          </TouchableOpacity>
        </View>
        
        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 20,
              color: "#522289",
              fontFamily: "Roboto",
            }}
          >
            Hello, {this.state.displayName}
          </Text>


        <Text style={{justifyContent:"center", alignContent:"center", paddingVertical:20, color:"#6574CF", fontSize:19}} >
              No Transactions
            </Text>
        
          
        </View>
      
      </View>
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