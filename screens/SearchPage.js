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
  TouchableOpacity
} from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import  Ionicons  from 'react-native-vector-icons/Ionicons'

class SearchPage extends React.Component{
  render()
  {
    return(
      <Container>
      <View style={{flexDirection:'row',justifyContent:'space-between',elevation:10,borderWidth:2,backgroundColor:'white',borderColor:'white'}} >
       <TouchableOpacity onPress={() =>this.props.navigation.goBack()} style={{alignItems:'center',justifyContent:'center'}}>
      <Ionicons  name="md-arrow-forward" size={25} color="gray" />
      </TouchableOpacity>
      
          <Input placeholder="البحث عن مواضيع ومواقع جغرافية ومصادر"  autoFocus={true} />
          
      </View>
    </Container>
    )
  }
}
export default SearchPage
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


