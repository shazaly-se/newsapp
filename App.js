import * as React from 'react';
import { Text, View ,ScrollView,Image,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Homeone from './screens/Homeone'
import NewsPage from './screens/NewsPage'
import NewsDetails from './screens/NewsDetails'
import SearchPage from './screens/SearchPage'
import Profile from './screens/Profile'
import Category from './screens/Category'
import ContentPage from './screens/ContentPage'
import MyIcon from './screens/MyIcon';
import Explore from './screens/Explore'
import Business from './tabs/Business'
import Technology from './tabs/Technology'
import Entertainment from './tabs/Entertainment'
import Sport from './tabs/Sport'
import Health from './tabs/Health'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();
export default class App extends React.Component {
  constructor(props)
  {
    super(props)
    
  }
 



 render(){
  console.disableYellowBox = true;

  
  createHomeStack = ()=>
  <Stack.Navigator initialRouteName='Home'
  screenOptions={{
    gestureEnabled: true}}>
    <Stack.Screen name="Home" component={Homeone}  options={{
          title:  '' ,
          headerRight: () => (<Image source={require('./assets/logo.jpg')} style={{width:100,height:50}}/>)
        
        }}/>
        <Stack.Screen name="SearchPage" component={SearchPage} options={{
          title:  "" ,
          headerRight: () => (<Image source={require('./assets/logo.jpg')} style={{width:100,height:50}}/>)
         
        }} />
        
    
    <Stack.Screen name="NewsPage" component={NewsPage}  />
  </Stack.Navigator>
  //
  createCategoryStack = ()=>
  <Stack.Navigator initialRouteName='createTopTabs'
  options={{
          headerRight:()=> null,
          headerLeft: () => (<Image source={require('./assets/logo.jpg')} style={{width:100,height:50}}/>)
        }} >
    <Stack.Screen name="createTopTabs" component={createTopTabs}   options={{
          
          header: () => null
        }}/>

<Stack.Screen name="NewsDetails" component={NewsDetails} options={{
          header: () => null
        
        }}/>

<Stack.Screen name="SearchPage" component={SearchPage} options={{
          header: () => null
        
        }}/>
       
   
  </Stack.Navigator>

  createTopTabs = ()=>{
  return <MaterialTopTab.Navigator  options={{
    title:  "" ,
    headerRight: () => (<Image source={require('./assets/logo.jpg')} style={{width:100,height:50}}/>)
  }}>
    <MaterialTopTab.Screen name="تجارة واعمال" component={Business} style={{padding:20}}></MaterialTopTab.Screen>
    <MaterialTopTab.Screen name="العلوم والتكنولوجيا" component={Technology}></MaterialTopTab.Screen>
    <MaterialTopTab.Screen name="ترفيه" component={Entertainment}></MaterialTopTab.Screen>
    <MaterialTopTab.Screen name="رياضة" component={Sport}></MaterialTopTab.Screen>
    <MaterialTopTab.Screen name="صحة" component={Health}></MaterialTopTab.Screen>
  </MaterialTopTab.Navigator>
  }
  function HomeTabs() {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'محتوى يهمك') {
            iconName = focused
              ? 'md-home'
              : 'md-home';
          } else if (route.name === 'أهم عناوين') {
            iconName = focused ? 'md-globe' : 'md-globe';
          }else if (route.name === 'محتوى تتابعه') {
            iconName = focused ? 'md-star' : 'md-star-outline';
          }else if (route.name === 'التصفح والاشتراك') {
            iconName = focused ? 'md-barcode' : 'md-barcode';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="محتوى يهمك" component={Homeone} />
      <Tab.Screen name="أهم عناوين" children={createCategoryStack}   />
      {/* <Tab.Screen name="محتوى تتابعه" component={ContentPage} />
      <Tab.Screen name="التصفح والاشتراك" component={Explore}  /> */}
    </Tab.Navigator>
    );
  }
  return (
    <Container style={{backgroundColor:'white'}}>
     
    <NavigationContainer>
    
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabs} options={{
          header: () => null
        
        }}/>
      <Stack.Screen name="SearchPage" component={SearchPage} options={{
          header: () => null
        
        }}/>
          <Stack.Screen name="NewsPage" component={NewsPage} options={{
          header: () => null
        
        }}/>
    </Stack.Navigator>
     
    </NavigationContainer>
    </Container>
  );
}
}