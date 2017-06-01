import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class Header extends Component {
  render() {
    const { headerContainerStyle, titleStyles } = styles;
    return (
      <View style={headerContainerStyle}>
        <Text style={titleStyles}>NYTimes Top Stories</Text>
      </View>
    );
  }
}

const styles = {
  headerContainerStyle: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  titleStyles: {
    fontSize: 17,
    alignSelf: 'center'
  }
};

export default Header;
