import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './src/components/login/login';
import Cadastro from './src/components/cadastro/cadastro';
import Logout from './src/components/logout/logout';
import Senha from './src/components/senha/senha';
import Feed from './src/components/feed/feed';
import Header from './src/components/feed/header';

const LoginApp = StackNavigator({
  Login: { screen: Login },
  Cadastro: { screen: Cadastro },
  Senha: { screen: Senha },
  Logout: { screen: Logout },
  Feed: { screen: Feed },
  Header: { screen: Header }
  },
  {
    initialRouterName: 'Login',
    headerMode: 'none',
  },
);

export default class loginExample extends Component {
  render() {
    return <LoginApp />
  }
}

AppRegistry.registerComponent('loginExample', () => loginExample);
