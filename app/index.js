import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../utils/Colors";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{ title: "Home",headerStyle: {backgroundColor: COLORS.background},headerTitleStyle: {color: COLORS.textLight} }} >
    </Stack.Screen>
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background
    },
});