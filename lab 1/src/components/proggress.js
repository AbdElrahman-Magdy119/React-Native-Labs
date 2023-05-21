import React from "react";
import { StyleSheet, View, Button, ScrollView, Linking } from 'react-native';
import { Text, Card } from '@rneui/themed';

import { Ionicons } from "@expo/vector-icons"
import { YellowBox } from "react-native-web";

import * as Progress from 'react-native-progress';
export default function Informationcard(){
    return(
        <View>
              <Text style={{fontSize:20}}   > Languages </Text> 
             <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
             <Text   > English </Text> 
             <Text style={{fontSize:10}}> 30% </Text> 
             </View>
             <Progress.Bar progress={0.3} width={200} />
             <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
             <Text   > oop </Text> 
             <Text style={{fontSize:10}}> 30% </Text> 
             </View>
             <Progress.Bar progress={0.3} width={200} />
             <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
             <Text   > C++ </Text> 
             <Text style={{fontSize:10}}> 30% </Text> 
             </View>
             <Progress.Bar progress={0.3} width={200} />
             <View style={{flex:1, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',marginTop:5}}>
             <Text   > Wordpress </Text> 
             <Text style={{fontSize:10}}> 30% </Text> 
             </View>
             <Progress.Bar progress={0.5} width={200} />
        </View>
        )

    }

