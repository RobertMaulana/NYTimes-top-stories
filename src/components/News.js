import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import axios from 'axios';
import DetailNews from './DetailNews';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentWillMount() {
    const self = this;
    axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
      params: {
        'api-key': '21fb82f4756b455cbd77f1aba5203def'
      }
    })
    .then((response) => {
      self.setState({ news: response.data.results });
    });
  }

  detailNews = (url) => {
    return <DetailNews url={url} />;
  }

  render() {
    const { news } = this.state;
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
          <Text style={loadingStyle}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            data={news}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={contentContainerStyle}
                onPress={() => this.detailNews(item.url)}
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingStyle: {
    justifyContent: 'center',
    marginTop: '50%'
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
