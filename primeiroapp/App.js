import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Lista from "./screens/Listar";
import InserirScreen from "./screens/Inserir";
import AlterarScreen from "./screens/Alterar";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Inserir"
          component={InserirScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Alterar"
          component={AlterarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
