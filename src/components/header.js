import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

export default Header;

const styles = {
  viewStyle: {
    backgroundColor: '#E8E8E8'
  },
  textStyle: {
    fontSize: 20
  }
};
