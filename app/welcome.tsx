import Button from "@/components/button";
import { useRouter } from "expo-router";
// import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "~/constants/Colors";
import { FONTS } from "~/constants/Fonts";
export default function Welcome() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/auth/login");
  };
  // const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/onboarding.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>The Service Provider App</Text>
          <Text style={styles.description}>
            Application for easily finding a services Jobs!
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={handleGetStarted} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
  },
  image: {
    width: "100%",
    marginBottom: 8,
  },
  textContainer: {
    alignItems: "center",
    width: "80%",
    marginHorizontal: "auto",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    marginBottom: 8,
    color: Colors.secondary,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: FONTS.semiBold,
    marginBottom: 12,
    color: Colors.secondary,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.secondary100,
    fontFamily: FONTS.regular,
  },
  buttonContainer: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
});
