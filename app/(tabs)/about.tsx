import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";


import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View,Button } from "react-native";

// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Link } from "expo-router";

export default function About() {
  return (
    <>
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">About</ThemedText>
      {/* <Link href={`/`}>GO back to Home screen</Link> */}
    </ThemedView>
    
    <View   style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
>
      <Link href={`/`}>
      Go Back
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
    // marginTop: `100px`,
  },
});
