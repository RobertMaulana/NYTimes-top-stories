import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Header from './Header';
import News from './News';

class Main extends Component {
  render() {
    return (
      <View>
        <Header />
        <News />
      </View>
    );
  }
}

export default Main;
