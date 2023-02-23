import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Contact" component={Contact}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}