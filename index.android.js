import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './src/components/login/login';
import LoginForm from './src/components/login/loginForm';
import Cadastro from './src/components/cadastro/cadastro';
import CadastroForm from './src/components/cadastro/cadastroForm';

const LoginApp = StackNavigator({
  Login: { screen: Login },
  LoginForm: { screen: LoginForm},
  Cadastro: { screen: Cadastro },
  CadastroForm: { screen: CadastroForm },
  },
  {
    initialRouterName: 'Login',
    headerMode: 'none',
});

export default class loginExample extends Component {
  render() {
    return <LoginApp />
  }
}

AppRegistry.registerComponent('loginExample', () => loginExample);
