import React, {Component} from 'react';
import {  View, TextInput, Button, StyleSheet } from 'react-native';

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
    }
});
