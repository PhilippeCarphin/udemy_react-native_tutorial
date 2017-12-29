import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header title="Albums" />
);

AppRegistry.registerComponent('udemy_react_native_course', () => App);
