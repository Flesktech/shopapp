// components/login.js
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator,Image,ImageBackground, TouchableOpacity, SafeAreaView, keyboard, KeyboardAvoidingView} from 'react-native';
import firebase from '../database/firebase';
import { Button, TextInput } from 'react-native-paper';



export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
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

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
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
          <View style={styles.bodyContainer}>
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
        <Button mode="outlined" style={{borderRadius:20, paddingVertical:5, marginBottom:2, marginTop:10}} onPress={() => this.userLogin()}>
          SignIn
        </Button>
          <View style={styles.loginText}>
            <Text style={{color:"#800080", fontSize:15, alignContent:'center', justifyContent:'center', textAlign:'center'}}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{color:"#800080", fontWeight:'bold', fontSize:15, textAlign:'center'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
  safeContainer:{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputStyle: {
    width: '100%',
    backgroundColor:"#F0F8FF",
    marginBottom: 25,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
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
  btn:{
    borderRadius:25,
    paddingVertical: 15,
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
