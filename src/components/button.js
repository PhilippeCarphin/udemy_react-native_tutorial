import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//Ref : https://facebook.github.io/react-native/docs/touchableopacity.html
// See TouchableXYZ in the left sidebar

const Button = (props) => {
  // probably should call pressHandler 'onPress' for uniformity
  // but for this tutorial, I'm using my own name to show that
  // this is a name that I chose
  const { pressHandler, text } = props;
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={pressHandler} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

class Button extends Component {
  const { pressHandler } = props;
  return (
    <TouchableOpacity onPress={pressHandler} 
      style={[ styles.default, this.props.style || {} ]>
      {this.children}
    </TouchableOpacity>
  );
}

const styles = {
  default: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
