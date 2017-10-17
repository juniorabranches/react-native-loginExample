import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class ImagePage extends Component {
  render() {
    const { params } = this.props.navigation.state;
    
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: params.img }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
  },
});