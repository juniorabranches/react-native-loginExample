import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default class Senha extends Component {

  state = {
    email: '',
    emailHasError: false
  }

  validateEmail() {
    const emailIsValid = emailRegex.test(this.state.email)

    if (!emailIsValid || this.state.email.length == 0) {
       this.setState({emailHasError: true})
    } else {
      this.props.navigation.navigate('Cadastro')
    }
  }

  handleChangeText(text) {
    this.setState({
      email: text,
      emailHasError: false
    })
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    return  (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <View style={styles.containerInputs}>
          <Text style={styles.labelText}>Enter your e-mail address below and receive your password by e-mail.</Text>
          <TextInput
             style={styles.input}
             value={this.state.email}
             onChangeText={(text) => this.handleChangeText(text)}
             autoCapitalize="none"
             onSubmitEditing={() => this.validateEmail()}
             autoCorrect={false}
             keyboardType='email-address'
             returnKeyType="next"
             placeholder='Email'
             placeholderTextColor="#000"/>
           {this.renderErrorText()}
        </View>
        <View style={styles.bottom}>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.validateEmail()}>
               <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.labelText}>Did you remember your password??</Text>

          <TouchableOpacity style={styles.labelButton} onPress={() => goBack()}>
            <Text style={styles.labelBoldText}> Click here to return to login.</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }

  renderErrorText() {
    if (this.state.emailHasError) {
      return <Text style={styles.errorText}>Email is incorrect</Text>
    }
  }

}

const styles = StyleSheet.create({
  bottom: {
    flex: 2,
    paddingTop: 50,
  },
  buttonView: {
   padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 50
  },
  containerInputs: {
     padding: 20,
     paddingTop: 70,
     flex: 2
  },
  logo: {
    position: 'relative',
    width: '100%',
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
    marginBottom: 10,
    textAlign: 'center',
  },
  labelBoldText:{
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
    paddingBottom: 20
  },
  labelButton:{
    paddingTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  }
});
