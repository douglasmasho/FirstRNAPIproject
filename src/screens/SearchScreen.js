import React from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import Searchbar from '../components/SearchBar';

const SearchScreen = (props) => {
    return (
        <View>
            <Searchbar/>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: "red"
    }
})

export default SearchScreen;
