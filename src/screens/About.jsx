import {  Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Contact")}
      >
        Ir para Contato
      </Button>
    </View>
  );
}