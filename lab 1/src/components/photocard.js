// import React from "react";

// import { Text, Card } from '@rneui/themed';


// export default function MyCard(props){
//     return(
//     //     <Card style={{ width:100,height:100}}  >
           
//     //     <Card.Image
        
//     //       source={require('../../assets/1.jpeg')}
//     //     />
//     //     <Card.Title style={{ padding: 0,fontSize:15 }}>{props.title}</Card.Title>
//     //     <Card.Title style={{ padding: 0,fontSize:10 }}>{props.job}</Card.Title>
    
//     //     <Text style={{ marginBottom: 10 }}>
//     //       The idea with React Native Elements is more about component
//     //       structure than actual design.
//     //     </Text>

//     //     <Card.Divider />
//     //   </Card>
//     <Card>
//     <Card.Title>{props.title}</Card.Title>
//     <Card.Divider />
//     <Card.Image
//       style={{ padding: 0 }}
//       source={{
//         uri:
//           'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
//       }}
//     />
//     <Text style={{ marginBottom: 10 }}>
//       The idea with React Native Elements is more about component
//       structure than actual design.
//     </Text>
   
//   </Card>

//     )

// }
import React from "react";

import { Text, Card } from "@rneui/themed";
import { StyleSheet, View, ScrollView } from "react-native";
import Myicon from '../components/icon';
import Informationcard from '../components/information';
import Languages from '../components/proggress';
export default function PhotoCard(props) {
  return (
    <Card>
      
      <Card.Image
        style={{ padding: 0, borderRadius: "50%", marginBottom: "1rem" }}
        source={
          require("../../assets/1.jpeg")
        }
      />
      <Card.Title style={{ fontSize: 15 }}>{props.name}</Card.Title>
      <Card.Title style={{ fontSize: 10 }}>{props.description}</Card.Title>
      <Card.Divider />
      <Myicon/>
      <Card.Divider />
      <Informationcard style={{ marginTop:5}}/>
      <Card.Divider style={{ marginTop:10}} />
      <Languages/> 
      


    </Card>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
 },
});