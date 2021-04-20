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
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import  Ionicons  from 'react-native-vector-icons/Ionicons'
class Category extends React.Component{
  render()
  {
    return(
      <Container>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            <Button transparent>
            <Ionicons  name="md-search" size={25} color="black" />
            </Button>
          </Left>
          <Body style={{ alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <Title style={{color:'black'}}>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              
            </Button>
          </Right>
        </Header>
        <View style={{flex:1}}>
          <Text>SPORT</Text>
          <Text>BUSINESS</Text>
          <Text>OTHER</Text>

        </View>
      </Container>
    )
  }
}
export default Category
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


