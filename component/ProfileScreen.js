import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput, Linking, Platform, StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import firebase from '../database/firebase';
import { Button } from 'react-native-paper';



let customFonts = {
  'Poppins-Bold': require('./font/Poppins-Bold.ttf'),
};

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

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    
    if (this.state.fontsLoaded) {
      this.state = { 
        displayName: firebase.auth().currentUser.displayName,
        uid: firebase.auth().currentUser.uid
      }
      return (
        <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="light-content"/>
          <KeyboardAvoidingView behabior='padding' style={styles.container}>
            <ScrollView vertical
                showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor:"#FFF"}}>
              <ImageBackground
              source={require("./images/shop.png")}
              style={{ width: "100%", height: 130, resizeMode:"cover" }}
            >
            <Image
                    source={require("./images/long.png")}
                    style={{ height: 40, marginTop:58, marginHorizontal:40, width: 187 }}
                  />
            <View
              style={{
                flexDirection: "row",
                marginTop: 75,
                alignItems: "center",
                paddingHorizontal: 20,
                justifyContent:"flex-end"
              }}
            >
              <Icon name="bell" size={30} color="#D4AA00" style={{ width: 50,paddingVertical:9, paddingHorizontal:9, borderRadius:25,  backgroundColor:'gray' }} />
              
            </View>
            
              </ImageBackground>

            <View style={{ marginTop:10}}>
              <View style={{paddingHorizontal: 10}}>
                  <Text 
                    style={{
                      fontSize: 12,
                      paddingHorizontal:6,
                      paddingRight: 80,
                      margin:6,
                      lineHeight: 22,
                      fontFamily: "Roboto",
                      color: "#000080",
                      fontWeight:'bold',
                      borderRadius:20,
                      
                      
                    }}
                  >
                    <Icon name="map-marker" size={12} color="red" style={{ width: 10 }} />Store: Elfimo Canal West Osapa, Lekki
                  </Text>
                  <View style={styles.hedContainer}>
                    
                          <Image
                                source={require("./images/boy.png")}
                                style={{ height: 40, marginHorizontal:10, width: 40 }}
                          />
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: "Poppins-Bold",
                              flexDirection:"row",
                              alignContent:"center",
                              justifyContent:"center",
                              marginTop:8,
                              fontWeight:'bold',
                              color:'#808080'
                            }}
                          >
                            Hello, {this.state.displayName}
                          </Text>
                  </View>
              </View>
              <View style={styles.upContainer}>
            <Text style={{color:"red", padding:5}}>Please Fill the necessary Information</Text>
            <Text style={{justifyContent:"center", alignContent:"center", paddingVertical:7,color:"#6574CF", fontSize:19}} >
            Personal  Information
            </Text>

            <TextInput
          style={styles.inputStyle}
          placeholder="Full Name"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Gender"
          
        />
        
          <TextInput
          style={styles.inputStyle}
          placeholder="Location (City)"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone Number"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Delivery Address"
          
        />
        <Text style={{justifyContent:"center", alignContent:"center", paddingVertical:7,color:"#6574CF", fontSize:19}} >
              For VIP Membership
            </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Doctors/Hospital information"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="HMO Provider"
          
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Alternative contact (optional)"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Medications"
        />   

            <Button mode="outlined" style={{justifyContent:"center", alignContent:"center",
            borderRadius:20, paddingVertical:8, marginTop:12, color:"#1E90FF"}}>
              Update information
            </Button>
          
        </View>
                  </View>

                </View>
                </ScrollView>
          </KeyboardAvoidingView>
      </SafeAreaView>        
    
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  refill:{
    
    flexDirection:'row',
    backgroundColor:"#003380",
    marginTop:1,
    paddingVertical:5,
    paddingBottom:8,
    marginBottom:8
  },
  safeContainer:{
  marginTop:30
  },
  hedContainer:{
    flexDirection:"row",
    height: 80,
    paddingVertical:9,
    width:180,
    
  },
  bana:{
    width:350
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
  upContainer:{
    paddingBottom:20,
    paddingHorizontal:20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 10,
    justifyContent:"center",
    alignContent:"center"
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  })