import React, { Component } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const data = [{
    value: 'Azeez',
}, {
    value: 'Raheem',
}, {
    value: 'Bolt',
}];


export default class Select extends Component {
  render() {
    return (
      <View>
          <Dropdown
              label=''
              data={data}
          />
      </View>
    );
  }
}
