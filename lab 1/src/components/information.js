import React from "react";
import { StyleSheet, View, Button, ScrollView, Linking } from 'react-native';
import { Text, Card } from '@rneui/themed';

import { Ionicons } from "@expo/vector-icons"
import { YellowBox } from "react-native-web";

export default function Informationcard(){
    return(
         <view>
         <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'}}>
            <Text  style={{  backgroundColor: '#1e90ff'}} > Age </Text> 
            <Text style={{fontSize:10}}> 26 </Text> 
         </View>

          <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
          <Text  style={{  backgroundColor: '#1e90ff'}} > Residence </Text> 
          <Text style={{fontSize:10}}> BD </Text> 
          </View>
          
          <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
          <Text  style={{  backgroundColor: '#1e90ff'}} > Freelancer </Text> 
          <Text style={{fontSize:10}}> Available </Text> 
          </View>
          
          <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
          <Text  style={{backgroundColor: '#1e90ff'}} > Address </Text> 
          <Text style={{fontSize:10}}> Assuit </Text> 
          </View>

          </view>
        )

    }