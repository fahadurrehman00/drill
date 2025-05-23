import Button from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "~/constants/Fonts";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="alert-circle-outline" size={100} color="#FF3B30" />
      <Text style={styles.errorText}>404</Text>
      <Text style={styles.messageText}>Oops! Page not found.</Text>
      <Button title="Go Home" onPress={() => router.push("/")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  errorText: {
    fontSize: 48,
    fontFamily: FONTS.bold,
    color: "#333",
    marginBottom: 8,
  },
  messageText: {
    fontSize: 18,
    color: "#666",
    fontFamily: FONTS.regular,
    textAlign: "center",
    marginBottom: 24,
  },
});
