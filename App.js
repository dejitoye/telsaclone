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
import CarItems from './components/carItem/CarItems';
import cars from "./utils/cars"
// import pic from "./assets/images"
import CarList from './components/carlist/CarList';
// console.log("object",cars)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Taba = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();





export default function App() {
  return (
    <Provider store={Store}>
{/* <CarItem/> */}



    <View style = {styles.body}>
    {/* <CarItems/> */}
<CarList/>
      
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



  }

 

})