import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return  (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Logout')}>
          <Text style={styles.labels}>
            <Text style={styles.labelText}>Teste Tela Logout</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Image style={styles.logo} source={require('../../components/images/login.png')} />
        </View>
        <View style={styles.containerInputs}>
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
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonContainer}
                               onPress={() => navigate('Feed')}>
                       <Text  style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Cadastro')}>
            <Text style={styles.labels}>
              <Text style={styles.labelText}>Não tem uma conta?</Text><Text style={styles.labelBoldText}> Cadastre-se agora</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelButton} onPress={() => navigate('Senha')}>
            <Text style={styles.labels}>
              <Text style={styles.labelText}>Esqueci</Text><Text style={styles.labelBoldText}> minha senha</Text>
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
