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
              <Text style={styles.AMTitle}>Sobre Mim</Text>
              <Text style={styles.AMContent}>
                Em 2022, depois do ensino médio, encontrei minha primeira
                linguagem: JavaScript. Foi ali que escrevi meu primeiro “Hello
                World”. {"\n\n"}
                No ano seguinte, 2023, fiz um curso intensivo de desenvolvimento
                FullStack. Passei a entender que programar vai além de escrever
                código, envolve analisar problemas, estruturar soluções e
                aprender a lidar com erros. {"\n\n"}
                Em 2024 iniciei a faculdade de Análise e Desenvolvimento de
                Sistemas. Esse passo me ajudou a ampliar a visão, entendendo
                como pensar em sistemas completos, que precisam ser escaláveis e
                bem planejados. {"\n\n"}
                Com o tempo, percebi que o que mais me interessava era o
                backend, a parte que sustenta e organiza a aplicação. Cada
                projeto e cada falha reforçaram esse caminho. {"\n\n"}
                Agora, em 2025, aplico tudo o que aprendi em projetos reais,
                validando o que estudei e descobrindo o que ainda preciso
                melhorar. {"\n\n"}
                Olho para trás e vejo uma linha contínua: de um simples "Hello
                World" para o desenvolvimentos de sistemas e serviços completos.{" "}
                {"\n\n"}
                Olho para frente e vejo essa linha continuar, guiando uma
                evolução constante, acompanhando e aplicando as novas
                tecnologias.
              </Text>
            </View>
            <View style={styles.MyProjects}>Hello World!</View>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
