import React, {Component} from 'react';
import {  Dimensions,View, Text, TextInput, TouchableOpacity, Image, Alert ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import Tabs from 'react-native-tabs';

import { Card, ListItem, Button } from 'react-native-elements'

const width = Dimensions.get('window');


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'second'};
  }

    render() {

      return (
        <View style={styles.content}>
          <Card>
            <Image style={styles.logo} source={require('../../components/images/login.png')} />
          </Card>
        </View>


      )
    }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 65
  },
  content:{
      flex: 0,
      width: '100%'
  }
});
