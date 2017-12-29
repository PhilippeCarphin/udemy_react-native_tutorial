import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

const App = () => (
  <View>
    <Header title="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('udemy_react_native_course', () => App);
