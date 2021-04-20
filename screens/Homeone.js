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
  FlatList,
  Dimensions,
  ImageBackground
} from 'react-native';
var {height, width} = Dimensions.get('window');
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import Swiper from "react-native-swiper"
import LinearGradient from "react-native-linear-gradient"
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
import TimeAgo from 'react-native-timeago';
var moment = require('moment');
const arabiclocal = require('moment/locale/ar')
moment().format();
moment.locale('ar',arabiclocal);
const Stack = createStackNavigator();
class Homeone extends React.Component{
  static navigationOptions = {
    title: "Title",
    headerLeft: (
      <Icon
       
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      />
    ),
    headerRight: (
      <View >
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-heart" : "md-heart"} />
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} />
      </View>
    )
  };
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
      axios.get("http://newsapi.org/v2/top-headlines?country=ae&apiKey=3df56e18c6404dd3942f026d183f0bae")
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
        
        <View style={[styles.divnews,styles.shadows]}>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsPage',   { item: item.url } )}>
            <View style={{flexDirection:'row'}}>
        <Image style={styles.imagenew} source={{uri : item.urlToImage}} />
        <View style={{padding:10}}>
          <Text style={styles.titleNews}  >
            {item.title}
          </Text>
          </View>
          
        </View>
        <View style={{alignItems:'flex-end'}}>
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
        <View style={{flexDirection:'row',justifyContent:'space-between',elevation:10,borderWidth:2,backgroundColor:'white',borderColor:'white'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchPage')} style={{alignItems:'center',justifyContent:'center',marginRight:20}}>
      <Ionicons  name="md-search" size={30} color="gray" style={{marginRight:20}} />
      </TouchableOpacity>
        <Image source={require('../assets/logo.jpg')} style={{width:100,height:50}}/>
        
        </View>
      
        <Content>
          
        <View style={{height:200}}>
          <Swiper loop={true} autoplayTimeout={1} autoplay>
            {this.state.articles.map((itemimag)=>{
              return(
                
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsPage',   { item: itemimag.url } )}>
                <ImageBackground style={{width:width,height:200}} source={{uri: itemimag.urlToImage }}>
                  <LinearGradient style={styles.fondoBanner} colors={[ 'transparent', 'black']} >
                    <Text style={styles.textBanner} numberOfLines={2}>{itemimag.title}</Text>
                  </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
              )
            })}
          </Swiper>
        </View>
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
export default Homeone
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  imagenew: {
    width: width/4,
    height: width/4,
    resizeMode: 'cover',
    borderRadius:5
  },
  divnews:{
    width:width-10,
    backgroundColor:'white',
    margin:5,
    flexDirection:'row',
    borderRadius:5
  },
  shadows:{
    elevation:1,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0 },
  },
  titleNews:{
    width:((width/3)*2)-20,
    fontSize:15,
    fontFamily:'Dubai-Light'
  },
  themeNews:{
    color: "#c2191c",
    fontSize:15
  },
  headernews:{
    width:width,
    height:50,
    backgroundColor:"#c2191c",
    alignItems:'center',
    justifyContent:'center'
  },
  logonews:{
    height:45,
    width:width/3,
    resizeMode: 'contain',
  },
  textBanner:{
    fontSize:25,
    color:'white'
  },
  fondoBanner:{
    flex:2,
    justifyContent:"flex-end",
    padding:10
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
     elevation:10,
     height
  }
});


