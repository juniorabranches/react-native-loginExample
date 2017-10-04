import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/components/login/login';
import { Scene } from 'react-native-router-flux';

import RouterComponent from './src/Router'

export default class loginExample extends Component {
  render() {
    return (
     <RouterComponent>
      <Scene key="login">
      </Scene>
    </RouterComponent>
    );
  }
}

AppRegistry.registerComponent('loginExample', () => loginExample);
