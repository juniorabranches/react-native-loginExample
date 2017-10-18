import React, { Component } from 'react';
import { Dimensions, Slider, View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, StatusBar, Container, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'
import Masonry from 'react-native-masonry';
import Search from 'react-native-search-box';
import Icon from 'react-native-vector-icons/dist/Feather';
import Spinner from 'react-native-loading-spinner-overlay';

import Header from './header'
import Tabs from 'react-native-tabs';

const data = [
  {
    img: 'https://s-media-cache-ak0.pinimg.com/736x/32/7f/d9/327fd98ae0146623ca8954884029297b.jpg',
    caption: 'Summer Recipies',
    user: {
      name: 'Henry'
    },
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg',
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg',
  },
  {
    img: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',
  },
  {
    img: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg',
  },
  {
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg',
  }
]

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      columns: 2,
      padding: 5,
      page: 'Tab1',
      searchParams: '',
      loading: true
    }
  }

  handleSearch = searchParams => this.setState({ searchParams })

  searchData = (data, query) => {
    let queryFound = false;
    for (const key in data) {
      const value = data[key];

      if (typeof value === 'object') {
        queryFound = this.searchData(value, query);
      }

      if (value === query) {
        queryFound = true;
      }
    }

    return queryFound;

    }


  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      });
    }, 1000);
  }

  getBricks = () => {
    const { navigate } = this.props.navigation;
    const { searchParams } = this.state;

    return data.reduce((bricks, brick, index) => {
      const initBrick = {
        key: index,
        data: brick,
        uri: brick.img,
        onPress: ({ img = '' }) => navigate('Image', { img })
      }

      if(searchParams && !this.searchData(brick, searchParams)) {
        return bricks;
      }

      if (brick.caption) {
        return [...bricks, {
          ...initBrick,
          renderFooter: (data) => {
            return (
              <View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9 }}>
                <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
              </View>
            )
          },
          renderHeader: (data) => {
            return (
              <View key='brick-footer' style={styles.headerTop}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO3JMW5pmK-pq9g3T-1znMMK8IEELKnasQ6agJANePV7Z0nwp9w' }}
                  style={styles.userPic} />
                <Text style={styles.userName}>{data.user.name}</Text>
              </View>
            )
          },
        }]
      }

      return [...bricks, initBrick];
    }, [])
  }

  render() {
    const { navigate } = this.props.navigation;
    const bricks = this.getBricks();



    if(this.state.loading){
      return (
        <View style={{ flex: 1 }}>
          <Spinner visible={this.state.loading} textStyle={{color: '#FFF'}} />
        </View>
      )
    }else{
      return (
        <Image source={require('../../components/images/background.png')} style={styles.container}>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="user" color="white" size={20}/>
            <View style={{width: 70, height: 30, backgroundColor: 'white'}}></View>
            <Icon name="log-out" color="white" size={20}/>
          </View>
          <View style={{ flex: 0, padding: 15, marginBottom: 10, marginTop: 5}}>
            <Search inputHeight={35} inputBorderRadius={30} backgroundColor={'rgba(255, 0, 0, 0)'} ref="search_box" placeholder="Search"  onSearch={this.handleSearch}/>
          </View>
          <View style={{ padding: 20 }}>
            <Tabs style={{backgroundColor: '#2196F3'}} selected={this.state.page} selectedStyle={{ fontWeight: 'bold', color: '#FFFFFF' }} onSelect={el => this.setState({ page: el.props.name })}>
              <Text name="Tab1">Tab1</Text>
              <Text name="Tab2">Tab2</Text>
              <Text name="Tab3">Tab3</Text>
            </Tabs>
          </View>
          <View style={{ flex: 2, padding: this.state.padding, backgroundColor: '#fff' }}>
            <Masonry
              sorted
              bricks={this.getBricks()}
              columns={this.state.columns} />
          </View>
        </Image>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  userPic: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10
  },
  userName: {
    fontSize: 20
  }
});
