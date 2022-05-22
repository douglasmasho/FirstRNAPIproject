import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const Searchbar = () => {
    return (
        <View style={styles.background}>
            <View style={styles.iconContainer}>
            <Feather name="search" style={styles.iconStyle}/>
            </View>
            <TextInput style={styles.textInput} placeholder="Search"/>
        </View>
    ); 
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#e0e0e0",
        height: 50,
        borderRadius: 12,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    text: {
        fontFamily: "Poppins_Regular"
    },
    textInput: {
        fontFamily: "Poppins_Regular",
        fontSize: 15,
        flex: 1,
        paddingRight: 8,
        paddingLeft: 10,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center"
    }
})

export default Searchbar;
