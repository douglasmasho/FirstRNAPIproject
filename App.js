import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "./src/screens/SearchScreen";
import AppLoading  from "expo-app-loading";
import * as Font from "expo-font";
import TestScreen from "./src/screens/TestScreen";


const Stack = createNativeStackNavigator();

const App = () => {
   // the same as Font.loadAsync , the hook returns  true | error 
   const [isLoaded,setIsLoaded] = useState(false);

   const loadFonts = async()=>{
    try{
      let isLoad = await Font.loadAsync({
        // add as many fonts as you want here .... 
        Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
        Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
        Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf")
      });
      setIsLoaded(true);
      console.log("success")
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    loadFonts();
  }, [])

  if (!isLoaded) {
    return <AppLoading />;
}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Business Search'>
        <Stack.Screen name="Business Search" component={SearchScreen} options={{
      headerTitleStyle: {
        fontFamily: "Poppins_Medium"
      }
      }}/>
        <Stack.Screen name="Test" component={TestScreen} options={{
      headerTitleStyle: {
        fontFamily: "Poppins_Medium"
      }
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
