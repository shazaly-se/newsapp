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
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons'

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title } from 'native-base';

class ContentPage extends React.Component{
  render()
  {
    return(
      <Container>
      <View style={{flexDirection:'row',justifyContent:'space-between',elevation:10,borderWidth:2,backgroundColor:'white',borderColor:'white'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchPage')} style={{alignItems:'center',justifyContent:'center',marginRight:20}}>
    <Ionicons  name="md-search" size={30} color="gray" style={{marginRight:20}} />
    </TouchableOpacity>
      <Image source={require('../assets/logo.jpg')} style={{width:100,height:50}}/>
      
      </View>
    
      <Content>
        
      <View style={{height:200,flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Content</Text>
     </View>

  </Content>
  </Container>
    )
  }
}
export default ContentPage
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


