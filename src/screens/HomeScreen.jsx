import { Image, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{
      flexBasis: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Image
        source={{
          uri: 'https://i.imgur.com/UB83Wq5.jpeg'
        }}
        style={{
          width: '100%',
          height: '300px'
        }}/>
      <Text
        style={{
          color: '#000',
          fontSize: 30,
        }}>Olá, seja bem vindo!</Text>
    </View>
  );
}
