import React, {Component} from 'react';
import {  View, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class CadastroForm extends Component {
    render() {
      let data = [{
        value: 'Eletromecânico',
      }, {
        value: 'Mecânico',
      }];
      return  (
        <View style={styles.container}>
          <TextInput style = {styles.input}
                         autoCapitalize="none"
                         //onSubmitEditing={() => this.dropDown.focus()}
                         ref={(input)=> this.nameInput = input}
                         autoCorrect={false}
                         keyboardType='default'
                         returnKeyType="next"
                         placeholder='Nome do usuário'
                         placeholderTextColor="#000"/>

         <Dropdown style = {styles.dropDown}
           ref={(input)=> this.dropDown = input}
           label='Selecione sua profissão'
           textColor="#000"
           baseColor="#000"
           data={data}
         />

         <TextInput style = {styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref={(input)=> this.emailInput = input}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='E-mail'
                        placeholderTextColor="#000"/>

           <TextInput style = {styles.input}
                         returnKeyType="next"
                         onSubmitEditing={() => this.newPasswordInput.focus()}
                         ref={(input)=> this.passwordInput = input}
                         placeholder='Digite sua senha'
                         placeholderTextColor="#000"
                         secureTextEntry/>

           <TextInput style = {styles.input}
                         returnKeyType="go"
                         ref={(input)=> this.newPasswordInput = input}
                         placeholder='Confirme sua senha'
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
    },
    dropDown:{
        height: 40,
        marginBottom: 10,
        padding: 10,
        color: '#000'
    }
});
