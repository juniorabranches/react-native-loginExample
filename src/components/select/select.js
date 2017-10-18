import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import flecha from './assest/sort-down.png'

export default class Select extends Component {
  render() {
    return (
      <View style={styles.containerSelect}>
        <Text style={styles.placeholder}>Select Opcion</Text>
        <View style={styles.flecha}>
          <Image source={flecha} style={styles.imageSortDown}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSelect: {
    height: 40,
    backgroundColor: '#eeeeee',
    borderWidth: 0.9,
    borderColor: '#aadbf8',
    borderRadius: 5,
    position: 'relative',
  },
  placeholder: {
    color: '#959595',
    padding: 10
  },
  flecha: {
    position: 'absolute',
    top: 0,
    left: 293,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageSortDown: {
    width: 10,
    height: 10
  }
});
