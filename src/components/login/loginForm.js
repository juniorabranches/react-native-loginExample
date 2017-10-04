import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar, Container } from 'react-native';
import {  StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';

import Cadastro from '../cadastro/cadastro';
import RouterComponent from '../../Router'

const goToCadastro = () => {
  Actions.cadastro();
};

const onButtonPress = () => {
  //
}

export default class LoginForm extends Component {
    render() {
      return  (
        <View style={styles.container}>
          <TextInput style = {styles.input}
                         autoCapitalize="none"
                         onSubmitEditing={() => this.passwordInput.focus()}
                         autoCorrect={false}
                         keyboardType='email-address'
                         returnKeyType="next"
                         placeholder='email'
                         placeholderTextColor="#000"/>

          <TextInput style = {styles.input}
                        returnKeyType="go"
                        ref={(input)=> this.passwordInput = input}
                        placeholder='password'
                        placeholderTextColor="#000"
                        secureTextEntry/>

          <TouchableOpacity style={styles.buttonContainer}
                               onPress={onButtonPress}>
                       <Text  style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.labelButton} onPress={goToCadastro}>
            <Text style={styles.labels}>
              <Text style={styles.labelText}>Não tem uma conta?</Text><Text style={styles.labelBoldText}> Cadastre-se agora</Text>
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        color: '#000'
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
