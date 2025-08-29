import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/HeaderHome";
import Footer from "../components/FooterHome";
import styles from "../styles/HomeScreen";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Header />
          <View style={styles.Body}>
            <View>
              <Text style={styles.Title}>
                Bem-vindo ao meu perfil. Sou um desenvolvedor backend.
              </Text>
              <Image
                source={require("../assets/profile.jpg")}
                style={styles.Profile}
              />
            </View>
            <View style={styles.AboutMe}>
              <Text>Hello World!</Text>
            </View>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
