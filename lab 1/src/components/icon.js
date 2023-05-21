import React from "react";
import { StyleSheet, View, Button, ScrollView, Linking } from 'react-native';
import { Text, Card } from '@rneui/themed';

import { Ionicons } from "@expo/vector-icons"

export default function Myicon(){
    return(
        <View style={{flex:1, flexDirection: 'row',margin:5}}>
           
        <Ionicons size={20} color="blue" style={{margin:5}}
        name='logo-facebook' 
        onPress={() => {Linking.openURL("https://www.facebook.com")}}/>

        <Ionicons size={20} color="blue" style={{margin:5}}
        name='logo-twitter'  
        onPress={() => {Linking.openURL("https://www.facebook.com")}}/>

        <Ionicons size={20} color="blue" style={{margin:5}}
        name='download'  
        onPress={() => {Linking.openURL("https://www.facebook.com")}}/>

        <Ionicons size={20} color="blue" style={{margin:5}}
        name='logo-linkedin' 
        onPress={() => {Linking.openURL("https://www.linkedin.com/feed/")}}/>

        <Card.Divider />
      </View>
      
       

    )

}