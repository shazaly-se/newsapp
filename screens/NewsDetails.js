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
  TouchableOpacity,
  Image
} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { WebView } from 'react-native-webview';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

class NewsDetails extends React.Component{


  constructor(props){
    super(props);
    this.state = {
        url:''
    }
}
  componentDidMount()
  {
    const { route } = this.props
    const { item } = route.params
    //const { url } = item
    this.setState({url:item})
  }
  render()
  {
    //console.log(this.props.navigation.getParams('url'))
    return(
     
      <Container>
      <View style={{flexDirection:'row',justifyContent:'space-between',elevation:10,borderWidth:2,backgroundColor:'white',borderColor:'white',elevation:10,height:50}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{alignItems:'center',justifyContent:'center',marginRight:20}}>
            <Ionicons  name="md-arrow-forward" size={30} color="gray" style={{marginRight:20}} />
            </TouchableOpacity>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',marginRight:80}}>
              <Text style={{fontSize:30,color:'blue'}}>.......</Text>
              </View>
              </View>
           
                        <WebView
        
          source={{uri: this.state.url}}
        />
          </Container> 
     
    )
  }
}
export default NewsDetails
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


