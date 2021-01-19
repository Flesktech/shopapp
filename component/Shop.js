import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { Container, Header, Content, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, FlatList, VirtualizedList, TextInput, Linking, Platform, StyleSheet, SafeAreaView, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import firebase from '../database/firebase';
import { List } from 'react-native-paper';
import { isLoaded, isLoading } from 'expo-font';
import { withNavigation } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProductScreen from './SingleProduct';



let customFonts = {
  'Poppins-Bold': require('./font/Poppins-Bold.ttf'),
};

function Shop ({ navigation }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
//  const state = {
//   loading: true,
//   products: [],
// };
const loadMoreCommit = () => {
  setPage(page + 1);
};
async componentDidMount => {
   
  const url = "https://drugshoppa.ng/wp-json/wc/v3/products?consumer_key=ck_aaef5c823b0fabaf2958613ac0c8f60520f42150&consumer_Secret=cs_f87c08e7f6accfde38919868794df9d9c94488c6"
  const response = await fetch(url,{
    method: 'GET',

    headers:{ 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic Y2tfYWFlZjVjODIzYjBmYWJhZjI5NTg2MTNhYzBjOGY2MDUyMGY0MjE1MDpjc19mODdjMDhlN2Y2YWNjZmRlMzg5MTk4Njg3OTRkZjlkOWM5NDQ4OGM2',
    },
  },
    )

  .then((response) => response.json())
  .then((responseJson) =>{this.setState({products: responseJson, isloading: false})})
    
}
// const renderItem = ({item}) => {
//   return(
//     <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleProductScreen')}>
//     <View style={styles.view}>
//         <Image style={styles.image} source={{uri:  item.images[0].src}}/>
//         <Text style={styles.text}>{item.name}</Text>
//         <Text style={styles.text}>₦{item.price}</Text>
        
//     </View>

//     </TouchableOpacity> 
// )
// }

      
      return (

        <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="light-content"/>
          <KeyboardAvoidingView behabior='padding' style={styles.container}>
          <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor:"#FFF"}}>
              <ImageBackground
              source={require("./images/shop.png")}
              style={{ width: "100%", height: 130, resizeMode:"cover" }}
            >
            <Text style={{  marginTop:58, marginHorizontal:40, fontSize:28, color:'#000080', fontWeight:'bold' }}>Shop</Text>
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
                            {/* Hello, {this.state.displayName} */}
                          </Text>
                  </View>
              </View>
                <View style={styles.upContainer}>
                  {/* <ScrollView  showsVerticalScrollIndicator={false}>
                    <List.Section>
                      <List.Accordion
                        title="Category"
                        >
                          
                        
                        
                      </List.Accordion>
                      
                    </List.Section>
                    
                    
                  </ScrollView> */}
                  {isLoading && <Text>Wait I'm Loading Products for you</Text>}
                  {products.length !== 0 && (
        <button onClick={loadMoreCommit}>Load More Commits</button>
      )}

                  <ScrollView style={styles.container}>
                  {products.map((item, index) => (
                    <View style={styles.view} key={index}>
                      {item.products && (
                        <>
                            <Image style={styles.image} source={{uri:  item.images[0].src}}/>
                             <Text style={styles.text}>{item.name}</Text>
                             <Text style={styles.text}>₦{item.price}</Text>
                            
                         
                             </>
                       )}
                       </View>
                      ))}
                    
                </ScrollView>
                  
                </View>  
              </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>        
    
      );
    }
  

  export default Shop;

const styles = StyleSheet.create({
  refill:{
    
    flexDirection:'row',
    backgroundColor:"#003380",
    marginTop:1,
    paddingVertical:5,
    paddingBottom:8,
    marginBottom:8
  },
  list: {
    flexDirection: 'column',
  },
  image: {
    width: 150, 
    height: 150,
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
  list: {
    flexDirection: 'column'
  },
  // listItem: {
  //   width: '80%'
  // },
  view: {
    padding: 10,

  },
  image: {
    width: 130, 
    height:100
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 5
  },
  loaderContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  loaderImage: {
    width: 150,
    height: 150,
  },
  })