import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Input } from "react-native-elements";

export default function Login({ navigation, route }) {
  const [nome, setnome] = useState(0);
  const [quantidade, setquantidade] = useState(0);


  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 2.5, alignItems: "center", paddingTop: 100 }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: "http://cdn.onlinewebfonts.com/svg/img_329115.png",
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.entrarContaText}>Entrar na conta</Text>
        <Text>
          nome :{nome}
          quantidade: {quantidade}
        </Text>

        <Input
          placeholder="Login"
          leftIcon={{ type: "email", name: "email", color: "#414E68" }}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          leftIcon={{ type: "Password", name: "vpn-key", color: "#414E68" }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Button
          title="Login"
          buttonStyle={[styles.Button, { backgroundColor: "#435159" }]}
        />

        <Button
          title="Cadastre-se"
          onPress={() => navigation.navigate("Cadastro")}
          buttonStyle={[styles.Button]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EBF0F2",
  },
  Button: {
    marginBottom: 20,
    backgroundColor: "#697F8C",
  },
  entrarContaText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
