/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native';

import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
import TimeAgo from 'react-native-timeago';
const Stack = createStackNavigator();
class Health extends React.Component{
    constructor(props)
    {
        super(props)
        this.state= {
            articles: [],
            isLoading:false,
            refreshing: true

        }
        this.fetchNews = this.fetchNews.bind(this);
    }
    static navigationOptions = {
      tabBarVisible: false
    };
    componentDidMount(){
      this.fetchNews();
    
        
    }

    fetchNews = ()=>
    {
      this.setState({isLoading:true})
      axios.get("http://newsapi.org/v2/top-headlines?country=ae&category=health&apiKey=3df56e18c6404dd3942f026d183f0bae")
      .then((res) => this.setState({articles:res.data.articles,isLoading:false,refreshing: false})
      .catch(() => this.setState({ refreshing: false }))
      )
    }

    handleRefresh() {
      this.setState(
        {
          refreshing: true
      },
        () => this.fetchNews()
      );
    }

    renderItem = ({ item }) => {
      return(
        
        <View style={{marginBottom:30}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetails',   { item: item.url } )}>
            <View key={item.title} >
        
            <CardItem  style={{borderBottomLeftRadius:20}}>
              <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1,borderRadius:10}}/>
            </CardItem>
            </View>
         
           <View style={{marginLeft:20,marginRight:20}}>
             
          
           <Text style={{fontSize:20}}>{item.title}</Text>
           </View>
           
           
              
           <View style={{alignItems:'flex-end',marginRight:20}}>
          <TimeAgo  time={item.publishedAt}   />
           </View>
              
           </TouchableOpacity>
             
           
              </View>
      )
    }
  render()
  {
    const { navigate } = this.props.navigation;
   
    //const {url} =this.props.url
    return(
      <Container>
         
        <Content>
      <FlatList
      data={this.state.articles}
      renderItem={this.renderItem}
      keyExtractor={item => item.url}
      refreshing={this.state.refreshing}
      onRefresh={this.handleRefresh.bind(this)}
    />
    </Content>
    </Container>
      
    )
  }
}
export default Health
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


