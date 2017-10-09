import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert, Button ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Form, FormItem } from 'react-native-form-validation';

export  default class Cadastro extends Component {
    render() {
      let data = [{
        value: 'Mecânico Eletrônico',
      }, {
        value: 'Mecânico Automotivo',
      }];

      const { goBack } = this.props.navigation;

      return  (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Image style={styles.logo} source={require('../../components/images/login.png')} />
          </View>
          <View style={styles.containerInputs}>
                      <Form
			            ref='form'
			            shouldValidate={true}>
			            <FormItem
			              isRequired={true}>
			                <TextInput style = {styles.input}
			                              autoCapitalize="none"
			                              //onSubmitEditing={() => this.dropDown.focus()}
			                              ref={(input)=> this.nameInput = input}
			                              autoCorrect={false}
			                              keyboardType='default'
			                              returnKeyType="next"
			                              placeholder='Nome do usuário'
			                              placeholderTextColor="#000"/>
			            </FormItem>
			            <FormItem
			              isRequired={true}>
			              <Dropdown style = {styles.dropDown}
			                ref={(input)=> this.dropDown = input}
			                label='Selecione sua profissão'
			                textColor="#000"
			                baseColor="#000"
			                data={data} />
			            </FormItem>
			            <FormItem
			              isRequired={true}>
			            <TextInput style = {styles.input}
			                            autoCapitalize="none"
			                            onSubmitEditing={() => this.passwordInput.focus()}
			                            ref={(input)=> this.emailInput = input}
			                            autoCorrect={false}
			                            keyboardType='email-address'
			                            returnKeyType="next"
			                            placeholder='E-mail'
			                            placeholderTextColor="#000"/>
			            </FormItem>
			            <FormItem
			              isRequired={true}>
			              <TextInput style = {styles.input}
			                            returnKeyType="next"
			                            onSubmitEditing={() => this.newPasswordInput.focus()}
			                            ref={(input)=> this.passwordInput = input}
			                            placeholder='Digite sua senha'
			                            placeholderTextColor="#000"
			                            secureTextEntry/>
			            </FormItem>
			            <FormItem
			              isRequired={true}>
			              <TextInput style = {styles.input}
			                            returnKeyType="go"
			                            ref={(input)=> this.newPasswordInput = input}
			                            placeholder='Confirme sua senha'
			                            placeholderTextColor="#000"
			                            secureTextEntry/>
			            </FormItem>
          </Form>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonContainer}>
                         <Text  style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.labelButton} onPress={() => goBack()}>
              <Text style={styles.labels}>
                <Text style={styles.labelText}>Já se cadastrou?</Text><Text style={styles.labelBoldText}> Acesse sua conta</Text>
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
  dropDown:{
      height: 40,
      marginBottom: 10,
      padding: 10,
      color: '#000'
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
