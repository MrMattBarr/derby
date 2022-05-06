import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import PhoneBottomSpacer from "./PhoneBottomSpacer";
import UploadSpotButton from "./UploadSpotButton";

export default function NewSpotBar() {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "row",
      paddingVertical: 20,
    },
  });
  return (
    <View style={styles.container}>
      <UploadSpotButton />
      <PhoneBottomSpacer />
    </View>
  );
}