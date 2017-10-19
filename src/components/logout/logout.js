import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'

export  default class Logout extends Component {

    render() {
      return  (
        <Image source={require('../../components/images/background.png')} style={styles.container}>
          <View style={styles.content}>
            <Card>
              <Image style={styles.logo} source={require('../../components/images/login.png')} />
              <Text style={styles.labelsHigh}>Thank you for using our Application!</Text>
              <Text style={styles.labels}>You will receive an email with the link to confirm deletion of your account.</Text>
              <Text style={styles.labelsEnd}>
                <Text style={styles.labelText}>If you have any questions, you can enter <Text style={styles.labelBoldText}> contact us</Text></Text>
              </Text>
              <Button
                  raised
                  icon={{name: 'arrow-back'}}
                  title='Go back'
              onPress={() => { this.props.navigation.navigate('Login')} }/>
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
