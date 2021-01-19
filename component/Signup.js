// components/signup.js
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Alert, ActivityIndicator,Image,ImageBackground, TouchableOpacity, SafeAreaView, keyboard, KeyboardAvoidingView } from 'react-native';
import firebase from '../database/firebase';
import { Button, TextInput } from 'react-native-paper';


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#000080"/>
        </View>
      )
    }    
    return (
      <SafeAreaView style={styles.safeContainer}>
     <StatusBar barStyle="light-content"/>
     <ImageBackground 
      style={styles.stretch}>
      <KeyboardAvoidingView behabior='padding' style={styles.container}>
        <View style={styles.container}>  
          <View style={styles.logocontainer}>
            <Image
              style={styles.logo}
              source={require('./logo2.png')}
            />
          </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        
        <Button mode="outlined" style={{borderRadius:20, paddingVertical:5, marginBottom:2, marginTop:10}} onPress={() => this.registerUser()}>
          SignUp
        </Button>

        <View style={styles.loginText}>
            <Text style={{color:"#800080", fontSize:15, textAlign:'center'}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color:"#800080", fontWeight:'bold', textAlign:'center', fontSize:15}}>Sign In</Text>
            </TouchableOpacity>
          </View>                      
      </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    backgroundColor:"#F0F8FF"
  },
  inputStyle: {
    width: '100%',
    backgroundColor:"#F0F8FF",
    marginBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  safeContainer:{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logo:{
    width: 200,
    height: 76,
  },
  logocontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:80,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 5,
    textAlign: 'center',
    alignContent:'center',
    justifyContent:'center',

  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  stretch:{
    width:"100%",
    height:"100%",
    resizeMode:"cover"
  },
});
