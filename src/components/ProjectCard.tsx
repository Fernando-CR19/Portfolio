import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "../styles/ProjectCard";

type ProjectCardProps = {
  title: string;
  description: string;
  image: any;
};

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <SafeAreaView>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={image} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </SafeAreaView>
  );
}
