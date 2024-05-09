import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';


import AsyncStorage from '@react-native-async-storage/async-storage';




const Home = ({navigation}) => {
//------------------------------
const [user, setUser]= useState({})
//------------------------------"getItem" kullanarak "Veriyi Çagırma/Okuma" işlemi yapmak için
useEffect(() => {
  (async ()=> {
    const data = await AsyncStorage.getItem("user-info")
     if(data){
        setUser(JSON.parse(data))
     }
  })();
}, [])

//--------------------------------


  return (
    <View style={styles.homeContainer}>


        <View style={styles.topContainer}>
            <Text>FirstName: {user.firstName}</Text>
            <Text>LastName:  {user.lastName}</Text>
        </View>





        <TouchableOpacity style={styles.gotoDetailsContainer}
                   onPress={()=> navigation.navigate("Details")}>
              <Text style={styles.gotoDetailsText}>GO TO DETAILS</Text>
        </TouchableOpacity>


        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    gotoDetailsContainer: {
      borderWidth:2,
      alignItems:"center",
      justifyContent:"center",
      width:"40%",
      marginTop:20,
      borderRadius:10,
      backgroundColor:"black",
      padding:5,
    },
    gotoDetailsText: {
      fontSize:17,
      fontWeight:"bold",
      color:"yellow",
    },
    topContainer: {
      borderWidth:2,
      width:"95%", 
      height:300,
      alignItems:"center", 
      justifyContent:"center" ,
      backgroundColor:"#FFE9F3",
      borderRadius:10,
    }
 
})