import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import styles from "./styles"
export default function CarItem() {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={require("../../assets/images/ModelX.jpeg")} style={styles.image}/>
        <View style={styles.titles} >
        
          <Text style={styles.title}> Model S</Text>
          <Text style={styles.subtitle}> Starting at $69,000</Text>
        </View>
        
        </View>
    )
}

const styles = StyleSheet.create({})
