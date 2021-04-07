import React from "react";
import { Text, View } from "react-native";

export default function LogInScreen() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Log in
      </Text>
    </View>
  );
}
