import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    loginButtonText: 'Access'
  }

  handleSubmitForm = () => {
    const { navigate } = this.props.navigation
    const { email, password } = this.state
    const isValidateEmail = emailRegex.test(email)
    console.log(isValidateEmail)
    const isValidatePassword = password.trim().length > 0 ? true : false
    console.log(isValidatePassword)
    const isValidate = isValidateEmail && isValidatePassword
    if(isValidate)
      navigate('Feed')
    else {
      alert('Email or Password is wrong!!!')
    }
  }

  handleInputChange = (field, value) => {
    this.setState({
      ...this.state,
      [field] : value
    })
  }

  changeLoginButtonText = () => {
    this.setState({
      loginButtonText: 'Loading ...'
    });
  }

  render() {
    const { navigate } = this.props.navigation
    const { handleSubmitForm, handleInputChange } = this
    return  (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Logout')}>
          <Text style={styles.labels}>
            <Text style={styles.labelText}>Logout Test</Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Image style={styles.logo} source={require('../../components/images/login.png')} />
        </View>
        <View style={styles.containerInputs}>
          <TextInput
            style = {styles.input}
             autoCapitalize="none"
             onSubmitEditing={() => this.passwordInput.focus()}
             onChangeText={value => handleInputChange('email', value)}
             autoCorrect={false}
             keyboardType='email-address'
             returnKeyType="next"
             placeholder='email'
             placeholderTextColor="#000" />
          <TextInput
            style = {styles.input}
            onChangeText={value => handleInputChange('password', value)}
            returnKeyType="go"
            ref={(input)=> this.passwordInput = input}
            placeholder='password'
            placeholderTextColor="#000"
            secureTextEntry />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.handleSubmitForm()} >
            <Text
             style={styles.buttonText}
             onPress={this.changeLoginButtonText}>{ this.state.loginButtonText }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Cadastro')}>
            <Text style={styles.labels}>
              <Text style={styles.labelText}>Do not have an account?</Text><Text style={styles.labelBoldText}> Register now</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Senha')}>
            <Text style={styles.labels}>
              <Text style={styles.labelText}>I forgot</Text><Text style={styles.labelBoldText}> my password</Text>
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
  containerInputs: {
   padding: 20
  },
  input:{
      height: 40,
      backgroundColor: '#fff',
      marginBottom: 10,
      padding: 10,
      color: '#000'
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
