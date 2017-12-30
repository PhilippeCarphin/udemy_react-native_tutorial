import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
	  console.log("componentWillMount() called");
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
	  console.log("componentWillMount() finished");
  }
  render() {
	  console.log("render() called");
    return (
      <View>
        <Text>Album List (Under construction)</Text>
      </View>
    );
  }
}

export default AlbumList;
