
import React, { Component } from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput, Linking, Platform, StyleSheet } from "react-native";
import firebase from '../database/firebase';
import { Button } from 'react-native-paper';



export default class Home extends React.Component {
  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+2348093298137}';
    } else {
      phoneNumber = 'telprompt:${+2348093298137}';
    }

    Linking.openURL(phoneNumber);
  };

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
      <View style={{backgroundColor:"#FFF", }}>
        <ImageBackground
        source={require("./images/hed.png")}
        style={{ width: "100%", height: 160, resizeMode:"cover" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            alignItems: "center",
            paddingHorizontal: 20,
            justifyContent:"flex-end"
          }}
        >
          <Icon name="bell" size={30} color="#fff" style={{ width: 30,paddingVertical:9 }} />
          
        </View>
        <Text 
            style={{
              fontSize: 12,
              paddingHorizontal:6,
              paddingRight: 80,
              margin:6,
              lineHeight: 22,
              fontFamily: "Roboto",
              color: "#FFF",
              borderRadius:20,
              
              
            }}
          >
            <Icon name="map-marker" size={12} color="red" style={{ width: 10 }} />Store: Elifimo Canal West Osapa, Lekki
          </Text>
          </ImageBackground>

        <View style={{ marginTop:6, paddingHorizontal: 10}}>
        <View style={styles.hedContainer}>

<Icon name="account-circle" size={60} color="#FFF" style={{ width: 60 }} />
<Text
  style={{
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Roboto",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center",
    marginTop:18
  }}
>
  Hello, {this.state.displayName}
</Text>
</View>

          <View style={styles.upContainer}>
          <Text style={{justifyContent:"center", alignContent:"center", paddingVertical:20,color:"#6574CF", fontSize:19}} >
              Please Fill the Correct details
              Seperate the Drugs Names and Numbers with a coma (,)
            </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Drugs Names"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Drugs ID Numbers"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Quantity"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Medications"
        />   

            <Button mode="outlined" style={{justifyContent:"center", alignContent:"center",borderRadius:20, paddingVertical:8, marginTop:12}}>
              Request
            </Button>
          
          
          </View>
          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
refill:{
  paddingBottom:80,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:"#1E90FF",
  marginTop:8
},
hedContainer:{
  flexDirection:"row",
  height: 80,
  paddingVertical:9,
  width:180,
  borderRadius:20,
  backgroundColor: '#1E90FF',
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.3,
  elevation: 10,
  marginBottom:8
  
},
chatContainer:{
  backgroundColor:"#FFF", 
  flexDirection:"row", 
  padding:15, 
  borderRadius:1,
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.3,
  elevation: 10,
},
box2: {
  marginTop: 50,
  width: 250,
  height: 150,
  backgroundColor: '#fff',

  // add shadows for iOS only
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.3,

  // add shadows for Android only
  // No options for shadow color, shadow offset, shadow opacity like iOS
  elevation: 10,
},
inputStyle: {
  width: '100%',
  backgroundColor:"#F0F8FF",
  marginBottom: 15,
  alignSelf: "center",
  borderColor: "#ccc",
  borderBottomWidth: 1
},
upContainer:{
  paddingBottom:80,
  paddingHorizontal:10,
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.3,
  elevation: 10,
  justifyContent:"center",
  alignContent:"center"
}
})