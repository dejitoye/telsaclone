import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Buttons from '../button/Buttons'
import styles from "./styles"
export default function CarItems(props) {
    const {name,tagline,image,taglineCTA} = props.car
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image}/>
        <View style={styles.titles} >
        
          <Text style={styles.title}> {name}</Text>
          <Text style={styles.subtitle}> {tagline} 
          
          <Text style={styles.cta}> {taglineCTA}</Text>
          </Text>
        
        </View>


        <View style={styles.btnContainer}>
        <Buttons type = "primary" content = {"Custom Order"} onPress = {()=>{console.warn("order was pressed")}}/>
        <Buttons type = "secondary" content = {"Exting Inventory"} onPress = {()=>{console.warn("Exiting Inventory was pressed")}}/>
        </View>
        </View>
    )
}

// const styles = StyleSheet.create({})
