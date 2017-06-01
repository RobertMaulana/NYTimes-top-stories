import React, { Component } from 'react';
import { WebView } from 'react-native';

class DetailNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    alert("test");
    return (
      <WebView
        source={{ uri: 'https://github.com/facebook/react-native' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default DetailNews;
