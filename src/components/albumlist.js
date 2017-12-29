import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount() called');
  }
  render() {
    return (
      <View>
        <Text>Album List (Under construction)</Text>
      </View>
    );
  }
}

export default AlbumList;
