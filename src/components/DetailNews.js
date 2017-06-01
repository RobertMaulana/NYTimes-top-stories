import React, { Component } from 'react';
import { WebView } from 'react-native';

class DetailNews extends Component {

  static navigationOptions = {
    title: ''
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { url } = this.props.navigation.state.params;
    return (
      <WebView
        source={{ uri: url }}
      />
    );
  }
}

export default DetailNews;
