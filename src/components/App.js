import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import Logout from './logout/logout';
import Senha from './senha/senha';
import Feed from './feed/feed';
import Header from './feed/header';

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
