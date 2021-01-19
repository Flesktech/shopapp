import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput, Linking, Platform, StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import firebase from '../database/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




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

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

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
              <MaterialCommunityIcons name="bell" size={30} color="#D4AA00" style={{ width: 50,paddingVertical:9, paddingHorizontal:9, borderRadius:25,  backgroundColor:'gray' }} />
              
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
                    <MaterialCommunityIcons name="map-marker" size={12} color="red" style={{ width: 10 }} />Store: Elfimo Canal West Osapa, Lekki
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
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginRight: -40,  backgroundColor:"#FFF", paddingHorizontal: 1, marginTop:-30}}
              >
                <View style={styles.chatContainer}>
                <TouchableOpacity
                  onPress={ ()=>{ Linking.openURL('https://chat.whatsapp.com/EO9wLKN4lWm2kPf9OpJiFh')}}
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    height: 90,
                    width: 220,
                    borderRadius: 15,
                    backgroundColor:'#E7F7FC',
                    paddingHorizontal:9,
                    flexDirection:'row',
                    paddingVertical:14,
                    marginRight:7
                  }}
                >
                  <Image
                    source={require("./images/whatsapp.png")}
                    style={{ height: 60, width: 60, flexDirection:'row' }}
                  />
                  <View
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "center",              
                    
                  }}
                >
                  <Text style={{fontWeight:'bold', color:'#003380', marginTop:12, paddingHorizontal:9}}>Chat</Text>
                  <Text style={{paddingHorizontal:9, color:'#003380'}}>On-Call Pharmacist</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.makeCall}
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    height: 90,
                    width: 100,
                    borderRadius: 15,
                    backgroundColor:'#E7F7FC',
                    paddingHorizontal:14,
                    flexDirection:'row',
                    paddingVertical:14,
                  }}
                >
                  <Image
                    source={require("./images/phone-call.png")}
                    style={{ height: 60, width: 60, alignContent:'center', justifyContent:'center' }}
                  />
                </TouchableOpacity>
                </View>
              </ScrollView>
                  <View style={styles.bana}>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{ marginHorizontal: 1, marginTop: 1 }}
                    >
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 110,
                          borderRadius: 15,
                          padding: 5,
                          margin:2,
                          paddingBottom:8
                        }}
                      >
                        <View style={styles.refill}>
                          <Text style={{width:130,justifyContent:"center", alignContent:"center", color:"#FFF", paddingVertical:15, paddingHorizontal:10, fontSize: 19}} >
                          NEED
                          Routine
                          Medication?
                          </Text>
                          <Image
                              source={require("./images/pharmacy.png")}
                              style={{ width: 90, paddingVertical:15, height: 90 }}
                            />
                          <TouchableOpacity style={{backgroundColor:'#FFF', borderRadius:5, marginVertical:30, marginHorizontal:17, paddingVertical:9, paddingHorizontal:9}}>
                            <Text style={{fontWeight:'bold', color:"#003380" }}>REFILL NOW</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 110,
                          borderRadius: 15,
                          padding: 5,
                          
                        }}
                      >
                        <View style={styles.refill}>
                        <Image
                              source={require("./images/health.png")}
                              style={{ width: 94, paddingVertical:15, height: 90, marginHorizontal:5, paddingHorizontal:10 }}
                            />
                          <Text style={{width:120,justifyContent:"center", alignContent:"center", color:"#FFF", paddingVertical:15, paddingHorizontal:5, fontSize: 17}} >
                            FREE DELIVERY
                            LEKKI & AJAH
                          </Text>
                          
                          <TouchableOpacity style={{backgroundColor:'#FFF', borderRadius:5, marginVertical:30, marginHorizontal:17, paddingVertical:9, paddingHorizontal:9}}>
                            <Text style={{fontWeight:'bold', color:"#003380", fontSize:12 }}>Promo ends{"\n"} February 2021</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ScrollView>
                    </View>
                        <View style={{paddingHorizontal: 10,}}>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#FFF",
                        borderRadius: 40,
                        alignItems: "center",
                        paddingVertical: 3,
                        paddingHorizontal: 20,
                        marginTop: 10,
                        borderColor:'grey',
                        borderWidth:1
                          
                      }}
                    >
                      
                      <TextInput
                        placeholder="search for your medication"
                        style={{ paddingHorizontal: 10, paddingVertical:3, fontSize: 15, color: "#ccccef" }}
                      />
                    </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text
                      style={{
                        color: "#6574CF",
                        fontFamily: "Poppins-Bold",
                        marginTop: 10,
                        fontSize: 12,
                        fontWeight:"bold",
                        paddingHorizontal: 10,
                        textAlign:'left'
                      }}
                    >
                      Featured Products
                    </Text>
                    <View style={{justifyContent:"flex-end", marginLeft:200}}>
                      <TouchableOpacity onPress={() => navigate("Shop")} >
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        marginTop: 10,
                        fontSize: 12,
                        fontWeight:"bold",
                        alignContent:'flex-end',
                        justifyContent:'flex-end',
                        color:'darkgray'
                      }}
                    >
                      Shop
                    </Text>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={{ marginHorizontal: 7, marginTop: 10, paddingBottom:20 }}
                    >
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 110,
                          width: 100,
                          borderRadius: 15,
                          padding: 5,
                          margin:2,
                        }}
                      >
                        <Image
                          source={require("./images/antibiotics.jpg")}
                          style={{ width: 90, borderRadius: 10, height: 90 }}

                        />
                        <Text>ANTI-BIOTICS</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 100,
                          width: 100,
                          borderRadius: 15,
                          padding: 5,
                          margin:2,
                        }}
                      >
                        <Image
                          source={require("./images/antimaleria.jpg")}
                          style={{ width: 90, borderRadius: 10, height: 90 }}
                        />
                        <Text>ANTI-MALARIA</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 100,
                          width: 100,
                          borderRadius: 15,
                          padding: 5,
                          margin:2,
                        }}
                      >
                        <Image
                          source={require("./images/costmetics.jpg")}
                          style={{ width: 90, borderRadius: 10, height: 90 }}
                        />
                        <Text>COSTMETICS</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 100,
                          width: 100,
                          borderRadius: 15,
                          padding: 5,
                          margin:2,
                        }}
                      >
                        <Image
                          source={require("./images/antibiotics.jpg")}
                          style={{ width: 90, borderRadius: 10, height: 90 }}
                        />
                        <Text>ANTI-BIOTICS</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: "#FEFEFE",
                          height: 100,
                          width: 100,
                          borderRadius: 15,
                          padding: 5,
                          margin:2,
                        }}
                      >
                        <Image
                          source={require("./images/costmetics.jpg")}
                          style={{ width: 90, borderRadius: 10, height: 90 }}
                        />
                        <Text>COSTMETICS</Text>
                      </View>
                    </ScrollView>
                    
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
  })