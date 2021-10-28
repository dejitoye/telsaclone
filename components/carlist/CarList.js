import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CarItems from '../carItem/CarItems'
import cars from "./cars"
import styles from './styles'
// console.log("cars",cars)
// import styles from './styles'
export default function CarList() {

    return (
        <View style={styles.carContainer}>
           <FlatList 

           snapToAlignment={"start"}
           decelerationRate={"fast"}

           snapToInterval={Dimensions.get("window").height}
           data={cars}
renderItem={({item})=>(


    <CarItems car={item} />
)}

           />
        </View>
    )
}
