import React, { useRef, useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import useColorScheme, { useColors } from "../hooks/useColorScheme";
import { mainStyles } from "../listStyles";
import { Text } from "./Themed";

interface IRenameControl {
  onSave: (value: string) => void;
}

const RenameControl = ({ onSave }: IRenameControl) => {
  const colors = useColors();
  const styles = mainStyles(colors);
  const [text, setText] = useState("");
  const localStyles = StyleSheet.create({
    control: {
      display: "flex",
      flexDirection: "row",
    },
  });

  const save = () => {
    onSave(text);
  };

  return (
    <View style={localStyles.control}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setText}
        onSubmitEditing={save}
      />
      <Pressable style={styles.button} onPress={save}>
        <Text>Save</Text>
      </Pressable>
    </View>
  );
};

export default RenameControl;
