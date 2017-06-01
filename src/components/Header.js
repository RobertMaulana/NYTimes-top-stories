import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class Header extends Component {
  render() {
    const { topStoriesStyle, headerContainerStyle, titleStyles } = styles;
    return (
      <View style={headerContainerStyle}>
        <Image
          style={titleStyles}
          source={require('../img/NYT-wordmark.png')}
        />
        <Text style={topStoriesStyle}>Top Stories</Text>
      </View>
    );
  }
}

const styles = {
  headerContainerStyle: {
    padding: 17,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  topStoriesStyle: {
    fontSize: 15,
    alignSelf: 'flex-end',
    paddingTop: 5,
    marginRight: 45
  },
  titleStyles: {
    height: 25,
    width: 300,
    alignSelf: 'center'
  }
};

export default Header;
