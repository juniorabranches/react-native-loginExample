import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'

export  default class Logout extends Component {

    render() {
      const { goBack } = this.props.navigation;
      return  (
        <Image source={require('../../components/images/background.png')} style={styles.container}>
          <View style={styles.content}>
            <Card>
              <Image style={styles.logo} source={require('../../components/images/login.png')} />
              <Text style={styles.labelsHigh}>Obrigado por usar nosso Aplicativo!</Text>
              <Text style={styles.labels}>Você receberá um e-mail com o link para confirmar a exclusão da sua conta.</Text>
              <Text style={styles.labelsEnd}>
                <Text style={styles.labelText}>Caso tenha ficado alguma dúvida você pode entrar <Text style={styles.labelBoldText}> em contato conosco</Text></Text>
              </Text>
            </Card>
          </View>
        </Image>
      );
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 65
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
  labelsEnd:{
    flexDirection: 'row',
    textAlign: 'center',
    paddingBottom: 10
  },
  labelsHigh:{
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 24,
    paddingBottom: 10
  },
});
