import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../utils/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, seja bem vindo a Home!</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("About")}
      >
        Ir para Sobre
      </Button>
    </View>
  );
}
