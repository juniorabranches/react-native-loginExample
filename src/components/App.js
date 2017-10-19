import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NetInfo,
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
import ImagePage from './image-page/image';

const LoginApp = StackNavigator({
  Login: { screen: Login },
  Cadastro: { screen: Cadastro },
  Senha: { screen: Senha },
  Logout: { screen: Logout },
  Feed: { screen: Feed },
  Header: { screen: Header },
  Image: { screen: ImagePage }
},
  {
    initialRouterName: 'Login',
    headerMode: 'none',
  },
);

export default class loginExample extends Component {

  componentDidMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.handleConnectivityChange(connectionInfo)
    });
    NetInfo.addEventListener('connectionChange', connectionInfo => this.handleConnectivityChange(connectionInfo));
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange(connectionInfo) {
    if (connectionInfo.type === 'none') {
      alert('No internet-connection... Check your connection and try again')
    }
  }

  render() {
    return <LoginApp />
  }
}
