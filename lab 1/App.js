import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Linking } from 'react-native';
import PhotoCard from './src/components/photocard';

export default function App() {
  return (
    <ScrollView > 
       <View  style={styles.container}>
         <PhotoCard name="Abdelrahman Magdy" description="Full stack Devoloper"  />
       </View>
    </ScrollView> 
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
