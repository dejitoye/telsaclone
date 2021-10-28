import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
export default function Buttons(props) {

    const type = props.type
const content = props.content
const onPress = props.onPress

    const bgcolor = type === "primary" ? "#171A20CC":"#FFFFFFA6"
    const txtColor = type === "primary" ? "#FFFFFF":"#171A20"


    
    return (
        <View style={styles.container}>
           <Pressable style={[styles.button1,{backgroundColor:bgcolor}]}
           onPress={onPress}
           >
<Text style={[styles.text],{color:txtColor}}> {content}</Text>
           </Pressable>
        </View>
    )
}

// const styles = StyleSheet.create({})
