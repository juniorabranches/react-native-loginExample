import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert, Button ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import CadastroForm from './cadastroForm';

export  default class Cadastro extends Component {
    render() {
      const { goBack } = this.props.navigation;
      return  (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Image style={styles.logo} source={require('../../components/images/login.png')} />
          </View>
          <View>
            <CadastroForm />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonContainer}>
                         <Text  style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.labelButton} onPress={() => goBack()}>
              <Text style={styles.labels}>
                <Text style={styles.labelText}>Já se cadastrou?</Text><Text style={styles.labelBoldText}> Clique aqui</Text>
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
      height: '100%',
  },
  title:{
      color: "#FFF",
      marginTop: 120,
      width: 180,
      textAlign: 'center',
      opacity: 0.9
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
  }
});

