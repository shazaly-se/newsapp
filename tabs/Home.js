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


class Home extends React.Component{
  render()
  {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Profile')}><Text>home</Text></TouchableOpacity>
      </View>
    )
  }
}
export default Home
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


