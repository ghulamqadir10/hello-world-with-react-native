import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Image, Platform } from "react-native";


const contact = () => {
  return (
    <>
 <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Contact</ThemedText>
      {/* <Link href={`/`}>GO back to Home screen</Link> */}
    </ThemedView>



      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        {/* <Text>Contact</Text> */}
        <Link href={`/`}>Go Back</Link>
      </View>
    </>
  );
};

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
export default contact;
