import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView  } from 'react-native';

import LoginForm from './loginForm';


export default class Login extends Component {
  render() {
    return  (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image style={styles.logo} source={require('../../components/images/login.png')} />
        </View>
        <View>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      position: 'absolute',
      width: '100%',
      height: '100%'
  },
  title:{
      color: "#FFF",
      marginTop: 120,
      width: 180,
      textAlign: 'center',
      opacity: 0.9
  }
});
