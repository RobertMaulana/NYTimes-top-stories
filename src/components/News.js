import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './Header';

class News extends Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      visible: false
    };
  }

  componentWillMount() {
    const self = this;
    self.setState({ visible: true });
    axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
      params: {
        'api-key': '21fb82f4756b455cbd77f1aba5203def'
      }
    })
    .then((response) => {
      self.setState({ news: response.data.results });
    });
  }

  render() {
    const { news } = this.state;
    const { navigate } = this.props.navigation;
    const {
      contentContainerStyle,
      dateStyle,
      titleStyle,
      imageNewsStyle,
      loadingContainerStyle,
      loadingStyle
    } = styles;

    if (news.length === 0) {
      return (
        <View style={loadingContainerStyle}>
          <Header />
          <Spinner
            style={loadingStyle}
            visible={this.state.visible}
            textContent={'Loading...'}
            textStyle={{ color: '#fff' }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Header />
          <FlatList
            data={news}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={contentContainerStyle}
                onPress={() => navigate('DetailNews', { url: item.url })}
              >
                <View key={item.title}>
                  <Text style={titleStyle}>{item.title}</Text>
                  <Text style={dateStyle}>{item.created_date}</Text>
                  <Image
                    style={imageNewsStyle}
                    source={{ uri: item.multimedia[3].url }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  }
}

const styles = {
  contentContainerStyle: {
    margin: 12,
    padding: 25,
    backgroundColor: '#fff',
    shadowColor: '#eef',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    height: 350
  },
  dateStyle: {
    color: '#ccc',
    fontSize: 12,
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  loadingContainerStyle: {
  },
  loadingStyle: {
    justifyContent: 'center',
    marginTop: '50%',
    flex: 1
  },
  titleStyle: {
    fontSize: 15
  },
  imageNewsStyle: {
    height: 210,
    width: null
  }
};

export default News;
