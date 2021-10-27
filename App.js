import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native'
import { Provider } from 'react-redux';
import { Store } from './reduxstore/store';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Taba = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();





export default function App() {
  return (
    <Provider store={Store}>

    <View style = {styles.body}>
<View style={styles.carContainer}>
<ImageBackground source={require("./assets/images/ModelX.jpeg")} style={styles.image}/>
<View style={styles.titles} >

  <Text style={styles.title}> Model S</Text>
  <Text style={styles.subtitle}> Starting at $69,000</Text>
</View>

</View>
      
    </View>
    </Provider>

  )
}
const styles = StyleSheet.create({
  body:{
// marginTop:40,
flex:1,
justifyContent:"center",
alignItems:"center",
fontFamily:"DancingScript-Regular",
backgroundColor:"#fff"



  },

  text:{
fontFamily:'Nunito-ExtraBold',

fontSize:40


  },
  carContainer:{
width:"100%",
height:"100%",
  },
  titles:{

    marginTop:"30%",
width:"100%",
alignItems:"center",

// backgroundColor:"red"




  },
  title:{
fontSize:40,
fontWeight:"bold"

  },
subtitle:{
fontSize:16,

color:"#5c5e62"

},

image:{
  width:"100%",
  height:"100%",
  resizeMode:"cover",
position:"absolute"

}

})