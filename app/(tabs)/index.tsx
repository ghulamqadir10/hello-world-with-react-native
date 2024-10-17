import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Text, View } from "react-native";


export default function HomeScreen() {
  return (
  
  <>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello world</ThemedText>
        <HelloWave />
      </ThemedView>
      <View  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
        
      <Link
      style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}
      href={"/about"}
      >
        About
      </Link>    
      <Link
      style={{ fontSize: 20, fontWeight: 500, letterSpacing: 2 }}
      href={"/contact"}
      >
        Contact
      </Link>    
        </View>
       </> 
      
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    gap: 8,
    textAlign: `center`,
  },
 
});
