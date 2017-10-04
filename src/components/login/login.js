import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert, Button ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import { StackNavigator } from 'react-navigation';

import LoginForm from './loginForm';

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return  (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image style={styles.logo} source={require('../../components/images/login.png')} />
        </View>
        <View>
          <LoginForm />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonContainer}
                               onPress={() => navigate('Cadastro')}>
                       <Text  style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Cadastro')}>
            <Text style={styles.labels}>
              <Text style={styles.labelText}>Não tem uma conta?</Text><Text style={styles.labelBoldText}> Cadastre-se agora</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
   padding: 20
  },
  container: {
      flex: 1,
      backgroundColor: '#FFF'
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
  labelText:{
      color: '#000',
      textAlign: 'center',
  },
  labelBoldText:{
      color: '#000',
      textAlign: 'center',
      fontWeight: '700'
  },
  labelButton:{
      paddingTop: 10,
  },
  labels:{
    flexDirection: 'row',
    textAlign: 'center',
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15,
      borderRadius: 25
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});
