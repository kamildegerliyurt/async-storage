import {StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';



const Details = ({navigation}) => {
//-------------------------------------------- textInput'daki dataları burada tutacağız
const [firstName, setFirstName]= useState("")
const [lastName, setLastName]= useState("")
//-------------------------------------------- "setItem" kullanarak "Save" işlemi yapmak için
const save = async ()=> {
    const user = {
        firstName,
        lastName,
    };

    await AsyncStorage.setItem("user-info", JSON.stringify(user))

    setFirstName("");
    setLastName("");

}
//--------------------------------------------"removeItem" kullanarak "Remove" işlemi yapmak için

const remove = ()=> {
    AsyncStorage.removeItem("user-info")
}
//--------------------------------------------





  return (
    <View style={styles.detailsContainer}>

        <TextInput style={styles.firstNameTextInput}
                    placeholder='Firstname'
                    onChangeText={(text)=> setFirstName(text)}
                    value={firstName}/>

        <TextInput style={styles.lastNameTextInput}
                    placeholder='Lastname'
                    onChangeText={(text)=> setLastName(text)}
                    value={lastName}/>


                <TouchableOpacity style={styles.saveButton}
                           onPress={()=> save()}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.removeButton}
                           onPress={()=> remove()}>
                    <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.goToHomeButton}
                           onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.goToBackText}>GO TO BACK</Text>
                </TouchableOpacity>



    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    detailsContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    firstNameTextInput: {
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:1,
        padding:10,      
    },
    lastNameTextInput: {
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:1,
        padding:10,  
        marginTop:10,
    },
    saveButton: {
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center",
        width:"40%",
        marginTop:20,
        borderRadius:10,
        backgroundColor:"dodgerblue",
        padding:5,
    },
    saveText: {
        fontSize:20,
        fontWeight:"bold",
    },
    removeButton: {
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center",
        width:"40%",
        marginTop:20,
        borderRadius:10,
        backgroundColor:"tomato",
        padding:5,
    },
    removeText: {
        fontSize:20,
        fontWeight:"bold",
    },
    goToHomeButton: {
        borderWidth:2,
        marginTop:10,
        width:"50%",
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        borderRadius:10,
        backgroundColor:"lime",
        
    },
    goToBackText: {
        fontSize:15,
        fontWeight:"bold",
    }
})